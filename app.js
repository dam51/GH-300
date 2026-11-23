"use strict";

const DOMAINS = window.GH300_DOMAINS;
const CARDS = window.GH300_CARDS;
const QUESTIONS = window.GH300_QUESTIONS;

const STORE_KEY = "gh300.v1";
const EXAM_MINUTES = 100;
const TARGET_PCT = 75; // training threshold, not GitHub's published pass mark
const BOX_DAYS = [0, 0, 1, 3, 7, 21]; // index = Leitner box 1..5

const ALLOWED_HOSTS = [
  "docs.github.com",
  "learn.github.com",
  "learn.microsoft.com",
  "resources.github.com",
  "github.com",
  "ruby-doc.org",
  // GitHub Docs defers Copilot data-retention questions to the Trust Center.
  "copilot.github.trust.page",
];

const $ = (sel) => document.querySelector(sel);
const domainName = (id) => (DOMAINS.find((d) => d.id === id) || {}).name || id;

/* ---------- storage ---------- */

function blankState() {
  return { boxes: {}, answers: {}, exams: [], missed: {} };
}

function load() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return blankState();
    return Object.assign(blankState(), JSON.parse(raw));
  } catch {
    return blankState();
  }
}

function save() {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(state));
  } catch {
    /* private browsing or quota; drilling still works, progress just is not kept */
  }
}

let state = load();

// A missed question leaves the drill list only after two consecutive correct answers.
const MASTERY_STREAK = 2;

function recordAnswer(q, correct) {
  const a = (state.answers[q.d] = state.answers[q.d] || { right: 0, wrong: 0 });
  if (correct) a.right++;
  else a.wrong++;

  const m = state.missed[q.id];
  if (!correct) {
    state.missed[q.id] = { wrong: (m ? m.wrong : 0) + 1, streak: 0 };
  } else if (m) {
    const streak = m.streak + 1;
    if (streak >= MASTERY_STREAK) delete state.missed[q.id];
    else state.missed[q.id] = { wrong: m.wrong, streak };
  }
  save();
}

function missedQuestions() {
  return QUESTIONS.filter((q) => state.missed[q.id]);
}

/* ---------- helpers ---------- */

// Only render links we trust. Anything else is dropped rather than rendered.
function safeHref(url) {
  try {
    const u = new URL(url);
    if (u.protocol !== "https:") return null;
    return ALLOWED_HOSTS.includes(u.hostname) ? u.href : null;
  } catch {
    return null;
  }
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function sameSet(a, b) {
  if (a.length !== b.length) return false;
  const s = new Set(b);
  return a.every((x) => s.has(x));
}

function fillDomainSelect(el, allLabel) {
  el.appendChild(new Option(allLabel, "all"));
  DOMAINS.forEach((d) => el.appendChild(new Option(`${d.id}. ${d.name}`, d.id)));
}

// Never let an unchecked fact look like a confirmed one.
function verifyTag(item) {
  return item.v ? ` - verified ${item.v}` : " - UNVERIFIED, check the source doc";
}

/* ---------- navigation ---------- */

function showView(name) {
  document.querySelectorAll(".view").forEach((v) => v.classList.add("hidden"));
  $(`#view-${name}`).classList.remove("hidden");
  document.querySelectorAll("#nav button").forEach((b) => {
    b.classList.toggle("active", b.dataset.view === name);
  });
  if (name === "stats") renderStats();
  if (name === "cards") nextCard();
  if (name === "review") renderReview();
  window.scrollTo(0, 0);
}

function updateReviewBadge() {
  const n = missedQuestions().length;
  const badge = $("#review-badge");
  badge.textContent = n ? String(n) : "";
  badge.classList.toggle("hidden", n === 0);
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-view]");
  if (btn) showView(btn.dataset.view);
});

/* ---------- home ---------- */

function renderHome() {
  document.querySelectorAll("[data-count=cards]").forEach((s) => (s.textContent = CARDS.length));
  document.querySelectorAll("[data-count=questions]").forEach((s) => (s.textContent = QUESTIONS.length));

  const ul = $("#blueprint");
  DOMAINS.forEach((d) => {
    const li = document.createElement("li");
    const a = document.createElement("span");
    a.textContent = `${d.id}. ${d.name}`;
    const b = document.createElement("span");
    const inBank = QUESTIONS.filter((q) => q.d === d.id).length;
    const verified = QUESTIONS.filter((q) => q.d === d.id && q.v).length;
    b.textContent = `${d.min} to ${d.max} percent, ${inBank} questions (${verified} verified)`;
    li.append(a, b);
    ul.appendChild(li);
  });

  const items = [...CARDS, ...QUESTIONS];
  const ok = items.filter((i) => i.v).length;
  $("#verified-line").textContent =
    `${ok} of ${items.length} items (${Math.round((ok / items.length) * 100)} percent) have been ` +
    "checked against the linked doc. The rest are labelled UNVERIFIED in the app.";
}

/* ---------- flashcards ---------- */

let currentCard = null;

function cardBox(id) {
  return state.boxes[id] || { box: 1, due: 0 };
}

function cardPool() {
  const dom = $("#card-domain").value;
  const dueOnly = $("#card-due-only").checked;
  const now = Date.now();
  return CARDS.filter((c) => {
    if (dom !== "all" && c.d !== dom) return false;
    if (dueOnly && cardBox(c.id).due > now) return false;
    return true;
  });
}

function nextCard() {
  const pool = cardPool();
  const total = $("#card-domain").value === "all"
    ? CARDS.length
    : CARDS.filter((c) => c.d === $("#card-domain").value).length;
  $("#card-progress").textContent = `${pool.length} of ${total} ready`;

  if (!pool.length) {
    $("#card-empty").classList.remove("hidden");
    $("#card-area").classList.add("hidden");
    return;
  }
  $("#card-empty").classList.add("hidden");
  $("#card-area").classList.remove("hidden");

  // Prefer the lowest Leitner box so weak cards surface first.
  const minBox = Math.min(...pool.map((c) => cardBox(c.id).box));
  const weakest = pool.filter((c) => cardBox(c.id).box === minBox);
  currentCard = weakest[Math.floor(Math.random() * weakest.length)];

  const b = cardBox(currentCard.id);
  $("#card-domain-label").textContent =
    `${currentCard.d} - ${domainName(currentCard.d)} - box ${b.box}` + verifyTag(currentCard);
  $("#card-front").textContent = currentCard.front;
  $("#card-back").textContent = currentCard.back;
  $("#card-back").classList.add("hidden");
  $("#card-show").classList.remove("hidden");
  $("#card-grade").classList.add("hidden");

  const href = safeHref(currentCard.src);
  const link = $("#card-source");
  if (href) {
    link.href = href;
    link.classList.remove("hidden");
  } else {
    link.classList.add("hidden");
  }
}

function gradeCard(delta) {
  const b = cardBox(currentCard.id);
  const box = Math.max(1, Math.min(5, b.box + delta));
  state.boxes[currentCard.id] = {
    box,
    due: Date.now() + BOX_DAYS[box] * 86400000,
  };
  save();
  nextCard();
}

$("#card-show").addEventListener("click", () => {
  $("#card-back").classList.remove("hidden");
  $("#card-show").classList.add("hidden");
  $("#card-grade").classList.remove("hidden");
});
$("#card-again").addEventListener("click", () => gradeCard(-2));
$("#card-hard").addEventListener("click", () => gradeCard(0));
$("#card-good").addEventListener("click", () => gradeCard(1));
$("#card-domain").addEventListener("change", nextCard);
$("#card-due-only").addEventListener("change", nextCard);
$("#card-reset").addEventListener("click", () => {
  if (!confirm("Reset Leitner boxes for every flashcard?")) return;
  state.boxes = {};
  save();
  nextCard();
});

/* ---------- question rendering ---------- */

function renderQuestion(q, index, opts) {
  const multi = q.answer.length > 1;
  const wrap = document.createElement("div");
  wrap.className = "q";

  const pill = document.createElement("div");
  pill.className = "pill";
  pill.textContent = `Q${index + 1} - ${q.d} ${domainName(q.d)}` + verifyTag(q);
  wrap.appendChild(pill);

  const stem = document.createElement("div");
  stem.className = "stem";
  stem.textContent = q.stem;
  wrap.appendChild(stem);

  if (multi) {
    const hint = document.createElement("div");
    hint.className = "hint";
    hint.textContent = `Select ${q.answer.length}.`;
    wrap.appendChild(hint);
  }

  const order = shuffle(q.options.map((_, i) => i));
  const inputs = [];

  order.forEach((originalIdx) => {
    const label = document.createElement("label");
    label.className = "opt";
    const input = document.createElement("input");
    input.type = multi ? "checkbox" : "radio";
    input.name = `q-${q.id}`;
    input.value = String(originalIdx);
    const span = document.createElement("span");
    span.textContent = q.options[originalIdx];
    label.append(input, span);
    wrap.appendChild(label);
    inputs.push({ input, label, originalIdx });
  });

  const selected = () =>
    inputs.filter((i) => i.input.checked).map((i) => i.originalIdx);

  const reveal = () => {
    const chosen = selected();
    const correct = sameSet(chosen, q.answer);
    inputs.forEach((i) => {
      i.input.disabled = true;
      i.label.classList.add("locked");
      if (q.answer.includes(i.originalIdx)) i.label.classList.add("correct");
      else if (i.input.checked) i.label.classList.add("wrong");
    });

    const ex = document.createElement("div");
    ex.className = "explain";
    const v = document.createElement("div");
    v.className = "verdict " + (correct ? "ok" : "no");
    v.textContent = correct ? "Correct" : "Wrong";
    const body = document.createElement("div");
    body.textContent = q.explain;
    ex.append(v, body);

    const href = safeHref(q.src);
    if (href) {
      const a = document.createElement("a");
      a.className = "source";
      a.href = href;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = "Source doc";
      ex.appendChild(a);
    }
    wrap.appendChild(ex);
    return correct;
  };

  if (opts.instant) {
    const check = document.createElement("button");
    check.className = "primary";
    check.textContent = "Check";
    check.addEventListener("click", () => {
      if (!selected().length) return;
      check.remove();
      const correct = reveal();
      recordAnswer(q, correct);
      opts.onAnswered(correct);
    });
    wrap.appendChild(check);
  }

  return { el: wrap, selected, reveal };
}

/* ---------- quiz ---------- */

function startQuiz() {
  const dom = $("#quiz-domain").value;
  const len = parseInt($("#quiz-length").value, 10);
  let pool = QUESTIONS.filter((q) => dom === "all" || q.d === dom);
  pool = shuffle(pool);
  if (len > 0) pool = pool.slice(0, len);

  const host = $("#quiz-host");
  host.textContent = "";
  let answered = 0;
  let right = 0;

  const tally = () => {
    $("#quiz-progress").textContent =
      `${answered} of ${pool.length} answered, ${right} correct` +
      (answered ? ` (${Math.round((right / answered) * 100)} percent)` : "");
  };
  tally();

  pool.forEach((q, i) => {
    const r = renderQuestion(q, i, {
      instant: true,
      onAnswered: (correct) => {
        answered++;
        if (correct) right++;
        tally();
        updateReviewBadge();
      },
    });
    host.appendChild(r.el);
  });
}

$("#quiz-start").addEventListener("click", startQuiz);

/* ---------- mock exam ---------- */

let examTimer = null;
let examItems = [];

function drawByBlueprint(total) {
  const picked = [];
  DOMAINS.forEach((d) => {
    const share = (d.min + d.max) / 2 / 100;
    const want = Math.max(1, Math.round(total * share));
    const pool = shuffle(QUESTIONS.filter((q) => q.d === d.id));
    picked.push(...pool.slice(0, Math.min(want, pool.length)));
  });
  // Top up or trim so the paper is the requested length.
  if (picked.length < total) {
    const ids = new Set(picked.map((q) => q.id));
    const rest = shuffle(QUESTIONS.filter((q) => !ids.has(q.id)));
    picked.push(...rest.slice(0, total - picked.length));
  }
  return shuffle(picked).slice(0, total);
}

function startExam() {
  const total = parseInt($("#exam-length").value, 10);
  const qs = drawByBlueprint(total);
  examItems = [];

  const host = $("#exam-host");
  host.textContent = "";
  qs.forEach((q, i) => {
    const r = renderQuestion(q, i, { instant: false });
    examItems.push({ q, r });
    host.appendChild(r.el);
  });

  $("#exam-intro").classList.add("hidden");
  $("#exam-result").classList.add("hidden");
  $("#exam-run").classList.remove("hidden");
  $("#exam-counter").textContent = `${total} questions`;

  let left = EXAM_MINUTES * 60;
  const tick = () => {
    const m = String(Math.floor(left / 60)).padStart(2, "0");
    const s = String(left % 60).padStart(2, "0");
    const clock = $("#exam-clock");
    clock.textContent = `${m}:${s}`;
    clock.classList.toggle("low", left <= 300);
    if (left <= 0) {
      submitExam(true);
      return;
    }
    left--;
  };
  tick();
  clearInterval(examTimer);
  examTimer = setInterval(tick, 1000);
}

function submitExam(auto) {
  if (!auto && !confirm("Submit and mark the paper?")) return;
  clearInterval(examTimer);

  const byDomain = {};
  let right = 0;
  examItems.forEach(({ q, r }) => {
    const correct = r.reveal();
    if (correct) right++;
    const d = (byDomain[q.d] = byDomain[q.d] || { right: 0, total: 0 });
    d.total++;
    if (correct) d.right++;
    recordAnswer(q, correct);
  });

  const total = examItems.length;
  const pct = Math.round((right / total) * 100);
  state.exams.push({ at: Date.now(), right, total, pct, byDomain });
  save();

  const res = $("#exam-result");
  res.textContent = "";

  const h = document.createElement("h2");
  h.textContent = auto ? "Time up, paper marked" : "Result";
  res.appendChild(h);

  const sc = document.createElement("div");
  sc.className = "score " + (pct >= TARGET_PCT ? "pass" : "fail");
  sc.textContent = `${pct} percent`;
  res.appendChild(sc);

  const sub = document.createElement("p");
  sub.className = "lede";
  sub.textContent =
    `${right} of ${total} correct. Training threshold is ${TARGET_PCT} percent. ` +
    "GitHub does not publish the real pass mark.";
  res.appendChild(sub);

  DOMAINS.forEach((d) => {
    const s = byDomain[d.id];
    if (!s) return;
    res.appendChild(statRow(`${d.id}. ${d.name}`, s.right, s.total));
  });

  const note = document.createElement("p");
  note.className = "lede";
  note.textContent = "Marked answers are shown below. Read every explanation, including the ones you got right.";
  res.appendChild(note);

  res.classList.remove("hidden");
  res.scrollIntoView({ behavior: "smooth" });
  updateReviewBadge();
}

function statRow(label, right, total) {
  const pct = total ? Math.round((right / total) * 100) : 0;
  const row = document.createElement("div");
  row.className = "statrow";
  const top = document.createElement("div");
  top.className = "top";
  const a = document.createElement("span");
  a.textContent = label;
  const b = document.createElement("span");
  b.className = "muted";
  b.textContent = `${right}/${total}, ${pct} percent`;
  top.append(a, b);
  const bar = document.createElement("div");
  bar.className = "bar";
  const fill = document.createElement("i");
  fill.style.width = pct + "%";
  fill.className = pct >= 80 ? "high" : pct >= 60 ? "mid" : "low";
  bar.appendChild(fill);
  row.append(top, bar);
  return row;
}

$("#exam-start").addEventListener("click", startExam);
$("#exam-submit").addEventListener("click", () => submitExam(false));
$("#exam-abort").addEventListener("click", () => {
  if (!confirm("Abandon this paper? Nothing is recorded.")) return;
  clearInterval(examTimer);
  $("#exam-run").classList.add("hidden");
  $("#exam-intro").classList.remove("hidden");
});

/* ---------- review mistakes ---------- */

function renderReview() {
  const pool = shuffle(missedQuestions());
  const host = $("#review-host");
  host.textContent = "";

  $("#review-empty").classList.toggle("hidden", pool.length > 0);

  const byDomain = {};
  pool.forEach((q) => (byDomain[q.d] = (byDomain[q.d] || 0) + 1));
  const spread = DOMAINS.filter((d) => byDomain[d.id])
    .map((d) => `${d.id} ${byDomain[d.id]}`)
    .join(", ");
  $("#review-summary").textContent = pool.length
    ? `${pool.length} to review (${spread}). Two correct in a row clears one.`
    : "Nothing to review.";

  let cleared = 0;
  pool.forEach((q, i) => {
    const before = state.missed[q.id];
    const r = renderQuestion(q, i, {
      instant: true,
      onAnswered: () => {
        if (!state.missed[q.id]) cleared++;
        const left = missedQuestions().length;
        $("#review-summary").textContent =
          `${left} still to review. Cleared ${cleared} this session.`;
        updateReviewBadge();
      },
    });
    const tag = document.createElement("div");
    tag.className = "muted";
    tag.textContent = `Missed ${before.wrong} time(s). Correct streak ${before.streak} of ${MASTERY_STREAK}.`;
    r.el.insertBefore(tag, r.el.children[1]);
    host.appendChild(r.el);
  });
}

$("#review-refresh").addEventListener("click", renderReview);
$("#review-clear").addEventListener("click", () => {
  if (!confirm("Forget every recorded mistake? Domain accuracy history is kept.")) return;
  state.missed = {};
  save();
  updateReviewBadge();
  renderReview();
});

/* ---------- stats ---------- */

function renderStats() {
  const host = $("#stats-host");
  host.textContent = "";
  let any = false;
  DOMAINS.forEach((d) => {
    const a = state.answers[d.id];
    if (!a || a.right + a.wrong === 0) return;
    any = true;
    host.appendChild(statRow(`${d.id}. ${d.name}`, a.right, a.right + a.wrong));
  });
  if (!any) {
    const p = document.createElement("p");
    p.className = "lede";
    p.textContent = "No answers recorded yet. Run a quiz.";
    host.appendChild(p);
  }

  const ex = $("#stats-exams");
  ex.textContent = "";
  if (!state.exams.length) {
    const p = document.createElement("p");
    p.className = "lede";
    p.textContent = "No mock exams sat yet.";
    ex.appendChild(p);
    return;
  }
  state.exams
    .slice()
    .reverse()
    .forEach((e) => {
      const d = new Date(e.at);
      ex.appendChild(
        statRow(d.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" }), e.right, e.total)
      );
    });
}

$("#stats-export").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `gh300-progress-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
});

$("#stats-clear").addEventListener("click", () => {
  if (!confirm("Delete all flashcard boxes, answer history, mistakes and exam results?")) return;
  state = blankState();
  save();
  updateReviewBadge();
  renderStats();
});

/* ---------- boot ---------- */

fillDomainSelect($("#card-domain"), "All domains");
fillDomainSelect($("#quiz-domain"), "All domains");
renderHome();
startQuiz();
updateReviewBadge();

// Flashcard keyboard shortcuts: space reveals, 1/2/3 grade. Built for short sessions.
document.addEventListener("keydown", (e) => {
  if ($("#view-cards").classList.contains("hidden")) return;
  if (/^(INPUT|SELECT|TEXTAREA)$/.test(e.target.tagName)) return;
  const revealed = !$("#card-back").classList.contains("hidden");
  if ((e.key === " " || e.key === "Enter") && !revealed) {
    e.preventDefault();
    $("#card-show").click();
  } else if (revealed && e.key === "1") {
    $("#card-again").click();
  } else if (revealed && e.key === "2") {
    $("#card-hard").click();
  } else if (revealed && (e.key === "3" || e.key === " ")) {
    e.preventDefault();
    $("#card-good").click();
  }
});
