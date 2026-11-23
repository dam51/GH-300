// Flashcards for GH-300.
//
// v: "2026-09-24" means the fact was read directly from the linked GitHub Docs page on
// that date. v: null means it is drawn from general Copilot documentation knowledge and
// has NOT been re-checked against the live doc. Unverified cards are labelled in the app.
// Verify them before trusting them, and set v when you do.

window.GH300_CARDS = [

  /* ---------- D1, use GitHub Copilot responsibly ---------- */
  { id: "c101", d: "D1", v: null,
    front: "What does the duplication detection filter actually do?",
    back: "Setting name: \"Suggestions matching public code\". When set to Blocked, Copilot checks a suggestion against public code on GitHub and suppresses it if there is a match of roughly 150 characters or more.\n\nIt filters SUGGESTIONS. It does not scan code already in your repository, and it is not a licence compliance tool.",
    src: "https://docs.github.com/en/copilot/how-tos/manage-your-account/manage-policies" },

  { id: "c102", d: "D1", v: null,
    front: "Who gets GitHub's IP indemnity for Copilot, and what is the condition?",
    back: "Offered to Copilot Business and Copilot Enterprise customers, not to individual Free or Pro users.\n\nThe condition is that the duplication detection filter is enabled. Turn it off and you fall outside the defence.\n\nNOTE: the indemnity lives in the GitHub Terms for Additional Products and Features, not in the Copilot product docs. The product docs say the opposite for Free, Pro and Team: 'Users assume all risks associated with generated code including... IP infringement.' Read the terms before repeating this.",
    src: "https://docs.github.com/en/site-policy/github-terms/github-terms-for-additional-products-and-features" },

  { id: "c103", d: "D1", v: "2026-09-24",
    front: "Name the limitations of Copilot inline suggestions, as GitHub documents them.",
    back: "LIMITED SCOPE: may not handle complex code structures or obscure languages, and cannot see larger design or architectural issues.\nPOTENTIAL BIASES: training data biases, plus bias toward certain languages or coding styles.\nSECURITY RISKS: may expose sensitive information or vulnerabilities.\nMATCHES WITH PUBLIC CODE: low probability, but possible.\nINACCURATE CODE: may look valid while not being semantically or syntactically correct.\n\nLearn this list as GitHub words it, not as generic LLM caveats. A training cut-off is NOT on it.",
    src: "https://docs.github.com/en/copilot/responsible-use/inline-suggestions" },

  { id: "c104", d: "D1", v: "2026-09-24",
    front: "Copilot suggests code that passes review and ships a vulnerability. Who is accountable?",
    back: "The developer who accepted it and the reviewer who approved it.\n\nGitHub states it outright: 'Users assume all risks associated with generated code including security vulnerabilities, bugs, and IP infringement.'\n\nBacked by the human-in-the-loop design: suggestions are visually distinct and no code changes occur without deliberate user action.",
    src: "https://docs.github.com/en/copilot/responsible-use/inline-suggestions" },

  { id: "c105", d: "D1", v: "2026-09-24",
    front: "How does GitHub describe the filter that catches insecure suggestions?",
    back: "As CONTENT FILTERING: 'a safety system that scans prompts and responses to detect and block harmful, offensive, or insecure content before it is shown to the user.'\n\nCode vulnerability is also one of the risk categories Copilot is red-teamed against. It is narrow: GitHub still tells you to follow secure coding practices, avoid hardcoded passwords and SQL injection, and review.",
    src: "https://docs.github.com/en/copilot/responsible-use/inline-suggestions" },

  { id: "c106", d: "D1", v: "2026-09-24",
    front: "Can Copilot tell you the licence of code it suggests?",
    back: "Only for MATCHES against public code, and only when configured to annotate. The duplication detection system either BLOCKS matching suggestions or ANNOTATES them with a reference to the source repository and its licence information. The second mode is code referencing.\n\nFor a suggestion that matches nothing public there is no provenance to report. It is a match detector, not a licence scanner.",
    src: "https://docs.github.com/en/copilot/responsible-use/inline-suggestions" },

  { id: "c107", d: "D1", v: "2026-09-24",
    front: "What two forms of bias does GitHub document for inline suggestions?",
    back: "1. Biases and errors present in the training data sources, which the tool can perpetuate.\n2. Bias toward certain PROGRAMMING LANGUAGES OR CODING STYLES, leading to suboptimal or incomplete suggestions.\n\nThe second is the one people forget. Under-represented languages get worse suggestions, and GitHub frames that as a fairness issue, not just a quality one.",
    src: "https://docs.github.com/en/copilot/responsible-use/inline-suggestions" },

  { id: "c108", d: "D1", v: null,
    front: "What should an organisation put in place before a broad Copilot rollout?",
    back: "An acceptable use position, a policy configuration at org or enterprise level, content exclusions for sensitive paths, the public-code filter setting decided deliberately, and a review expectation that AI-assisted code is reviewed like any other.\n\nPlus a way to measure it, otherwise you cannot tell whether it worked.",
    src: "https://docs.github.com/en/copilot/tutorials/roll-out-at-scale" },

  { id: "c109", d: "D1", v: null,
    front: "Is it safe to paste a secret into Copilot Chat if you delete the message afterwards?",
    back: "No. The prompt has already been transmitted for processing by the time you delete it. Deleting the message from the UI does not un-send it.\n\nThe control that helps is content exclusion, applied before the fact, plus not putting secrets in the working tree at all.",
    src: "https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/content-exclusion" },

  { id: "c110", d: "D1", v: "2026-09-24",
    front: "Two developers ask Copilot the same question and get different answers. Is that a bug?",
    back: "No. GitHub states inline suggestions generate new code 'in a probabilistic way', and the context differs between the two machines: surrounding code, open tabs, chat history, instructions and model can all differ.\n\nConsistency comes from constraining context, not from expecting a stable answer.",
    src: "https://docs.github.com/en/copilot/responsible-use/inline-suggestions" },

  /* ---------- D2, use GitHub Copilot features ---------- */
  { id: "c201", d: "D2", v: "2026-09-24",
    front: "Which Copilot plans include organisation-wide policy management?",
    back: "Copilot Business and Copilot Enterprise only.\n\nNo individual plan (Free, Student, Pro, Pro+, Max) has org-wide policy management, org custom instructions, content exclusion or audit logs. Those four are the Business and Enterprise line.",
    src: "https://docs.github.com/en/copilot/get-started/plans" },

  { id: "c202", d: "D2", v: "2026-09-24",
    front: "What are the per-seat list prices for Copilot Business and Copilot Enterprise?",
    back: "Copilot Business: 19 USD per granted seat per month.\nCopilot Enterprise: 39 USD per granted seat per month.\n\nIndividual plans: Pro 10 USD, Pro+ 39 USD, Max 100 USD per month. Free and Student are free.",
    src: "https://docs.github.com/en/copilot/get-started/plans" },

  { id: "c203", d: "D2", v: "2026-09-24",
    front: "Is Copilot available on GitHub Enterprise Server?",
    back: "No. Copilot is not currently available for GitHub Enterprise Server.\n\nCopilot Enterprise is designed for GitHub Enterprise Cloud.",
    src: "https://docs.github.com/en/copilot/get-started/plans" },

  { id: "c204", d: "D2", v: "2026-09-24",
    front: "In a GitHub Enterprise Cloud enterprise, who chooses the Copilot plan for each organisation?",
    back: "The enterprise owner chooses the plan for each organisation in the enterprise.\n\nThat is the lever to know about when an enterprise wants Business for most orgs and Enterprise for a few.",
    src: "https://docs.github.com/en/copilot/get-started/plans" },

  { id: "c205", d: "D2", v: "2026-09-24",
    front: "Which limits apply to Copilot Free?",
    back: "A capped allowance, notably 2,000 completions per month, auto model selection only (no model picker), no Copilot Chat skills in IDEs, Copilot code review limited to \"Review selection\" in VS Code, no Copilot cloud agent, no third-party agents, and no pull request summaries.\n\nIt does include agent mode and MCP.",
    src: "https://docs.github.com/en/copilot/get-started/plans" },

  { id: "c206", d: "D2", v: "2026-09-24",
    front: "Are code completions billed against the AI credit allowance?",
    back: "No. Code completions and next edit suggestions are not billed in AI credits and remain unlimited on all paid plans.\n\nAI credits meter the higher-cost surfaces. Usage beyond the pooled allowance is charged per credit.",
    src: "https://docs.github.com/en/copilot/get-started/plans" },

  { id: "c207", d: "D2", v: "2026-09-24",
    front: "Name the THREE types of repository custom instructions.",
    back: "1. REPOSITORY-WIDE: .github/copilot-instructions.md, applies to all requests in the repository.\n2. PATH-SPECIFIC: one or more NAME.instructions.md files in or below .github/instructions, applying to files matching a specified path.\n3. AGENT INSTRUCTIONS: AGENTS.md, CLAUDE.md or GEMINI.md. Similar to repository-wide, but not yet supported by all Copilot features.\n\nMost candidates only know the first two.",
    src: "https://docs.github.com/en/copilot/concepts/prompting/response-customization" },

  { id: "c208", d: "D2", v: "2026-09-24",
    front: "What is a prompt file, how does it differ from instructions, and where does it work?",
    back: "A .prompt.md Markdown file in your workspace holding a reusable prompt you invoke for a SPECIFIC chat interaction.\n\nGitHub's framing: custom instructions add codebase-wide context to every AI workflow; prompt files add instructions to one interaction.\n\nLIMIT: prompt files are public preview and available ONLY in VS Code, Visual Studio and JetBrains IDEs.",
    src: "https://docs.github.com/en/copilot/concepts/prompting/response-customization" },

  { id: "c209", d: "D2", v: "2026-09-24",
    front: "Which slash commands does GitHub document for Copilot Chat in VS Code, and what is the catch?",
    back: "/clear (start a new chat session), /explain, /fix, /fixTestFailure, /help, /new, /tests.\n\nTHE CATCH: available slash commands VARY BY ENVIRONMENT. /doc is documented for Visual Studio and Xcode but NOT VS Code. /optimize is Visual Studio only. /simplify is Xcode only. /rename and /delete appear on the GitHub website. Type / in your own client to see the real list.",
    src: "https://docs.github.com/en/copilot/reference/chat-cheat-sheet" },

  { id: "c210", d: "D2", v: null,
    front: "What is the difference between inline chat, the chat panel and agent mode?",
    back: "Inline chat: scoped to the current file or selection, edits in place, fastest loop.\nChat panel: conversational, broader context, good for questions and multi-file reasoning.\nAgent mode: Copilot plans, edits multiple files, runs tools and terminal commands, and iterates until the task is done, with you approving actions.",
    src: "https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide" },

  { id: "c211", d: "D2", v: "2026-09-24",
    front: "What is the Copilot CLOUD AGENT, and how does it differ from agent mode?",
    back: "GitHub's words: cloud agent 'works autonomously in a GitHub Actions-powered environment to complete development tasks assigned through GitHub issues or Copilot Chat prompts'. It can research a repository, create a plan, make changes on a branch, and optionally open a pull request.\n\nAgent mode 'makes autonomous edits directly in your local development environment'.\n\nNote the name: it is the CLOUD agent. Older material calls it the coding agent.",
    src: "https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent" },

  { id: "c212", d: "D2", v: "2026-09-24",
    front: "Which plans include MCP and agent mode?",
    back: "All of them, including Copilot Free. MCP and agent mode are not gated behind Business or Enterprise.\n\nThird-party agents and the Copilot cloud agent ARE gated, and are not available on Copilot Free.",
    src: "https://docs.github.com/en/copilot/get-started/plans" },

  { id: "c213", d: "D2", v: "2026-09-24",
    front: "What is MCP, and what is the policy trap?",
    back: "An OPEN STANDARD defining how applications share context with large language models, connecting AI models to data sources and tools. It works across all major Copilot surfaces: IDEs, Copilot CLI, the Copilot app, and agents on GitHub.com.\n\nTHE TRAP: the 'MCP servers in Copilot' policy is DISABLED BY DEFAULT. It governs ONLY Business and Enterprise subscribers. Free, Pro, Pro+ and Max are not governed by it.",
    src: "https://docs.github.com/en/copilot/concepts/context/mcp" },

  { id: "c214", d: "D2", v: null,
    front: "Which IDEs and surfaces does Copilot support?",
    back: "Visual Studio Code, Visual Studio, the JetBrains family, Neovim, Xcode and Eclipse, plus GitHub.com, GitHub Mobile, Windows Terminal and the Copilot CLI.\n\nFeature support is NOT uniform across them. Check the Copilot feature matrix rather than assuming VS Code parity.",
    src: "https://docs.github.com/en/copilot/reference/copilot-feature-matrix" },

  /* ---------- D3, data and architecture ---------- */
  { id: "c301", d: "D3", v: null,
    front: "Walk through the lifecycle of a Copilot code completion request.",
    back: "1. The IDE extension assembles context: the current file, cursor position, related open files, language.\n2. It sends that to the Copilot proxy service over TLS.\n3. The proxy applies filters and forwards to the model.\n4. The model returns candidate completions.\n5. Post-processing filters run, including the public-code match filter if enabled.\n6. The suggestion is returned to the IDE and shown as ghost text.",
    src: "https://docs.github.com/en/copilot/concepts/completions/code-suggestions" },

  { id: "c302", d: "D3", v: "2026-09-24",
    front: "Describe the documented inline suggestion pipeline.",
    back: "1. INPUT PROCESSING: surrounding code from the cursor is pre-processed, combined with contextual information such as code snippets from open tabs, and sent to the model as a prompt.\n2. LANGUAGE MODEL ANALYSIS.\n3. RESPONSE GENERATION.\n4. OUTPUT FORMATTING: shown inline, visually distinct, applied only if you explicitly accept.\n\nSafety layers run across this: content and code safety filters, public code matching, and human-in-the-loop acceptance.",
    src: "https://docs.github.com/en/copilot/responsible-use/inline-suggestions" },

  { id: "c303", d: "D3", v: null,
    front: "For Copilot Business and Enterprise, what happens to prompts and suggestions?",
    back: "They are not retained and are not used to train the models. They are used transiently to serve the request.\n\nCAVEAT ON SOURCING: GitHub Docs does NOT state retention terms inline. The inline suggestions page explicitly defers to the Copilot Trust Center for data retention. Read the Trust Center before quoting a retention period to anyone.",
    src: "https://copilot.github.trust.page/faq" },

  { id: "c304", d: "D3", v: null,
    front: "What can an individual Copilot Free or Pro user control about data collection?",
    back: "A setting for whether code snippets are collected and retained to improve the product. Individual users can switch it off in their GitHub Copilot settings.\n\nBusiness and Enterprise seats do not have this exposure in the first place, so the setting is an individual-plan concern.",
    src: "https://docs.github.com/en/copilot/how-tos/manage-your-account/manage-policies" },

  { id: "c305", d: "D3", v: "2026-09-24",
    front: "What is the difference between a prompt, context and a response?",
    back: "Prompt: the request YOU make. A question in chat, or the code you are asking Copilot to complete.\nContext: what Copilot uses IN ADDITION to your prompt, such as the code in the current file, the open files and the chat history.\nResponse or suggestion: what comes back.\n\nGitHub's wording: 'In addition to your prompt, Copilot uses additional context, like the code in your current file and the chat history, to generate a response.' Prompt and context are SEPARATE inputs, not one assembled payload.",
    src: "https://docs.github.com/en/copilot/concepts/prompting/prompt-engineering" },

  { id: "c306", d: "D3", v: "2026-09-24",
    front: "Why does Copilot sometimes ignore a file that is clearly in your repository?",
    back: "Because it is not in the context window. Copilot sends a bounded slice: current file, some open or recently touched files, and anything explicitly attached.\n\nThe repository is not uploaded. If a file matters, attach it or reference it explicitly.",
    src: "https://docs.github.com/en/copilot/concepts/prompting/prompt-engineering" },

  { id: "c307", d: "D3", v: null,
    front: "What telemetry does Copilot send beyond the prompt?",
    back: "Usage and engagement data: whether a suggestion was shown, accepted or dismissed, latency, editor and language, error events.\n\nThis is what feeds the Copilot metrics API and the usage dashboards, and it is separate from prompt content.\n\nNOT YET VERIFIED against the Trust Center. Confirm the exact telemetry list before quoting it.",
    src: "https://copilot.github.trust.page/faq" },

  { id: "c308", d: "D3", v: null,
    front: "Why does model choice matter architecturally, not just in quality?",
    back: "Different models have different context window sizes, different latency and cost, and different data-handling terms with the model provider.\n\nA model available on one plan may not be on another, and some models carry provider-specific retention conditions that an enterprise has to accept explicitly.",
    src: "https://docs.github.com/en/copilot/reference/ai-models/supported-models" },

  { id: "c309", d: "D3", v: "2026-09-24",
    front: "Does Copilot index your repository?",
    back: "For SEMANTIC CODE SEARCH, yes. A repository is indexed automatically when you start a Chat conversation with repository context. The index is used by Copilot Chat in GitHub and VS Code, and by the cloud agent.\n\nInitial indexing takes up to 60 seconds for a large repository; re-indexing is much quicker and updates within seconds of a new conversation. No limit on how many repositories you can index.\n\nGitHub states plainly: 'Copilot will not use your indexed repository for model training.'",
    src: "https://docs.github.com/en/copilot/concepts/context/repository-indexing" },

  { id: "c310", d: "D3", v: null,
    front: "Which Copilot data-related capabilities require Business or Enterprise?",
    back: "Content exclusion, audit logs for Copilot events, organisation-wide policy management and organisation custom instructions.\n\nIf a question describes an admin needing visibility or control over user data handling, the answer is almost always Business or Enterprise.",
    src: "https://docs.github.com/en/copilot/get-started/plans" },

  /* ---------- D4, prompt engineering and context crafting ---------- */
  { id: "c401", d: "D4", v: null,
    front: "What are the four ingredients of a good Copilot prompt?",
    back: "1. Goal, what outcome you want.\n2. Context, the code, files and constraints it needs.\n3. Expectations, language, style, libraries, error handling, tests.\n4. Format, what shape the answer should take.\n\nMost weak prompts fail on context and expectations, not on the goal.",
    src: "https://docs.github.com/en/copilot/concepts/prompting/prompt-engineering" },

  { id: "c402", d: "D4", v: "2026-09-24",
    front: "What is prompt iteration and why does it beat one long prompt?",
    back: "Start simple, look at what comes back, then refine. Each turn carries the conversation as context, so you are steering rather than re-specifying.\n\nOne huge prompt burns context on things the model did not need, and gives you nothing to correct when it goes wrong.",
    src: "https://docs.github.com/en/copilot/concepts/prompting/prompt-engineering" },

  { id: "c403", d: "D4", v: "2026-09-24",
    front: "Which chat variables does GitHub document for Copilot Chat in VS Code?",
    back: "#block, #class, #comment, #file, #function, #line, #path, #project, #selection, #sym.\n\nNote that #project, not #codebase, is GitHub's documented variable for project-wide context. Editor tooling exposes further variables, but these are the ones the cheat sheet lists. Answer exam questions from this set.",
    src: "https://docs.github.com/en/copilot/reference/chat-cheat-sheet" },

  { id: "c404", d: "D4", v: "2026-09-24",
    front: "Which chat participants does GitHub document for VS Code?",
    back: "@azure (Azure services, public preview), @github (GitHub-specific Copilot skills), @terminal (VS Code terminal shell and contents), @vscode (VS Code commands and features).\n\n@workspace is referenced elsewhere in the docs for workspace code questions, and JetBrains uses @project for the equivalent. Participants scope where Copilot looks before answering.",
    src: "https://docs.github.com/en/copilot/reference/chat-cheat-sheet" },

  { id: "c405", d: "D4", v: "2026-09-24",
    front: "Give three concrete techniques for improving a weak suggestion.",
    back: "1. Open the relevant files, or attach them explicitly, so the pattern is in context.\n2. Write the function signature, the docstring or a comment describing intent before asking.\n3. Give an example of the shape you want, such as one existing test, so it has something to imitate.\n\nAll three are context work, not wording work.",
    src: "https://docs.github.com/en/copilot/concepts/prompting/prompt-engineering" },

  { id: "c406", d: "D4", v: "2026-09-24",
    front: "When should the instruction live in a custom instructions file rather than in the prompt?",
    back: "When it is true every time: language version, framework, test runner, style rules, forbidden patterns, team conventions.\n\nPut standing rules in instructions so every request inherits them. Keep the prompt for what is specific to this task.",
    src: "https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions" },

  { id: "c407", d: "D4", v: "2026-09-24",
    front: "Why can too much context make output worse?",
    back: "The context window is finite. Irrelevant files crowd out relevant ones, and the model can anchor on the wrong pattern.\n\nMore context is not better context. Curate it.",
    src: "https://docs.github.com/en/copilot/concepts/prompting/prompt-engineering" },

  { id: "c408", d: "D4", v: "2026-09-24",
    front: "What is zero-shot versus few-shot prompting, in Copilot terms?",
    back: "Zero-shot: you describe the task and expect the model to work it out with no example.\n\nFew-shot: you include one or more worked examples of input and expected output so the model can pattern-match. In practice that means showing it an existing function or test that already follows the convention you want.",
    src: "https://docs.github.com/en/copilot/concepts/prompting/prompt-engineering" },

  /* ---------- D5, developer productivity ---------- */
  { id: "c501", d: "D5", v: null,
    front: "Which tasks does Copilot reliably accelerate, and which does it not?",
    back: "Accelerates: boilerplate, test scaffolding, repetitive refactors, format and syntax translation, documentation drafts, understanding unfamiliar code.\n\nDoes not: novel architecture, decisions that need business context, anything where being wrong is expensive and hard to detect.",
    src: "https://docs.github.com/en/copilot/tutorials" },

  { id: "c502", d: "D5", v: "2026-09-24",
    front: "What do Copilot usage metrics expose, and at what granularity?",
    back: "Categories: adoption, engagement, acceptance rate, lines of code, and pull request lifecycle.\n\nGRANULARITY TRAP: the usage metrics APIs provide data at ENTERPRISE, ORGANIZATION, REPOSITORY AND USER levels. There is a user-level 28-day report endpoint. It is NOT aggregate-only.\n\nWhat it never contains: prompt or suggestion content.",
    src: "https://docs.github.com/en/copilot/concepts/billing-and-usage/copilot-usage-metrics/copilot-metrics" },

  { id: "c503", d: "D5", v: "2026-09-24",
    front: "Why is acceptance rate a poor sole measure of Copilot value?",
    back: "It counts suggestions taken, not outcomes. A developer can accept a lot of low-value boilerplate, or reject many suggestions while getting real value from chat and explanation.\n\nGitHub's trial guidance measures adoption, engagement and usage patterns, then connects them to outcomes. Pair it with cycle time, review time, defect rate and developer feedback.",
    src: "https://docs.github.com/en/copilot/tutorials/roll-out-at-scale/measure-success" },

  { id: "c504", d: "D5", v: null,
    front: "How does Copilot help a developer onboarding to an unfamiliar codebase?",
    back: "Explaining unfamiliar functions and files, summarising what a module does, answering repository questions in chat, drafting the first test to probe behaviour, and generating documentation that did not exist.\n\nThe win is comprehension speed, not code volume.",
    src: "https://docs.github.com/en/copilot/tutorials" },

  { id: "c505", d: "D5", v: null,
    front: "What does Copilot code review do?",
    back: "Reviews a pull request or a selection and leaves suggested changes and comments, as an additional automated reviewer.\n\nIt does not replace human review or approval. On Copilot Free it is limited to \"Review selection\" in VS Code.",
    src: "https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review" },

  { id: "c506", d: "D5", v: null,
    front: "What is a sensible staged rollout for Copilot in a large organisation?",
    back: "1. Pilot with a defined cohort and a baseline measurement.\n2. Set policies, content exclusions and the public-code filter before broadening.\n3. Train, on prompting and on review expectations, not just on install.\n4. Expand in waves, watching the metrics API and feedback.\n5. Review licence allocation for inactive seats.",
    src: "https://docs.github.com/en/copilot/tutorials/roll-out-at-scale" },

  { id: "c507", d: "D5", v: "2026-09-24",
    front: "An admin wants to reclaim unused Copilot seats. Which API, and why not the metrics one?",
    back: "The Copilot USER MANAGEMENT API. It is the documented SOURCE OF TRUTH for licence and seat information, listing assigned seats with licence state, user association and last_activity_at.\n\nLicence and seat data is explicitly NOT included in Copilot usage metrics reports. Reaching for the metrics API here is the trap.\n\nUnassignment takes effect at the end of the billing cycle.",
    src: "https://docs.github.com/en/copilot/concepts/billing-and-usage/copilot-usage-metrics/copilot-metrics" },

  /* ---------- D6, privacy, content exclusions and safeguards ---------- */
  { id: "c601", d: "D6", v: "2026-09-24",
    front: "At which three levels can content exclusion be configured, and how do they differ in reach?",
    back: "Repository: paths within that repository only.\nOrganisation: repository references plus paths, applying to users who hold a Copilot seat from that organisation.\nEnterprise: same syntax as organisation, but applies to ALL Copilot users in the enterprise.\n\nThat last difference is the one exam questions hinge on.",
    src: "https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot" },

  { id: "c602", d: "D6", v: "2026-09-24",
    front: "Which Copilot plans support content exclusion?",
    back: "Copilot Business and Copilot Enterprise only.\n\nNo individual plan has it: not Free, Student, Pro, Pro+ or Max. If a question puts a Pro user in charge of excluding files, the premise is wrong.",
    src: "https://docs.github.com/en/copilot/get-started/plans" },

  { id: "c603", d: "D6", v: "2026-09-24",
    front: "Does content exclusion apply to agent mode in Copilot Chat in IDEs?",
    back: "No. Agent mode in Copilot Chat in IDEs does not support content exclusion.\n\nThis is the trap. Exclusion is not a universal blanket. Do not present it to a security reviewer as one.",
    src: "https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot" },

  { id: "c604", d: "D6", v: "2026-09-24",
    front: "What pattern syntax do content exclusion paths use?",
    back: "fnmatch notation, and patterns are case insensitive.\n\nExamples: \"secrets.json\" any depth; \"secret*\" prefix; \"*.cfg\" suffix; \"/scripts/**\" that directory and below; \"{server,session}*\" alternation; \"*.m[dk]\" character class; \"**/security/**\" any security directory at any depth.",
    src: "https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot" },

  { id: "c605", d: "D6", v: "2026-09-24",
    front: "How long do content exclusion changes take to reach an IDE, and how do you force it?",
    back: "Up to 30 minutes where the settings are already loaded.\n\nVS Code: Command Palette, Developer: Reload Window.\nJetBrains IDEs and Visual Studio: close and reopen the application.\nVim and Neovim: fetched from GitHub each time you open a file, so no action needed.",
    src: "https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot" },

  { id: "c606", d: "D6", v: "2026-09-24",
    front: "How do you actually test that a content exclusion works?",
    back: "1. In a file that is NOT excluded, make an edit that would normally produce an inline suggestion. Confirm one appears. That is your negative control.\n2. Do the same edit in a file that should be excluded. No suggestion should appear.\n3. For chat, open only the excluded file, attach it as context, and ask \"explain this file\". It should not be usable and should not appear as a reference.",
    src: "https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot" },

  { id: "c607", d: "D6", v: "2026-09-24",
    front: "What does the \"*\" key mean in an organisation content exclusion?",
    back: "It matches files from all file system roots, Git and non-Git alike.\n\nFor example \"*\": [\"**/.env\"] excludes REPOSITORY-PATH/.env and also a bare /.env outside any repository. This is how you cover files that are not under version control at all.",
    src: "https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot" },

  { id: "c608", d: "D6", v: "2026-09-24",
    front: "Can content exclusion cover repositories that are not on GitHub?",
    back: "Yes. Organisation and enterprise exclusions reference repositories by URL, so GitLab, Azure DevOps and any other host can be targeted.\n\nProtocol does not matter: https, git, ssh and scp-style forms all match the same repository. The user@ and :port parts are ignored when matching.",
    src: "https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot" },

  { id: "c609", d: "D6", v: "2026-09-24",
    front: "A repository admin opens content exclusion settings and sees greyed-out boxes. What are they?",
    back: "Exclusions inherited from the parent organisation, or from organisations in the same enterprise. They are shown for visibility and cannot be edited at repository level.\n\nInheritance flows down. A repository admin can add, not remove.",
    src: "https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot" },

  { id: "c610", d: "D6", v: "2026-09-24",
    front: "Can content exclusions be managed programmatically?",
    back: "Yes. Organisation owners and enterprise owners can manage content exclusions through the GitHub REST API, using the Copilot content exclusion management endpoints.\n\nThat is the answer when a question asks how to keep exclusions in version control or apply them at scale.",
    src: "https://docs.github.com/en/rest/copilot/copilot-content-exclusion-management" },

  { id: "c611", d: "D6", v: "2026-09-24",
    front: "What is the format for repository-level exclusion paths?",
    back: "One path per line, each as - \"/PATH/TO/DIRECTORY/OR/FILE\". Lines starting with # are comments.\n\nRepository level takes paths only. Repository references belong at organisation and enterprise level, because a repository already knows which repository it is.",
    src: "https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot" },

  { id: "c612", d: "D6", v: null,
    front: "Content exclusion is not a security boundary. Why not?",
    back: "It stops Copilot using that content as context. It does not encrypt the file, does not stop a developer opening it, pasting it into chat as plain text, or copying it elsewhere. Agent mode in IDEs does not honour it at all.\n\nTreat it as a guardrail that reduces accidental exposure, not as a control you would claim in a threat model.",
    src: "https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/content-exclusion" },

  /* ================= expansion set ================= */

  /* ---------- D1 ---------- */
  { id: "c111", d: "D1", v: null,
    front: "What is the supply chain risk in a hallucinated package name?",
    back: "The model invents a plausible dependency that does not exist. An attacker registers that name. The next developer who installs without checking pulls attacker-controlled code.\n\nCheck every suggested dependency: does it exist, is it the one you meant, and how recently was it published.",
    src: "https://docs.github.com/en/copilot/responsible-use/inline-suggestions" },

  { id: "c112", d: "D1", v: null,
    front: "What is prompt injection, and what does NOT defend against it?",
    back: "Instruction-shaped text smuggled into context through untrusted content: issue bodies, pull request comments, fetched web pages, MCP tool responses.\n\nNeither content exclusion nor the duplication detection filter helps. The defence is treating all retrieved content as DATA, never as instructions, and surfacing anything that looks like a directive to a human.",
    src: "https://docs.github.com/en/copilot/responsible-use/agents" },

  { id: "c113", d: "D1", v: "2026-09-24",
    front: "What does Copilot's content filtering scan, and when?",
    back: "It scans PROMPTS AND RESPONSES, and blocks harmful, offensive or insecure content BEFORE it is shown to the user.\n\nBoth halves matter. Candidates often assume filtering only inspects the model's output; GitHub's definition covers the input side too.",
    src: "https://docs.github.com/en/copilot/responsible-use/inline-suggestions" },

  { id: "c114", d: "D1", v: "2026-09-24",
    front: "How do you mitigate over-reliance on Copilot without banning it?",
    back: "Require that a developer can explain any code they submit. Keep design and review human-led. Pair on work where understanding matters more than throughput.\n\nGitHub names overreliance explicitly: it happens because mistakes in AI output may be hard to detect, and can lead to decreased productivity, loss of trust and financial or physical harm.",
    src: "https://docs.github.com/en/copilot/responsible-use/inline-suggestions" },

  { id: "c115", d: "D1", v: null,
    front: "Non-retention on Copilot Business means personal data in prompts is fine. True or false?",
    back: "False. Non-retention governs what happens AFTER transmission. It is not authorisation to transmit personal data, and it does not alter data protection obligations.\n\nUse synthetic or redacted data. The plan tier is not the control here.",
    src: "https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/session-data" },

  { id: "c116", d: "D1", v: "2026-09-24",
    front: "Public code matching is set to annotate rather than block, and a suggestion matches a copyleft project. What now?",
    back: "Annotate means you get code referencing: the source repository and its licence information alongside the suggestion. Use it. Reject or rewrite, and escalate whether the policy should be Blocked.\n\nThe annotation tells you an obligation exists. It does not discharge it, and adding an attribution comment does not satisfy copyleft.",
    src: "https://docs.github.com/en/copilot/responsible-use/inline-suggestions" },

  { id: "c117", d: "D1", v: "2026-09-24",
    front: "What is code referencing?",
    back: "When the policy permits suggestions matching public code, code referencing can surface details of the matching public code and its licence, so the developer decides knowingly.\n\nIt is visibility, not automatic attribution, and it only exists where matches are allowed through in the first place.",
    src: "https://docs.github.com/en/copilot/responsible-use/inline-suggestions" },

  { id: "c118", d: "D1", v: "2026-09-24",
    front: "How should review of AI-assisted code differ?",
    back: "The standard does not move. The failure MODE changes: AI code tends to look idiomatic while being subtly wrong, and can reference APIs or packages that do not exist.\n\nGitHub's own guidance is to review, test and validate all generated suggestions, and to keep following secure coding and code review practices.",
    src: "https://docs.github.com/en/copilot/responsible-use/inline-suggestions" },

  { id: "c119", d: "D1", v: null,
    front: "Who controls the public-code policy on Copilot Business, and why is that the right place?",
    back: "Organisation or enterprise administrators, through Copilot policies. On individual plans it sits in personal settings.\n\nIt is central on Business and Enterprise because the IP indemnity depends on it. That is not a per-developer decision to make.",
    src: "https://docs.github.com/en/copilot/how-tos/manage-your-account/manage-policies" },

  { id: "c120", d: "D1", v: "2026-09-24",
    front: "Copilot on a safety-critical or audited component: what is the responsible position?",
    back: "Copilot does not change what the assurance regime requires. GitHub tells you to exercise caution for CONSEQUENTIAL DECISIONS and SENSITIVE DOMAINS, and to evaluate legal and regulatory obligations yourself.\n\nConsequential means legal or significant impact on access to education, employment, finance, government benefits, healthcare, housing, insurance or legal services, or risk of physical, psychological or financial harm.",
    src: "https://docs.github.com/en/copilot/responsible-use/inline-suggestions" },

  /* ---------- D2 ---------- */
  { id: "c215", d: "D2", v: null,
    front: "What are next edit suggestions, as opposed to code completion?",
    back: "Completion works forward from the cursor. Next edit suggestions predict where you are likely to edit NEXT, elsewhere in the file, and propose that change.\n\nThat is what makes rename-and-propagate style edits fast. Both are excluded from AI credit billing.",
    src: "https://docs.github.com/en/copilot/concepts/completions/code-suggestions" },

  { id: "c216", d: "D2", v: "2026-09-24",
    front: "Where do MCP servers get configured for Copilot in VS Code?",
    back: "In an MCP configuration file, workspace-scoped at .vscode/mcp.json, or in user settings.json.\n\nNot in copilot-instructions.md. Instructions shape BEHAVIOUR; they do not register TOOLS. Repository-level MCP configuration on GitHub.com is a separate thing again, and applies to the cloud agent and code review.",
    src: "https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/extend-copilot-chat-with-mcp" },

  { id: "c217", d: "D2", v: null,
    front: "What is the interaction model when agent mode wants to run a command?",
    back: "It surfaces the action for approval. The developer can configure which tools are auto-approved.\n\nAgent mode is supervised by design. Knowing where that approval gate sits is a recurring exam point.",
    src: "https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide" },

  { id: "c218", d: "D2", v: "2026-09-24",
    front: "What is the precedence order for custom instructions?",
    back: "Highest to lowest:\n1. PERSONAL instructions\n2. REPOSITORY instructions, internally ordered: path-specific, then repository-wide, then agent instructions\n3. ORGANISATION instructions, lowest\n\nBUT all relevant sets are still provided to Copilot. Precedence decides who wins a conflict; it does not drop the losers. GitHub still advises avoiding conflicting instructions.",
    src: "https://docs.github.com/en/copilot/concepts/prompting/response-customization" },

  { id: "c219", d: "D2", v: null,
    front: "What does the Copilot CLI do?",
    back: "Brings Copilot to the terminal: explaining and generating shell commands, and running agentic tasks from the command line.\n\nIt is included in all plans. It does NOT manage seats or policy; that is organisation settings or the REST API.",
    src: "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-copilot-cli" },

  { id: "c220", d: "D2", v: null,
    front: "List the Copilot surfaces outside an IDE.",
    back: "Copilot Chat on GitHub.com, GitHub Mobile, Windows Terminal, the Copilot CLI, the Copilot app, plus pull request summaries and Copilot code review on GitHub.\n\nFeature availability differs across all of them. The feature matrix is the reference, not assumption.",
    src: "https://docs.github.com/en/copilot/reference/copilot-feature-matrix" },

  { id: "c221", d: "D2", v: null,
    front: "Can a developer choose which model Copilot uses?",
    back: "On paid plans, yes, through a model picker. Copilot Free and Student are auto model selection only.\n\nOrganisations can further restrict which models are permitted through policy, so the picker shows what policy allows, not everything that exists.",
    src: "https://docs.github.com/en/copilot/get-started/plans" },

  { id: "c222", d: "D2", v: null,
    front: "Seat assignment: can Copilot be granted to one team rather than a whole organisation?",
    back: "Yes. Seats can be assigned to selected members or teams, or to everyone, through the UI or the REST API.\n\nUnassigning a seat takes effect at the END of the billing cycle, so a reclamation exercise saves money next cycle, not today.",
    src: "https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-access" },

  { id: "c223", d: "D2", v: "2026-09-24",
    front: "What does GitHub mean by Copilot INTEGRATIONS?",
    back: "Ways to work with and trigger the CLOUD AGENT from tools you already use: Microsoft Teams, Slack, Linear, Azure Boards and Jira.\n\nNot Chat plugins. Note the capability difference: deep research, planning and iterating before opening a pull request are only on GitHub.com, and in public preview for Teams and Slack. Azure Boards, Jira and Linear only support creating a pull request directly.",
    src: "https://docs.github.com/en/copilot/concepts/tools/about-copilot-integrations" },

  { id: "c224", d: "D2", v: "2026-09-24",
    front: "Chat gives an answer that ignores the earlier conversation. Why?",
    back: "The conversation was cleared or a new chat was started, so prior turns are no longer in context.\n\nIn VS Code, /clear starts a new chat session. That is deliberate: it stops a long thread anchoring on an earlier wrong turn. Surprising only when you did not mean to do it.",
    src: "https://docs.github.com/en/copilot/reference/chat-cheat-sheet" },

  { id: "c225", d: "D2", v: null,
    front: "Which surface for a coordinated change across several files, reviewed before applying?",
    back: "Multi-file editing in Copilot Chat, or agent mode. Both propose changes across files and surface them for acceptance.\n\nInline chat is single-file, so you would be restating intent for each one.",
    src: "https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide" },

  { id: "c226", d: "D2", v: "2026-09-24",
    front: "What are the hard limits on a Copilot cloud agent session?",
    back: "One repository only, no cross-repository runs. One branch at a time. EXACTLY ONE pull request per task. A maximum execution time of 59 MINUTES, a hard limit that cannot be extended.\n\nIt only works with repositories hosted on GitHub. And an incompatible ruleset or branch protection rule will BLOCK it, though you can add Copilot as a bypass actor.",
    src: "https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent" },

  { id: "c227", d: "D2", v: "2026-09-24",
    front: "What do GitHub MCP server TOOLSETS control, and why restrict them?",
    back: "Toolsets enable or disable groups of GitHub API capabilities. They contain not only tools but also relevant MCP RESOURCES AND PROMPTS.\n\nWhy restrict: fewer tools means better tool selection accuracy and fewer errors, and disabling unused toolsets frees tokens in the context window. A performance AND security decision.",
    src: "https://docs.github.com/en/copilot/concepts/context/mcp" },

  { id: "c228", d: "D2", v: "2026-09-24",
    front: "Match the three agentic surfaces to their jobs.",
    back: "Agent mode: local, in-editor, autonomous edits in your own development environment.\nCloud agent: remote, autonomous, runs in a GitHub Actions-powered ephemeral environment, assigned from an issue or chat prompt, can open a pull request.\nCode review: reviews an existing pull request or selection and leaves comments.\n\nOne writes with you, one writes without you, one does not write at all.",
    src: "https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent" },

  { id: "c229", d: "D2", v: "2026-09-24",
    front: "Which of Copilot Free's limits are worth remembering?",
    back: "2,000 completions per month. Auto model selection only. No Copilot Chat skills in IDEs. Code review limited to \"Review selection\" in VS Code. No cloud agent, no third-party agents, no pull request summaries.\n\nBut it DOES include agent mode, MCP, and repository and personal custom instructions.",
    src: "https://docs.github.com/en/copilot/get-started/plans" },

  { id: "c230", d: "D2", v: "2026-09-24",
    front: "Which chat participant for 'which setting controls auto save'?",
    back: "@vscode. It has context about Visual Studio Code commands and features.\n\n@terminal is the VS Code terminal shell and its contents, @github exposes GitHub-specific Copilot skills, @azure covers Azure services and is in public preview.",
    src: "https://docs.github.com/en/copilot/reference/chat-cheat-sheet" },

  { id: "c231", d: "D2", v: null,
    front: "Which Copilot surfaces are widely supported versus patchy across IDEs?",
    back: "Code completions are the most broadly supported. Chat, inline chat, agent mode and the customisation features vary by IDE.\n\nRollout plans that assume VS Code parity across JetBrains, Visual Studio, Neovim, Xcode and Eclipse will be wrong somewhere.",
    src: "https://docs.github.com/en/copilot/reference/copilot-feature-matrix" },

  { id: "c232", d: "D2", v: null,
    front: "What is the pull request summary feature, and who gets it?",
    back: "Generates a description of the change set on a pull request.\n\nNot available on Copilot Free. Available on the paid and organisation plans. A typical 'which plan' exam distractor.",
    src: "https://docs.github.com/en/copilot/get-started/plans" },

  /* ---------- D3 ---------- */
  { id: "c311", d: "D3", v: "2026-09-24",
    front: "How does Copilot connect, and what does a corporate proxy need?",
    back: "By default Copilot connects to GitHub's server DIRECTLY via a secure HTTPS connection. No extra network configuration is needed.\n\nBehind a corporate proxy: Copilot supports basic HTTP proxy setups, authenticating with basic auth or KERBEROS. Your proxy or firewall admin must also allow the documented Copilot endpoints.\n\nTRAP: if the proxy URL starts https:// the proxy is NOT currently supported.",
    src: "https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/network-settings" },

  { id: "c312", d: "D3", v: null,
    front: "How does the Copilot service know who you are and what you are entitled to?",
    back: "The extension signs in to GitHub, and a token derived from that session accompanies each request. The service checks identity and Copilot entitlement.\n\nThat same identity is how seat-level and organisation-level policy gets applied to your requests.",
    src: "https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/network-settings" },

  { id: "c313", d: "D3", v: null,
    front: "What happens when required context exceeds the model's context window?",
    back: "It is truncated or selectively included. You do not reliably get an error.\n\nSo material you assumed was present may silently not be. This is the mechanism behind 'attaching twenty files made it worse'.",
    src: "https://docs.github.com/en/copilot/concepts/context" },

  { id: "c314", d: "D3", v: null,
    front: "Where is content exclusion enforced, and what follows from that?",
    back: "Server side, in the Copilot service path, not by the client alone.\n\nThat is why policy changes propagate without an extension update, and why there is an up-to-30-minute cache refresh in the IDE rather than instant effect.",
    src: "https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/content-exclusion" },

  { id: "c315", d: "D3", v: "2026-09-24",
    front: "Audit log versus usage metrics versus user management API: which answers what?",
    back: "AUDIT LOG: administrative EVENTS, such as seat assignment and policy changes. Business and Enterprise.\nUSAGE METRICS: adoption, engagement, acceptance rate, lines of code, pull request lifecycle. Enterprise, org, repository AND user level.\nUSER MANAGEMENT API: the SOURCE OF TRUTH for licence and seat information, including last_activity_at. Seat data is NOT in usage metrics.\n\nNone of them contains prompt or suggestion content.",
    src: "https://docs.github.com/en/copilot/concepts/billing-and-usage/copilot-usage-metrics/copilot-metrics" },

  /* ---------- D4 ---------- */
  { id: "c409", d: "D4", v: "2026-09-24",
    front: "Why does 'refactor this so it is better' underperform?",
    back: "'Better' names no criterion, so the model invents a target.\n\nState the criterion: reduce duplication, make it testable, remove shared mutable state, cut the branching. A constraint you cannot check is not a constraint.",
    src: "https://docs.github.com/en/copilot/concepts/prompting/prompt-engineering" },

  { id: "c410", d: "D4", v: "2026-09-24",
    front: "What makes a constraint useful in a prompt?",
    back: "It must be checkable against the output.\n\nGood: 'standard library only, no third-party dependencies'. Useless: 'avoid bad practices', 'nothing unusual', 'do it properly'.",
    src: "https://docs.github.com/en/copilot/concepts/prompting/prompt-engineering" },

  { id: "c411", d: "D4", v: "2026-09-24",
    front: "What is the strongest form of context for 'implement this to an exact contract'?",
    back: "The failing tests. Tests are executable specification: they pin down edge cases, error behaviour and types in a way prose does not, and they give you an instant check on the result.",
    src: "https://docs.github.com/en/copilot/concepts/prompting/prompt-engineering" },

  { id: "c412", d: "D4", v: "2026-09-24",
    front: "Why decompose a large request rather than ask for it all at once?",
    back: "Decomposition turns one unverifiable output into several checkable ones, and errors get caught before they propagate into later steps.\n\nIt also keeps context focused on the current step rather than the whole problem.",
    src: "https://docs.github.com/en/copilot/concepts/prompting/prompt-engineering" },

  { id: "c413", d: "D4", v: null,
    front: "What is comment-driven completion?",
    back: "Writing a descriptive comment and a signature above an empty function, then letting the completion satisfy it. The comment IS the prompt.\n\nWhich is also why a vague comment produces vague code.",
    src: "https://docs.github.com/en/copilot/concepts/completions/code-suggestions" },

  { id: "c414", d: "D4", v: null,
    front: "Copilot keeps using a deprecated internal API that still exists in the repo. Most durable fix?",
    back: "A repository instruction naming the deprecated API and its replacement.\n\nRe-prompting fixes it once, for one person. An instruction fixes it for everyone, on every request, until the old code is actually gone.",
    src: "https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions" },

  { id: "c415", d: "D4", v: "2026-09-24",
    front: "Which prompt additions add signal, and which just add tokens?",
    back: "Signal: naming language, framework and version; checkable constraints; one worked example of the output shape; the relevant file attached.\n\nTokens only: politeness, repetition, restating the request three ways, 'this is very important'.",
    src: "https://docs.github.com/en/copilot/concepts/prompting/prompt-engineering" },

  /* ---------- D5 ---------- */
  { id: "c508", d: "D5", v: "2026-09-24",
    front: "What is the single most common Copilot rollout mistake?",
    back: "Not capturing a baseline before enabling seats.\n\nGitHub's own framing: understanding how Copilot is used is the FIRST step to demonstrating value, and the path starts by establishing a usage baseline, then connecting adoption to measurable outcomes.\n\nCycle time, review time and defect rate after rollout are uninterpretable without the same numbers from before it. You cannot retrofit a baseline.",
    src: "https://docs.github.com/en/copilot/tutorials/roll-out-at-scale/measure-copilot-impact" },

  { id: "c509", d: "D5", v: "2026-09-24",
    front: "How do you evidence Copilot's impact to a sceptical leadership team?",
    back: "GitHub's sequence: establish a usage baseline, see how code is being generated, then CONNECT ADOPTION TO MEASURABLE OUTCOMES.\n\nIn practice triangulate three sources: adoption from usage metrics, delivery measures such as cycle time and change failure rate, and developer feedback. Any one alone is contestable.",
    src: "https://docs.github.com/en/copilot/tutorials/roll-out-at-scale/measure-copilot-impact" },

  { id: "c510", d: "D5", v: "2026-09-24",
    front: "Adoption has stalled at inline completions only. What actually moves it?",
    back: "Enablement. GitHub has a dedicated path for this: encouraging developers to make the most of Copilot FEATURES, beyond completions.\n\nIn practice: targeted training on chat, instructions files and agent workflows, with internal champions demonstrating real tasks. It is an enablement gap, not a licensing gap. Usage quotas produce gaming, not value.",
    src: "https://docs.github.com/en/copilot/tutorials/roll-out-at-scale/enable-developers" },

  { id: "c511", d: "D5", v: null,
    front: "Which risk must be watched alongside any speed gain?",
    back: "Rework. If defect rate, rework and change failure rate rise, the speed was borrowed rather than gained.\n\nAlways pair a velocity measure with a quality measure, or you cannot distinguish faster from sloppier.",
    src: "https://docs.github.com/en/copilot/tutorials/roll-out-at-scale" },

  { id: "c512", d: "D5", v: null,
    front: "Good Copilot candidates in an operations-heavy team?",
    back: "Drafting runbooks from existing scripts. Translating shell to PowerShell or Python. Generating test fixtures and sample payloads. Summarising unfamiliar automation.\n\nAll mechanical, high volume, easy to verify. Not: deciding what warrants a review, or approving a production change.",
    src: "https://docs.github.com/en/copilot/tutorials" },

  { id: "c513", d: "D5", v: null,
    front: "How does Copilot most reliably speed up a new joiner?",
    back: "By answering comprehension questions about unfamiliar code, so they interrupt colleagues less.\n\nThe benefit lands twice: the new joiner moves faster AND the rest of the team gets its time back. Code volume is the wrong target for a newcomer.",
    src: "https://docs.github.com/en/copilot/tutorials" },

  { id: "c514", d: "D5", v: null,
    front: "Why are custom instructions a productivity lever, not just a style tool?",
    back: "Encoding a convention once removes the same correction from every future interaction, for everyone on the repository.\n\nHighest leverage per minute of any adoption step. Less rework on output beats more output.",
    src: "https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions" },

  { id: "c515", d: "D5", v: "2026-09-24",
    front: "Defending a 500-seat renewal: what analysis holds up?",
    back: "GitHub has a dedicated path for assigning licences and MANAGING COSTS, and a separate one for measuring trial success through adoption, engagement and usage patterns.\n\nSo: active seat utilisation with idle seats honestly reclaimed, delivery movement in adopting versus non-adopting teams, and developer feedback. Not total suggestions accepted or credits consumed, which are activity rather than outcome.",
    src: "https://docs.github.com/en/copilot/tutorials/roll-out-at-scale/assign-licenses" },

  /* ---------- D6 ---------- */
  { id: "c613", d: "D6", v: null,
    front: "How does Copilot policy flow between enterprise and organisation?",
    back: "Downward. Enterprise policy constrains what organisations can set; an organisation cannot loosen a restriction imposed above it.\n\nSame shape as content exclusion inheritance: a repository can ADD exclusions, never remove inherited ones.",
    src: "https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies" },

  { id: "c614", d: "D6", v: null,
    front: "Does .gitignore stop Copilot reading a file?",
    back: "No. Completely unrelated mechanisms. A gitignored file is still on disk, can still be open in the editor, and can still be used as context.\n\nContent exclusion is the only mechanism that addresses this, and it needs Business or Enterprise.",
    src: "https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/content-exclusion" },

  { id: "c615", d: "D6", v: null,
    front: "What CAN an organisation administrator control about Copilot?",
    back: "Whether suggestions matching public code are allowed. Which Copilot features are enabled for members. Content exclusion paths and repositories. Which models are permitted. Seat assignment.\n\nGitHub frames this as governing at scale: balancing developer productivity against security, privacy and compliance.\n\nWhat they cannot control: the wording of developers' prompts, and retention for Business seats (already non-retained by default).",
    src: "https://docs.github.com/en/copilot/tutorials/roll-out-at-scale/govern-at-scale" },

  { id: "c233", d: "D2", v: "2026-09-24",
    front: "Who can use the Copilot cloud agent, and what has to happen first?",
    back: "Available for ALL PAID Copilot plans. Not Copilot Free.\n\nOn Business or Enterprise an ADMINISTRATOR must enable the relevant policy first. Separately, repository owners can opt some or all repositories OUT.\n\nSo three gates: paid plan, admin policy, repository not opted out.",
    src: "https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent" },

  { id: "c234", d: "D2", v: "2026-09-24",
    front: "What does a Copilot cloud agent session consume?",
    back: "GitHub Actions MINUTES and AI CREDITS. Credits consumed depend on the model and the tokens processed.\n\nWithin your included Actions minutes and AI credits there is no extra cost. Copilot code review also consumes Actions minutes on private repositories.\n\nContrast with completions and next edit suggestions, which are not billed in AI credits at all.",
    src: "https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent" },

  { id: "c235", d: "D2", v: "2026-09-24",
    front: "How can the Copilot cloud agent be customised?",
    back: "Custom instructions, MCP servers, custom agents, hooks and skills.\n\nTwo details worth holding: repository MCP settings apply to BOTH cloud agent and Copilot code review, and the GitHub MCP server plus the Playwright MCP server are ENABLED BY DEFAULT for both.",
    src: "https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent" },

  { id: "c236", d: "D2", v: "2026-09-24",
    front: "Organisation custom instructions: who do they reach? Contrast with content exclusion.",
    back: "Organisation custom instructions are used for ALL MEMBERS of the organisation, IRRESPECTIVE of whether they get their Copilot subscription from that organisation.\n\nContent exclusion set at organisation level is the opposite: it reaches ONLY users assigned a Copilot seat BY that organisation.\n\nSame level, different reach. Exam-grade contrast.",
    src: "https://docs.github.com/en/copilot/concepts/prompting/response-customization" },

  { id: "c237", d: "D2", v: "2026-09-24",
    front: "When Copilot reviews a pull request, which branch does it read instructions from?",
    back: "The HEAD branch, the one with your changes, not the base branch.\n\nApplies to repository custom instructions, agent instructions and agent skills. Practical consequence: you can change instructions and test them in the SAME pull request without merging first.",
    src: "https://docs.github.com/en/copilot/concepts/prompting/response-customization" },

  { id: "c238", d: "D2", v: "2026-09-24",
    front: "Which custom instruction types are limited in scope?",
    back: "PERSONAL instructions: only supported for Copilot Chat on GitHub.com.\nORGANISATION instructions: only Copilot Chat on GitHub.com, Copilot code review on GitHub.com, and Copilot cloud agent on GitHub.com. Settable only by org owners on Business or Enterprise.\nAGENT instructions: not yet supported by all Copilot features.\n\nRepository-wide and path-specific are the broadly supported ones.",
    src: "https://docs.github.com/en/copilot/concepts/prompting/response-customization" },

  { id: "c316", d: "D3", v: "2026-09-24",
    front: "Which proxy environment variables does Copilot read, and in what order?",
    back: "Highest to lowest priority: HTTPS_PROXY, https_proxy, HTTP_PROXY, http_proxy.\n\nNON-STANDARD BEHAVIOUR: normally the http/https prefix refers to the TYPE OF REQUEST. Copilot does not follow that convention. It takes the URL from the HIGHEST-PRIORITY variable that is set and uses it as the proxy for BOTH http and https requests.",
    src: "https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/network-settings" },

  { id: "c317", d: "D3", v: "2026-09-24",
    front: "Where does Copilot read custom SSL certificates from, and why does it matter?",
    back: "From the operating system's trust store, plus any file named by the Node.js variable NODE_EXTRA_CA_CERTS.\n\nIt reads them whether or not a proxy is configured on the machine, which is what lets it work with transparent proxies and Zscaler.\n\nWithout a custom certificate an HTTP proxy can monitor, route and terminate Copilot's connection but CANNOT inspect the contents.",
    src: "https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/network-settings" },

  { id: "c318", d: "D3", v: "2026-09-24",
    front: "What is session data, and where does it live?",
    back: "The record of an interaction: prompts and responses, tools used, and changes made to files.\n\nCopilot CLI and the Copilot app store the full record under ~/.copilot/session-state/, plus a subset in a local SQLite session store that powers session-history queries and /chronicle.\n\nCloud agent sessions run in an ephemeral GitHub-hosted environment that is DESTROYED at the end, but the session LOG remains on GitHub.com.",
    src: "https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/session-data" },

  { id: "c319", d: "D3", v: "2026-09-24",
    front: "Who can see your Copilot sessions by default?",
    back: "LOCAL sessions: unshared by default. You can share one with people who have repository access, view-only.\nSYNCED session data: tied to your personal account, accessible ONLY TO YOU by default.\nCLOUD AGENT sessions: SHARED BY DEFAULT, visible to anyone with access to the repository.\n\nKEY NUANCE: administrators can control whether syncing is AVAILABLE, but enabling syncing does NOT give them access to your session data.",
    src: "https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/session-data" },

  { id: "c320", d: "D3", v: "2026-09-24",
    front: "Which policy governs syncing local Copilot sessions to the cloud?",
    back: "'Store local sessions in the Cloud'. For Business and Enterprise users it must be set to at least 'View from cloud' for session data to sync.\n\nIf the policy is DISABLED OR UNCONFIGURED, sessions are stored locally only.\n\nSame shape as the MCP policy: an off-by-default gate that only applies to Business and Enterprise.",
    src: "https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/session-data" },

  { id: "c516", d: "D5", v: "2026-09-24",
    front: "What are Copilot ADOPTION COHORTS, and why do they exist?",
    back: "Passive (labelled No Cohort in the API), Phase 1 CODE FIRST, Phase 2 AGENT FIRST, Phase 3 MULTI-AGENT.\n\nWhy: a flat active-user count treats someone occasionally accepting a completion the same as someone orchestrating agent workflows all day. Cohorts show whether usage is DEEPENING or plateauing.\n\nThreshold: at least TWO active days in the trailing 28-day window on that phase's surfaces. Recalculated daily, so a user's phase can shift day to day. That is expected, not a data error.",
    src: "https://docs.github.com/en/copilot/concepts/billing-and-usage/copilot-usage-metrics/copilot-metrics" },

  { id: "c517", d: "D5", v: "2026-09-24",
    front: "What is the adoption multiplier?",
    back: "Average pull requests merged for ENGAGED users (Phases 1, 2 and 3) divided by pull requests merged for PASSIVE users.\n\nExample: engaged cohorts average 20 PRs per user per month, passive average 10, so the multiplier is 2x.\n\nIt shows the relative lift from deeper adoption INDEPENDENT of how many users fall into each phase, which is what makes it harder to game than a headline count.",
    src: "https://docs.github.com/en/copilot/concepts/billing-and-usage/copilot-usage-metrics/copilot-metrics" },

  { id: "c518", d: "D5", v: "2026-09-24",
    front: "What is NOT included in Copilot usage metrics?",
    back: "Copilot Chat on GitHub.com. GitHub Mobile. Licence and seat data (that is the user management API).\n\nAlso: most metrics come from CLIENT-SIDE IDE telemetry, so end users need telemetry ENABLED in their IDE for the richest data. Server-side telemetry supplements it to catch users whose client telemetry is blocked by network or proxy conditions.\n\nData freshness: available within TWO FULL DAYS.",
    src: "https://docs.github.com/en/copilot/concepts/billing-and-usage/copilot-usage-metrics/copilot-metrics" },

  { id: "c519", d: "D5", v: "2026-09-24",
    front: "What does a healthy Copilot trial look like, by GitHub's own benchmark?",
    back: "LICENCE ACTIVATION: 70 to 90 percent of trial licences show usage within the first month.\nSUSTAINED ENGAGEMENT: DAU and WAU stabilise or increase.\nBREADTH: users experiment across multiple languages and features.\nDEPTH: agent adoption and acceptance rate show advanced capabilities being explored.\nFEEDBACK: developers report productivity or workflow gains.\n\nIf goals are missed, GitHub's advice is more enablement, communication or IDE configuration BEFORE expanding.",
    src: "https://docs.github.com/en/copilot/tutorials/roll-out-at-scale/measure-success" },

  { id: "c321", d: "D3", v: "2026-09-24",
    front: "Semantic indexing for NON-GitHub repositories: what are the constraints?",
    back: "Copilot in VS Code can semantically index workspace files from repositories hosted elsewhere, such as GitLab, and local repositories. THIS UPLOADS YOUR DATA TO GITHUB to make it searchable.\n\nGitHub.com ONLY. Not available on GHE.com or GitHub Enterprise Server.\n\nPolicy-controlled and DISABLED BY DEFAULT. On Business or Enterprise an owner must explicitly set 'Semantic indexing for non-GitHub repositories' to Enabled. Unconfigured means unavailable.",
    src: "https://docs.github.com/en/copilot/concepts/context/repository-indexing" },

  { id: "c322", d: "D3", v: "2026-09-24",
    front: "How do content exclusions interact with the semantic search index?",
    back: "If an index is created for a repository covered by a content exclusion policy, the data is FILTERED ACCORDING TO THE POLICY before being passed to Copilot Chat.\n\nSo exclusion is applied on the way out of the index, not by preventing indexing. Useful answer when someone asks whether indexing bypasses exclusions: it does not.",
    src: "https://docs.github.com/en/copilot/concepts/context/repository-indexing" },

  { id: "c239", d: "D2", v: "2026-09-24",
    front: "What are Copilot Spaces, and who can use them?",
    back: "A way to organise the context Copilot uses. A space can hold repositories, code, pull requests, issues, free-text such as transcripts or notes, images and file uploads. GitHub-based sources stay in sync automatically as they change.\n\nWHO: anyone with a Copilot licence, INCLUDING COPILOT FREE. Not an Enterprise-only feature.\n\nWHERE: Copilot Chat in GitHub, and in your IDE via the GitHub MCP server.",
    src: "https://docs.github.com/en/copilot/concepts/context/spaces" },

  { id: "c240", d: "D2", v: "2026-09-24",
    front: "How is access to a Copilot Space controlled?",
    back: "ORGANISATION-OWNED: share with org members as admin, editor or viewer, or grant 'No access' to keep it hidden.\nINDIVIDUAL-OWNED: public, specific GitHub users, or private. Public spaces are VIEW-ONLY by default.\n\nIn all cases viewers only see sources THEY already have access to.\n\nQUIRK: a user whose seat comes from an org where Spaces are enabled can still create a space under an org that has Spaces disabled. The system does not block it.",
    src: "https://docs.github.com/en/copilot/concepts/context/spaces" },

  { id: "c241", d: "D2", v: "2026-09-24",
    front: "Copilot Memory stores two kinds of thing. What are they, and who sees each?",
    back: "REPOSITORY-LEVEL FACTS: coding conventions, architectural decisions, build commands, project rules. Available to ALL users with access to Memory for that repository, but usable only in operations on that same repository.\n\nUSER-LEVEL PREFERENCES: how one person likes to work with Copilot. Available only in that user's own interactions, across repositories.\n\nPublic preview. Used by cloud agent, Copilot code review and Copilot CLI.",
    src: "https://docs.github.com/en/copilot/concepts/agents/copilot-memory" },

  { id: "c242", d: "D2", v: "2026-09-24",
    front: "Copilot Memory: enablement, retention and the code review exception.",
    back: "ENABLED PER USER, not per repository. Individual plans: ON BY DEFAULT. Org or enterprise managed: an admin must enable the policy first, then users can opt out.\n\nRETENTION: any fact or preference that goes UNUSED is auto-deleted after 28 DAYS. The timer resets when Copilot validates and uses it.\n\nEXCEPTION: Copilot code review uses REPOSITORY-LEVEL FACTS ONLY. User preferences are not applied during code review.",
    src: "https://docs.github.com/en/copilot/concepts/agents/copilot-memory" },

  { id: "c243", d: "D2", v: "2026-09-24",
    front: "What are Copilot HOOKS, where do they live, and where do they work?",
    back: "Custom shell commands executed at strategic points in an agent's workflow, receiving JSON about agent actions.\n\nWHERE THEY WORK: Copilot cloud agent on GitHub, and GitHub Copilot CLI. NOT IDE agent mode.\n\nWHERE THEY LIVE: .github/hooks/*.json in the repository. Copilot CLI also supports personal hooks at ~/.copilot/hooks/*.json.\n\nConfig needs version 1, type 'command', and bash (Unix) or powershell (Windows). timeoutSec defaults to 30.",
    src: "https://docs.github.com/en/copilot/concepts/agents/hooks" },

  { id: "c244", d: "D2", v: "2026-09-24",
    front: "Name the hook types, and say which one is the powerful one.",
    back: "sessionStart, sessionEnd, userPromptSubmitted, preToolUse, postToolUse, agentStop, subagentStop, errorOccurred.\n\npreToolUse is the powerful one: it can APPROVE OR DENY TOOL EXECUTIONS. Use it to block dangerous commands, enforce security policy, or require approval for sensitive operations.\n\nPERFORMANCE TRAP: hooks run SYNCHRONOUSLY and BLOCK agent execution. Keep them under 5 seconds.",
    src: "https://docs.github.com/en/copilot/concepts/agents/hooks" },

  { id: "c245", d: "D2", v: "2026-09-24",
    front: "What are agent SKILLS, and how do they differ from instructions?",
    back: "Folders of instructions, scripts and resources that Copilot LOADS WHEN RELEVANT for specialised tasks. The Agent Skills specification is an OPEN STANDARD used by other AI systems too.\n\nProject skills: .github/skills, .claude/skills or .agents/skills.\nPersonal skills: ~/.copilot/skills or ~/.agents/skills.\nDiscover and install with `gh skill` in GitHub CLI.\n\nWorks with cloud agent, code review, Copilot CLI, the Copilot app, and agent mode in VS Code and JetBrains.",
    src: "https://docs.github.com/en/copilot/concepts/agents/about-agent-skills" },

];
