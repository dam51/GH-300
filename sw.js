// Network first, cache as fallback: online you always get the latest upload, offline the last copy seen.
const CACHE = "gh300";
const FILES = [
  "./", "index.html", "styles.css", "app.js", "manifest.webmanifest", "icon.svg",
  "data/domains.js", "data/flashcards.js", "data/questions.js", "data/questions-warner.js", "data/questions-gap.js",
];

self.addEventListener("install", (e) => {
  // cache: "reload" skips the HTTP cache so a new install never stores stale copies.
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES.map((f) => new Request(f, { cache: "reload" })))));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return;
  e.respondWith(
    fetch(e.request, { cache: "no-cache" })
      .then((res) => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(e.request, copy));
        }
        return res;
      })
      .catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
