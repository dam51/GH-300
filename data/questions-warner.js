// GH-300 practice questions adapted from https://github.com/timothywarner-org/copilot-cert-prep
// (docs/practice/*.md and docs/MINI-MOCK.md). Imported 2026-11-23; answers re-verified against current docs,
// three distractors and one stem edited, one item (w601) dropped as outdated.
//
// MIT License
//
// Copyright (c) 2025-2026 Tim Warner
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

window.GH300_QUESTIONS.push(...[
  {
    "id": "w101",
    "d": "D1",
    "v": "2026-11-23",
    "stem": "Fourth Coffee is building a staff scheduling application. A developer asks GitHub Copilot to generate a function that ranks employees for premium shifts. The generated function weights a reliability score that the team later traces to historical data in which part-time parents were systematically under-scheduled. Which responsible AI principle does this outcome most directly put at risk?",
    "options": [
      "Transparency",
      "Fairness",
      "Reliability and safety",
      "Privacy and security"
    ],
    "answer": [
      1
    ],
    "explain": "Fairness requires that a system treat similarly situated people equitably. A score derived from historically skewed scheduling reproduces that skew and produces differential outcomes for employees with comparable performance, which is the defining fairness failure.\n\nWhy not the others:\n- \"Transparency\": Transparency concerns whether a system and its limitations are understandable to the people affected. The team can explain exactly how the score is calculated, so the failure is in what the calculation encodes rather than in whether it can be explained.\n- \"Reliability and safety\": Reliability and safety concerns whether a system performs consistently and as designed. This function runs exactly as written and returns a stable result, so the defect is not one of reliability.\n- \"Privacy and security\": Privacy and security is about protecting personal data and resisting misuse. The harm here is unequal treatment of a group, which is fairness.",
    "src": "https://learn.microsoft.com/en-us/training/modules/responsible-ai-with-github-copilot/3-six-principles-of-responsible-ai"
  },
  {
    "id": "w102",
    "d": "D1",
    "v": "2026-11-23",
    "stem": "A Proseware developer accepts a Copilot suggestion, opens a pull request, and the change is merged and released. A defect in the generated logic later produces incorrect customer invoices. During the incident review, the developer notes that the code originated from Copilot. Which responsible AI principle determines where responsibility for the released defect sits?",
    "options": [
      "Transparency",
      "Privacy and security",
      "Reliability and safety",
      "Accountability"
    ],
    "answer": [
      3
    ],
    "explain": "Accountability states that people remain responsible for AI-assisted systems. The developer who accepted the suggestion and the team that approved the pull request own the released defect, and the origin of the code does not transfer that responsibility.\n\nWhy not the others:\n- \"Transparency\": Transparency would govern whether Proseware disclosed that AI assistance was used and what its limits are. Disclosure does not move responsibility for the released code away from the team.\n- \"Privacy and security\": Privacy and security would apply if the defect exposed customer data or credentials. The described failure is an arithmetic error in invoicing rather than a data protection problem.\n- \"Reliability and safety\": Reliability and safety describes the property the released code failed to deliver. It names the symptom, but the question asks who is answerable for the outcome, which is a different principle.",
    "src": "https://learn.microsoft.com/en-us/training/modules/responsible-ai-with-github-copilot/3-six-principles-of-responsible-ai"
  },
  {
    "id": "w103",
    "d": "D1",
    "v": "2026-11-23",
    "stem": "A Coho Winery developer is troubleshooting a failing distribution report. To ask why the query fails, the developer pastes the full connection string, including the live database password, into Copilot Chat. Which responsible AI principle does this action most directly compromise?",
    "options": [
      "Inclusiveness",
      "Accountability",
      "Privacy and security",
      "Fairness"
    ],
    "answer": [
      2
    ],
    "explain": "Privacy and security requires protecting data and collecting only what a task needs. A live password is not required to explain why a query fails, and placing it in a prompt exposes it beyond the systems approved to hold it.\n\nWhy not the others:\n- \"Inclusiveness\": Inclusiveness addresses whether a system serves people of all abilities and backgrounds. Nothing about pasting a credential changes who can use the reporting application.\n- \"Accountability\": Accountability addresses who answers for an AI-assisted outcome. It remains relevant in the background, but the immediate failure is the handling of a secret rather than a question of ownership.\n- \"Fairness\": Fairness addresses equitable treatment of similarly situated people. No group is treated differently by this action, so fairness is not the principle at stake.",
    "src": "https://learn.microsoft.com/en-us/training/modules/responsible-ai-with-github-copilot/3-six-principles-of-responsible-ai"
  },
  {
    "id": "w104",
    "d": "D1",
    "v": "2026-11-23",
    "stem": "Blue Yonder Airlines asks Copilot to generate a fare recalculation routine. The routine passes every existing unit test. During a staging rehearsal, a delayed-flight scenario that no existing test covered causes the routine to return a negative fare. Which responsible AI principle does this outcome most directly illustrate?",
    "options": [
      "Reliability and safety",
      "Privacy and security",
      "Fairness",
      "Transparency"
    ],
    "answer": [
      0
    ],
    "explain": "Reliability and safety requires that a system behave predictably and respond safely to unexpected conditions. A routine that produces a negative fare on an uncovered but realistic input has failed exactly that requirement, and the passing tests only prove the cases they exercise.\n\nWhy not the others:\n- \"Privacy and security\": Privacy and security concerns protecting data and respecting data handling boundaries. No customer or credential data is exposed by an incorrect fare calculation.\n- \"Fairness\": Fairness concerns equitable outcomes for similarly situated people. The routine misbehaves on a scenario rather than on a group of passengers, so the failure is not differential treatment.\n- \"Transparency\": Transparency concerns whether capabilities and limits are understandable. The team can read the routine, so the gap is in its behavior rather than in its explainability.",
    "src": "https://learn.microsoft.com/en-us/training/modules/responsible-ai-with-github-copilot/3-six-principles-of-responsible-ai"
  },
  {
    "id": "w105",
    "d": "D1",
    "v": "2026-11-23",
    "stem": "Wide World Importers is preparing an internal announcement about adopting Copilot on its purchasing team. The engineering manager insists that the announcement state plainly what Copilot does well, where its suggestions can be wrong. Which responsible AI principle does this communication uphold?",
    "options": [
      "Accountability",
      "Transparency",
      "Inclusiveness",
      "Fairness"
    ],
    "answer": [
      1
    ],
    "explain": "Transparency requires being honest about what an AI system can and cannot do so that the people relying on it can calibrate their trust. Stating the strengths, the failure modes, and the review step is that principle applied directly.\n\nWhy not the others:\n- \"Accountability\": Accountability is reinforced by the review commitment in the announcement, but accountability is about who answers for outcomes rather than about making capabilities understandable.\n- \"Inclusiveness\": Inclusiveness concerns whether a system empowers people of all abilities and backgrounds. An internal announcement about capabilities does not change who can use the tooling.\n- \"Fairness\": Fairness concerns equitable treatment across comparable groups. Nothing in the announcement allocates a benefit or a burden differently between teams.",
    "src": "https://learn.microsoft.com/en-us/training/modules/responsible-ai-with-github-copilot/3-six-principles-of-responsible-ai"
  },
  {
    "id": "w106",
    "d": "D1",
    "v": "2026-11-23",
    "stem": "Alpine Ski House uses Copilot to generate a seasonal booking form. The generated markup indicates a validation failure only by changing a field border to red, with no accompanying text and no programmatic association between the message and the input. Which responsible AI principle does the generated markup fail to uphold?",
    "options": [
      "Reliability and safety",
      "Privacy and security",
      "Inclusiveness",
      "Accountability"
    ],
    "answer": [
      2
    ],
    "explain": "Inclusiveness requires that a system work for people of all abilities, including those using assistive technology and those who cannot distinguish the color used. An error conveyed only by a red border reaches neither group, which makes this an accessibility failure in the generated output that the developer is responsible for correcting.\n\nWhy not the others:\n- \"Reliability and safety\": Reliability and safety would be at issue if the validation logic itself were wrong or unstable. The validation works; the problem is how its result is communicated.\n- \"Privacy and security\": Privacy and security would apply if the form leaked booking data or mishandled input. Color-only error signaling does not expose data.\n- \"Accountability\": Accountability describes who answers for the outcome, and the developer does. The question asks which principle the markup fails to uphold, and the failure is one of access rather than ownership.",
    "src": "https://learn.microsoft.com/en-us/training/modules/responsible-ai-with-github-copilot/3-six-principles-of-responsible-ai"
  },
  {
    "id": "w107",
    "d": "D1",
    "v": "2026-11-23",
    "stem": "A Northwind Traders developer accepts a Copilot suggestion that imports a package the developer does not recognize. The project compiles and the order export runs locally. What is the most responsible next step before the change enters a pull request?",
    "options": [
      "Raise the test coverage percentage for the changed file, then open the pull request",
      "Ask Chat for a longer explanation and attach that explanation to the pull request",
      "Run the same prompt again in a fresh session to see whether the suggestion repeats",
      "Confirm that the package exists, is the intended one, and is genuinely required here"
    ],
    "answer": [
      3
    ],
    "explain": "A suggested dependency can be misremembered, abandoned, or a name close to a legitimate package, which is a known supply-chain risk in AI-assisted code. Confirming that the package exists, that it is the intended one, and that the project actually needs it is the check that catches all three cases.\n\nWhy not the others:\n- \"Raise the test coverage percentage for the changed file, then open the pull request\": Coverage measures which lines a test suite executes, not whether a dependency is legitimate. A well-covered file can still import a package that should never have been added.\n- \"Ask Chat for a longer explanation and attach that explanation to the pull request\": A longer explanation can restate the same incorrect assumption in more words. An explanation produced by the same system is not independent evidence about a third-party package.\n- \"Run the same prompt again in a fresh session to see whether the suggestion repeats\": Repeating a prompt can reproduce the same error, because a consistent output is a property of the model rather than proof of correctness. Agreement between two unverified responses establishes nothing.",
    "src": "https://docs.github.com/en/copilot/tutorials/review-ai-generated-code"
  },
  {
    "id": "w108",
    "d": "D1",
    "v": "2026-11-23",
    "stem": "Contoso is drafting an internal policy for AI-assisted development. Leadership is specifically concerned that AI-assisted decisions could become difficult to explain or attribute after the fact. According to Microsoft guidance on mitigating AI risks, which combination of measures addresses that concern?",
    "options": [
      "Robust governance frameworks, transparency in AI processes, and human oversight",
      "Longer prompts, a larger set of attached context files, and a more capable model",
      "Automatic approval of any suggestion that passes the linter, plus a quarterly audit",
      "Disabling agent mode and restricting developers to inline suggestions in the editor"
    ],
    "answer": [
      0
    ],
    "explain": "Microsoft guidance on mitigating AI risks names exactly these three levers: implement robust governance frameworks, ensure transparency in AI processes, and incorporate human oversight. Together they address decisions that are hard to interpret or attribute.\n\nWhy not the others:\n- \"Longer prompts, a larger set of attached context files, and a more capable model\": Better prompting and a stronger model can improve output quality, but neither creates a record of how a decision was made or who approved it. Quality and accountability are separate problems.\n- \"Automatic approval of any suggestion that passes the linter, plus a quarterly audit\": Automatic approval removes the human oversight that the guidance requires, and a linter checks style and common defects rather than the soundness of a decision. A later audit cannot restore a judgment that nobody made.\n- \"Disabling agent mode and restricting developers to inline suggestions in the editor\": Restricting the surface reduces exposure but does not make the remaining decisions explainable or attributable. Inline suggestions still produce code that someone must own.",
    "src": "https://learn.microsoft.com/en-us/training/modules/responsible-ai-with-github-copilot/2-manage-ai-risks"
  },
  {
    "id": "w109",
    "d": "D1",
    "v": "2026-11-23",
    "stem": "An Adventure Works architect asks how the team can guarantee that no GitHub Copilot suggestion ever introduces a security vulnerability into the service catalogue. Which statement accurately describes what is available?",
    "options": [
      "Azure AI Content Safety can be configured to block insecure GitHub Copilot suggestions",
      "Copilot applies filtering, and human review plus security testing remain necessary",
      "The Copilot Studio responsible AI dashboard reports vulnerabilities for each repository",
      "Turning on agent mode routes every suggestion through an added vulnerability scanner"
    ],
    "answer": [
      1
    ],
    "explain": "Copilot applies filtering to prompts and responses, and GitHub documentation is explicit that this does not remove the need for review, testing, and security tooling. No configuration produces a guarantee, which is what makes this the accurate statement.\n\nWhy not the others:\n- \"Azure AI Content Safety can be configured to block insecure GitHub Copilot suggestions\": Azure AI Content Safety is a real Microsoft service, but it governs content in Azure AI applications and is not a control that screens GitHub Copilot code suggestions. Attributing another product's capability to Copilot is a common trap.\n- \"The Copilot Studio responsible AI dashboard reports vulnerabilities for each repository\": Copilot Studio is a separate product for building conversational agents, and its responsible AI tooling does not analyze repositories for vulnerabilities. The name is close enough to be plausible and wrong.\n- \"Turning on agent mode routes every suggestion through an added vulnerability scanner\": Agent mode changes how work is planned and applied across files. It adds tool use and approvals rather than an additional security scanner over every suggestion.",
    "src": "https://docs.github.com/en/copilot/responsible-use/inline-suggestions"
  },
  {
    "id": "w110",
    "d": "D1",
    "v": "2026-11-23",
    "stem": "A Fabrikam developer asks Copilot Chat how to call a library method whose behavior changed in a release published last month. Copilot returns confident, well-formatted guidance that matches the previous behavior. Which limitation of generative AI tools does this outcome illustrate?",
    "options": [
      "Chat responses are capped at a fixed character count for every answer returned",
      "Chat cannot discuss third-party libraries unless an MCP server supplies them",
      "Responses reflect training data and available context, which may lag a release",
      "Chat declines to answer whenever it detects a recently changed API surface"
    ],
    "answer": [
      2
    ],
    "explain": "A model responds from patterns learned during training plus whatever context is supplied at request time. When neither includes a change published after that point, the answer can be fluent, confident, and describe superseded behavior, which is why the developer must check the current release notes.\n\nWhy not the others:\n- \"Chat responses are capped at a fixed character count for every answer returned\": Response length limits exist, but a truncated answer looks incomplete rather than confidently outdated. Length does not explain guidance that is fluent and wrong.\n- \"Chat cannot discuss third-party libraries unless an MCP server supplies them\": Copilot discusses third-party libraries routinely. An MCP server can supply current documentation as additional context, which is a mitigation for this problem rather than a precondition for answering.\n- \"Chat declines to answer whenever it detects a recently changed API surface\": Copilot has no reliable way to know that an API changed unless that information reaches it as context. It does not detect staleness and withhold an answer.",
    "src": "https://learn.microsoft.com/en-us/training/modules/developer-use-cases-for-ai-with-github-copilot/5-understand-limitations-measure-impact",
    "quote": "Bias in suggestions: GitHub Copilot's suggestions reflect patterns in its training data, which may include biases or outdated practices."
  },
  {
    "id": "w201",
    "d": "D2",
    "v": "2026-11-23",
    "stem": "A developer joining Tailwind Traders installs the GitHub Copilot extension in Visual Studio Code but sees no inline suggestions in any file. The Copilot status indicator reports that the developer is not signed in. What must happen before suggestions appear?",
    "options": [
      "The repository must add a Copilot configuration file at the root of the project",
      "An administrator must apply the Copilot code review policy to the repository",
      "The developer must sign in to a GitHub account that has an active Copilot plan",
      "The workspace must be reopened as a trusted folder with agent mode turned on"
    ],
    "answer": [
      2
    ],
    "explain": "Copilot requires an authenticated GitHub account with an active plan or an assigned seat. The status indicator is reporting exactly that precondition, and signing in resolves it.\n\nWhy not the others:\n- \"The repository must add a Copilot configuration file at the root of the project\": Repositories can carry instructions, prompt, and configuration files that shape Copilot behavior, but none of them enable the product. A project file cannot grant a developer access.\n- \"An administrator must apply the Copilot code review policy to the repository\": Copilot code review is an organization or enterprise policy that governs automated pull request review. It has no bearing on whether inline suggestions appear in an editor.\n- \"The workspace must be reopened as a trusted folder with agent mode turned on\": Workspace Trust governs whether workspace code and tools may execute, and agent mode is one interaction surface among several. Neither is required for inline suggestions.",
    "src": "https://code.visualstudio.com/docs/setup/copilot"
  },
  {
    "id": "w202",
    "d": "D2",
    "v": "2026-11-23",
    "stem": "A Fabrikam developer needs to understand how an unfamiliar authentication module behaves across two files before changing anything. Which Copilot surface is the best fit for that request?",
    "options": [
      "Chat, where the developer supplies both files as context and asks for an explanation",
      "Inline suggestions, by typing a descriptive comment at the top of each of the files",
      "Agent mode, by asking it to refactor the module and then reading the resulting diff",
      "The command line, by piping both files into a single shell prompt for a summary"
    ],
    "answer": [
      0
    ],
    "explain": "Chat is built for explanation and comparison with supplied context. The developer can provide the relevant files and receive a description of current behavior without changing any code, which is exactly the stated need.\n\nWhy not the others:\n- \"Inline suggestions, by typing a descriptive comment at the top of each of the files\": Inline suggestions continue code as it is typed. They produce new code rather than an explanation of existing code, and a comment is a weak instrument for asking a question.\n- \"Agent mode, by asking it to refactor the module and then reading the resulting diff\": Agent mode can coordinate edits across files, but the developer explicitly wants to understand the module before changing anything. Refactoring first inverts the order of the task.\n- \"The command line, by piping both files into a single shell prompt for a summary\": The command line is a capable surface, but this request is an editor-side reading task with two files already open. Nothing about it requires leaving the editor.",
    "src": "https://docs.github.com/en/copilot/responsible-use/chat"
  },
  {
    "id": "w203",
    "d": "D2",
    "v": "2026-11-23",
    "stem": "Alpine Ski House configures content exclusion for a repository path that holds payment integration code. A developer confirms that inline suggestions no longer draw on those files and asks whether every Copilot interaction is now covered. What should the administrator explain?",
    "options": [
      "Exclusions apply uniformly across every Copilot surface as soon as the policy saves",
      "Exclusions take effect only after each developer signs out and restarts the editor",
      "Exclusions cover the repository owner's own sessions but not those of collaborators",
      "Exclusion support differs by surface, so the covered surfaces have to be confirmed"
    ],
    "answer": [
      3
    ],
    "explain": "Support is documented per surface and per client, and GitHub states that some interaction modes do not honor exclusions. The correct answer to a scope question is to check the current support matrix for the exact surface in use.\n\nWhy not the others:\n- \"Exclusions apply uniformly across every Copilot surface as soon as the policy saves\": This is the assumption the item is built to correct. GitHub documents content exclusion as a per-surface capability, and treating it as universal isolation overstates what the control provides.\n- \"Exclusions take effect only after each developer signs out and restarts the editor\": A propagation delay exists, and a reload can speed it up, but timing is not the developer's question. The question is about scope, not latency.\n- \"Exclusions cover the repository owner's own sessions but not those of collaborators\": Exclusions are configured at repository, organization, or enterprise scope and apply to the people covered by that scope. Ownership of the repository is not the boundary.",
    "src": "https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/content-exclusion"
  },
  {
    "id": "w204",
    "d": "D2",
    "v": "2026-11-23",
    "stem": "A Coho Winery platform engineer spends most of the working day in a terminal and wants AI assistance that reads project files, proposes shell commands, and edits files without moving to an editor. Which description matches GitHub Copilot CLI?",
    "options": [
      "A Visual Studio Code extension that mirrors editor chat into an integrated terminal",
      "A terminal agent that works with project files, commands, and GitHub resources",
      "A GitHub Actions workflow that posts suggested commands as pull request comments",
      "A browser feature that turns natural language into shell one-liners for copying"
    ],
    "answer": [
      1
    ],
    "explain": "GitHub documents Copilot CLI as an agent that brings Copilot to the terminal, where it can read and modify project files, run approved commands, and work with repositories, issues, and pull requests. That matches every element of the requirement.\n\nWhy not the others:\n- \"A Visual Studio Code extension that mirrors editor chat into an integrated terminal\": Copilot CLI is a standalone program, not an extension surface inside the editor. An integrated terminal panel is a different thing from a terminal agent.\n- \"A GitHub Actions workflow that posts suggested commands as pull request comments\": Copilot CLI can run programmatically inside automation, but describing it as a workflow that only comments on pull requests understates it and misplaces where it runs.\n- \"A browser feature that turns natural language into shell one-liners for copying\": Producing a copyable one-liner describes the retired extension behavior rather than the current product, which edits files and executes approved commands itself.",
    "src": "https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-cli"
  },
  {
    "id": "w205",
    "d": "D2",
    "v": "2026-11-23",
    "stem": "Wide World Importers wants a single documented installation route for GitHub Copilot CLI across its developer workstations, and plans to use npm so that the route is identical on every platform. Which requirement must that standard account for?",
    "options": [
      "A GitHub Actions runner has to be registered before the command line can authenticate",
      "The retired gh copilot extension must be installed first and then upgraded in place",
      "Docker has to be available so that the command line can start its sandbox container",
      "Node.js version 22 or later is required for the npm installation route to be usable"
    ],
    "answer": [
      3
    ],
    "explain": "GitHub documents Node.js 22 or later as the prerequisite for the npm installation route, alongside alternative routes such as WinGet, Homebrew, and an install script. A standard built on npm has to pin that runtime.\n\nWhy not the others:\n- \"A GitHub Actions runner has to be registered before the command line can authenticate\": Authentication uses a GitHub account through a login flow. Actions runners are unrelated to installing or signing in to a developer tool.\n- \"The retired gh copilot extension must be installed first and then upgraded in place\": The current product is a standalone program installed directly. The earlier gh extension is retired and is not an upgrade path to it.\n- \"Docker has to be available so that the command line can start its sandbox container\": Copilot CLI documents sandboxing options, but a container runtime is not a prerequisite for installing it through npm.",
    "src": "https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli"
  },
  {
    "id": "w206",
    "d": "D2",
    "v": "2026-11-23",
    "stem": "A Blue Yonder Airlines engineer wants GitHub Copilot CLI to produce a structured implementation plan before it edits any file in the scheduling service. Which approach matches current documentation?",
    "options": [
      "Toggle plan mode with Shift+Tab, or run the /plan command from normal mode",
      "Export a COPILOT_PLAN environment variable before starting the CLI session",
      "Add a planning rule to .gitattributes so the CLI reads every file before writing",
      "Open a session and type \"plan first\" so that the agent infers the intent"
    ],
    "answer": [
      0
    ],
    "explain": "GitHub documents two entry points to plan mode: pressing Shift+Tab to toggle between normal mode and plan mode, and running /plan from normal mode. Both are current, and knowing that both exist is the point of the item.\n\nWhy not the others:\n- \"Export a COPILOT_PLAN environment variable before starting the CLI session\": Environment variables configure some behavior, including model selection, but plan mode is not entered through one.\n- \"Add a planning rule to .gitattributes so the CLI reads every file before writing\": .gitattributes controls Git path attributes such as line endings and diff drivers. Copilot CLI does not read it as an instruction.\n- \"Open a session and type \"plan first\" so that the agent infers the intent\": Phrasing a request as a plan may influence the response, but it does not place the session in plan mode. Relying on inference is exactly what the documented toggle and command replace.",
    "src": "https://docs.github.com/en/copilot/how-tos/copilot-cli/cli-best-practices"
  },
  {
    "id": "w207",
    "d": "D2",
    "v": "2026-11-23",
    "stem": "A Proseware developer stops partway through a migration task in GitHub Copilot CLI, closes the terminal, and returns the next morning wanting the earlier conversation and its accumulated context. Which documented action restores that work?",
    "options": [
      "Run the original prompt again so that the agent rebuilds equivalent context",
      "Start the command line in the same directory, which reattaches the last session",
      "Use /resume, which opens a picker for restoring a previously recorded session",
      "Import the session transcript from the repository .github directory by hand"
    ],
    "answer": [
      2
    ],
    "explain": "GitHub documents /resume, and the equivalent continue option at launch, as the way to pick a previous session and restore it. That is the purpose-built mechanism for this situation.\n\nWhy not the others:\n- \"Run the original prompt again so that the agent rebuilds equivalent context\": Re-running a prompt starts a new conversation. It may reach a similar place, but it discards the reasoning, decisions, and file context built up in the earlier session.\n- \"Start the command line in the same directory, which reattaches the last session\": Starting in the same directory sets the working directory and trust scope. It does not automatically reattach a previous conversation.\n- \"Import the session transcript from the repository .github directory by hand\": Sessions are not stored as repository files, and the .github directory holds customization files such as instructions and prompts. There is no transcript there to import.",
    "src": "https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/overview"
  },
  {
    "id": "w208",
    "d": "D2",
    "v": "2026-11-23",
    "stem": "Fourth Coffee wants a nightly job that asks GitHub Copilot CLI to summarize the day's commits and write the summary to a file in the repository, with nobody at the keyboard to approve each step. Which capability supports that requirement?",
    "options": [
      "Interactive mode alone, because the command line always waits for an approval",
      "Programmatic execution with a supplied prompt and scoped tool permissions",
      "A GitHub App webhook that starts the command line inside the repository",
      "Chat cheat sheet slash commands, which can be attached to a schedule"
    ],
    "answer": [
      1
    ],
    "explain": "GitHub documents running Copilot CLI programmatically with a prompt supplied directly, together with flags that allow or deny specific tools. That combination is what makes an unattended, bounded job possible, and scoping the permissions is the part a candidate must not skip.\n\nWhy not the others:\n- \"Interactive mode alone, because the command line always waits for an approval\": Interactive mode is the default and does prompt for approvals, which is why it is unsuitable here. The documentation describes a separate programmatic interface precisely for unattended use.\n- \"A GitHub App webhook that starts the command line inside the repository\": Webhooks deliver events to a listener. They do not themselves run a local agent, and nothing about a webhook addresses approval prompts.\n- \"Chat cheat sheet slash commands, which can be attached to a schedule\": The chat cheat sheet documents interactive slash commands for chat surfaces. Those are not scheduled automation primitives.",
    "src": "https://docs.github.com/en/copilot/how-tos/copilot-cli/automate-copilot-cli/run-cli-programmatically"
  },
  {
    "id": "w209",
    "d": "D2",
    "v": "2026-11-23",
    "stem": "A Contoso team wants Copilot to answer questions using their internal API reference, which is maintained outside the repository and served by an authenticated internal service. Which capability is designed for that requirement?",
    "options": [
      "A repository instructions file that describes the API reference in prose",
      "A prompt file that pastes the reference content into every new request",
      "Agent mode, which indexes external services automatically once enabled",
      "An MCP server, which exposes an external tool or data source to Copilot"
    ],
    "answer": [
      3
    ],
    "explain": "Model Context Protocol is the documented way to connect an external tool or data source so that Copilot can retrieve from it, with the trust and permission boundary made explicit. That is exactly this requirement.\n\nWhy not the others:\n- \"A repository instructions file that describes the API reference in prose\": Instructions files carry durable project guidance and conventions. Describing a reference is not the same as retrieving its current contents.\n- \"A prompt file that pastes the reference content into every new request\": A prompt file captures a reusable request. Embedding a copy of the reference would go stale immediately and would not scale to a full API surface.\n- \"Agent mode, which indexes external services automatically once enabled\": Agent mode coordinates edits and tool use inside a workspace. It does not discover or index authenticated external services on its own.",
    "src": "https://docs.github.com/en/copilot/concepts/customizations/mcp"
  },
  {
    "id": "w210",
    "d": "D2",
    "v": "2026-11-23",
    "stem": "A Northwind Traders developer is midway through a large refactor and needs a bounded research task carried out without filling the main conversation with everything that task has to read. Which mechanism fits the requirement?",
    "options": [
      "A subagent, which handles the delegated task separately and returns a result",
      "A new session, which begins a fresh conversation and sets aside the refactor",
      "A second editor window, which duplicates the workspace and its chat history",
      "A pull request comment, which asks the cloud agent to reply inside the thread"
    ],
    "answer": [
      0
    ],
    "explain": "A subagent takes a delegated task with its own separate context and reports back a result. That is the documented mechanism for optimizing context usage, and it leaves the main conversation focused on the refactor.\n\nWhy not the others:\n- \"A new session, which begins a fresh conversation and sets aside the refactor\": Starting a new session does produce a clean context, but it abandons the refactor conversation rather than delegating a piece of work out of it. The developer wants both to continue.\n- \"A second editor window, which duplicates the workspace and its chat history\": Opening another window duplicates the view, not the context boundary. Two sessions in one checkout can also edit the same files, which introduces a conflict risk rather than solving a context problem.\n- \"A pull request comment, which asks the cloud agent to reply inside the thread\": The cloud agent prepares repository work for review and is a reasonable delegation route for a change. It is not the mechanism for keeping research out of an in-editor conversation.",
    "src": "https://docs.github.com/en/copilot/reference/customization-cheat-sheet"
  },
  {
    "id": "w211",
    "d": "D2",
    "v": "2026-11-23",
    "stem": "WoodGrove Bank wants Copilot code review to apply the same naming and error-handling standards on every pull request, without a human reviewer restating those standards each time. Which artifact carries them?",
    "options": [
      "A prompt file that a reviewer selects by hand at the start of every review",
      "A branch ruleset that rejects a pull request when a standard is not followed",
      "A custom instructions file that supplies repository-wide review guidance",
      "A Copilot Space that holds the team's published engineering handbook"
    ],
    "answer": [
      2
    ],
    "explain": "GitHub documents custom instructions as the way to give Copilot code review repository-wide standards, with path-specific files available when a rule should apply only to part of the tree. That is durable guidance applied without a manual step.\n\nWhy not the others:\n- \"A prompt file that a reviewer selects by hand at the start of every review\": Prompt files are invoked deliberately for a task. The requirement is guidance that applies automatically, which is the opposite of a manual selection.\n- \"A branch ruleset that rejects a pull request when a standard is not followed\": Rulesets enforce process conditions such as required checks and approvals. They gate a merge; they do not tell a reviewer what to look for.\n- \"A Copilot Space that holds the team's published engineering handbook\": A Space curates sources for grounded questions. It is a useful home for a handbook, but it does not attach standards to the review of each pull request.",
    "src": "https://docs.github.com/en/copilot/tutorials/customize-code-review"
  },
  {
    "id": "w212",
    "d": "D2",
    "v": "2026-11-23",
    "stem": "An Adventure Works enablement lead wants to assemble a curated set of repositories, documents, and notes about the billing domain so that any team member can ask questions grounded in that specific material. Which capability is intended for this?",
    "options": [
      "GitHub Spark, which builds a deployable application from a natural-language brief",
      "Copilot Spaces, which organize chosen sources so that answers are grounded in them",
      "A pull request summary, which describes a change using evidence drawn from the diff",
      "Agent sessions, which maintain separate conversation histories for separate tasks"
    ],
    "answer": [
      1
    ],
    "explain": "Copilot Spaces are documented as a way to gather repositories, files, and free-text knowledge into a shared context that questions are answered against. Grounding answers in a chosen set of sources is the defining purpose.\n\nWhy not the others:\n- \"GitHub Spark, which builds a deployable application from a natural-language brief\": Spark creates applications from natural language. It is worth recognizing by name for the exam, but it builds software rather than curating reference material.\n- \"A pull request summary, which describes a change using evidence drawn from the diff\": A pull request summary describes one change set. It is scoped to a single pull request rather than to a domain of reference material.\n- \"Agent sessions, which maintain separate conversation histories for separate tasks\": Sessions separate conversations. They keep work apart rather than assembling a body of shared source material for a team.",
    "src": "https://docs.github.com/en/copilot/concepts/prompting-and-context/spaces"
  },
  {
    "id": "w213",
    "d": "D2",
    "v": "2026-11-23",
    "stem": "Tailwind Traders developers type the same multi-step release-check request into Chat every week, and the wording drifts between people, so the responses vary. The team wants one invocable task that produces a consistent response. Which artifact fits?",
    "options": [
      "A prompt file in the repository, which developers invoke as a named task",
      "An instructions file, which applies to requests automatically as guidance",
      "A chat variable, which references a file at the moment a question is asked",
      "A custom agent definition, which selects the model used for each request"
    ],
    "answer": [
      0
    ],
    "explain": "A prompt file stores a reusable task that a developer deliberately invokes, which is what makes the request identical every time it runs. GitHub positions prompt files for exactly this consistency problem.\n\nWhy not the others:\n- \"An instructions file, which applies to requests automatically as guidance\": Instructions files supply persistent conventions that shape many different requests. They are context rather than an invocable task, so they cannot make one specific multi-step request repeatable.\n- \"A chat variable, which references a file at the moment a question is asked\": Chat variables attach a file or selection to a single question. They control what a request sees rather than what the request says.\n- \"A custom agent definition, which selects the model used for each request\": A custom agent defines a role, instructions, and available tools. It shapes how an agent works rather than packaging one named task.",
    "src": "https://docs.github.com/en/copilot/reference/customization-cheat-sheet"
  },
  {
    "id": "w214",
    "d": "D2",
    "v": "2026-11-23",
    "stem": "A Fabrikam organization owner wants to control which Copilot features are available to organization members and whether suggestions matching public code are permitted. Where is that configured?",
    "options": [
      "In a managed settings JSON file on the default branch of a designated repository",
      "In each member's personal account settings, which the organization then inherits",
      "In a repository ruleset attached to the organization's branch protection rules",
      "In the organization's Copilot settings, under the Policies and Models sections"
    ],
    "answer": [
      3
    ],
    "explain": "GitHub documents organization Copilot settings with a Policies area for privacy and feature availability and a Models area for model availability, each with an enforcement selection. That is the correct level for this requirement.\n\nWhy not the others:\n- \"In a managed settings JSON file on the default branch of a designated repository\": Enterprise managed settings are a real mechanism and do use a file on a default branch, but they are an enterprise-level control with a different owner. Confusing the two levels is the trap this item tests.\n- \"In each member's personal account settings, which the organization then inherits\": Personal settings let an individually paying user control some options. When a seat comes from an organization, the relevant toggle reflects the organization's policy rather than the other way round.\n- \"In a repository ruleset attached to the organization's branch protection rules\": Rulesets govern branches and merges. They have nothing to do with Copilot feature availability.",
    "src": "https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies"
  },
  {
    "id": "w215",
    "d": "D2",
    "v": "2026-11-23",
    "stem": "Alpine Ski House wants Copilot to review every pull request that targets the release branch automatically, without a reviewer requesting the review each time. Which combination achieves that?",
    "options": [
      "A prompt file that the first human reviewer invokes on each pull request",
      "The Copilot code review policy, plus a ruleset that requests the review",
      "A scheduled workflow that posts a review as a pull request comment",
      "A content exclusion policy limiting which files the reviewer may read"
    ],
    "answer": [
      1
    ],
    "explain": "The policy makes Copilot code review available, and a branch ruleset is what requests the review automatically for pull requests targeting a chosen branch. Both halves are needed, which is why the combination is the answer.\n\nWhy not the others:\n- \"A prompt file that the first human reviewer invokes on each pull request\": A prompt file still requires a person to invoke it, which is the manual step the team wants removed.\n- \"A scheduled workflow that posts a review as a pull request comment\": A workflow could post text, but it would not be a Copilot code review, and building one duplicates a supported feature badly.\n- \"A content exclusion policy limiting which files the reviewer may read\": Content exclusion restricts what Copilot may use as context. It is a privacy control and does nothing to trigger a review.",
    "src": "https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/configure-code-review"
  },
  {
    "id": "w216",
    "d": "D2",
    "v": "2026-11-23",
    "stem": "A Coho Winery administrator has to determine who changed the organization's Copilot content exclusion settings and when that change took effect. Which source provides that record?",
    "options": [
      "The Copilot usage metrics report, filtered to the day the change occurred",
      "The commit history of the .github directory on the repository default branch",
      "The audit log, which records Copilot administrative events and the actor",
      "The billing statement, which lists configuration changes beside seat charges"
    ],
    "answer": [
      2
    ],
    "explain": "GitHub documents audit log events for Copilot, including an event recorded when content exclusion settings change, with the actor and timestamp. Searching the audit log is the documented investigation route.\n\nWhy not the others:\n- \"The Copilot usage metrics report, filtered to the day the change occurred\": Usage metrics report aggregate activity such as suggestions and acceptance. They are deliberately not an administrative change record, and they do not identify an actor.\n- \"The commit history of the .github directory on the repository default branch\": Content exclusion configured at organization scope is a settings change, not a file commit. A repository-scoped exclusion file would show in history, but the question describes the organization setting.\n- \"The billing statement, which lists configuration changes beside seat charges\": Billing records seat assignment and charges. It carries no record of policy configuration.",
    "src": "https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/review-changes"
  },
  {
    "id": "w217",
    "d": "D2",
    "v": "2026-11-23",
    "stem": "Proseware wants to assign and remove Copilot seats automatically as employees join and leave, driven by the identity system it already operates. Which approach matches documented support?",
    "options": [
      "A webhook that assigns a seat automatically when a user accepts an invitation",
      "A workflow that edits the organization's billing settings file in a repository",
      "A nightly export from the audit log that reconciles seat counts after the fact",
      "The Copilot user management REST API, called with an appropriately scoped token"
    ],
    "answer": [
      3
    ],
    "explain": "GitHub publishes REST endpoints for Copilot user management, including adding and removing seats for selected users or teams, with documented token scopes. Driving those endpoints from the identity system is the supported automation route.\n\nWhy not the others:\n- \"A webhook that assigns a seat automatically when a user accepts an invitation\": Webhooks notify a listener that something happened. A notification still needs something to act on it, and membership is not the same as a Copilot seat.\n- \"A workflow that edits the organization's billing settings file in a repository\": Billing settings are not stored as a repository file that a workflow can edit. This describes a mechanism that does not exist.\n- \"A nightly export from the audit log that reconciles seat counts after the fact\": The audit log records what already happened. Reconciling after the fact reports drift rather than preventing it, and it cannot assign a seat.",
    "src": "https://docs.github.com/en/rest/copilot/copilot-user-management"
  },
  {
    "id": "w301",
    "d": "D3",
    "v": "2026-11-23",
    "stem": "A Wide World Importers architect is documenting how a Copilot request travels from the editor to a suggestion. According to the documented inbound flow, what happens after the prompt is assembled from the developer request and the gathered context?",
    "options": [
      "The prompt is cached so that identical later requests can skip the model entirely",
      "The prompt passes to a proxy server in a GitHub-owned Azure tenant, which filters it",
      "The prompt is rewritten into a standardized template before any filtering is applied",
      "The prompt is sent to several models and the highest-scoring response is returned"
    ],
    "answer": [
      1
    ],
    "explain": "The documented flow states that once context is gathered and the prompt is built, it passes securely to a proxy server hosted in a GitHub-owned Microsoft Azure tenant, where traffic is filtered to block attempts to manipulate the prompt or extract details about how suggestions are generated.\n\nWhy not the others:\n- \"The prompt is cached so that identical later requests can skip the model entirely\": No documented caching layer returns a stored suggestion in place of generation. Context differs between requests even when the typed text looks similar.\n- \"The prompt is rewritten into a standardized template before any filtering is applied\": Prompt building happens before this point and is shaped by the request and context, not by a fixed template applied at the proxy.\n- \"The prompt is sent to several models and the highest-scoring response is returned\": A model is selected for a request. Fanning a prompt out across models and scoring the results is not part of the documented flow.",
    "src": "https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/3-github-copilot-user-prompt-process-flow"
  },
  {
    "id": "w302",
    "d": "D3",
    "v": "2026-11-23",
    "stem": "Blue Yonder Airlines wants to document what happens to a model response before it reaches the developer as a suggestion. Which activity takes place during post-processing?",
    "options": [
      "The response is re-ranked against suggestions the developer accepted previously",
      "The response is added to the repository index to improve later retrieval quality",
      "The response is translated into the dominant programming language of the repository",
      "The response is checked for code quality concerns and optionally for public code matches"
    ],
    "answer": [
      3
    ],
    "explain": "The documented outbound flow applies a final layer of checks at the proxy server, covering code quality concerns such as common vulnerability patterns, and, when the administrator has enabled the filter, comparison against matching public code. A response that fails these checks is truncated or discarded.\n\nWhy not the others:\n- \"The response is re-ranked against suggestions the developer accepted previously\": Acceptance and rejection inform a feedback loop over time, but no documented step re-ranks a specific response against an individual developer's history before delivery.\n- \"The response is added to the repository index to improve later retrieval quality\": The repository index supports context retrieval. Responses are not written into it as part of returning a suggestion.\n- \"The response is translated into the dominant programming language of the repository\": Language selection is determined by the file and the request, not by a post-processing translation step.",
    "src": "https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/3-github-copilot-user-prompt-process-flow"
  },
  {
    "id": "w303",
    "d": "D3",
    "v": "2026-11-23",
    "stem": "A Fabrikam developer is surprised that a Copilot completion correctly uses a helper function defined in a different file that happens to be open in another editor tab. Which part of input processing best explains this?",
    "options": [
      "Context gathering can include open tabs, file details, and code around the cursor",
      "The model retains every file from the developer's previous editing sessions",
      "The repository index is rebuilt on every keystroke and sent with each prompt",
      "Completions are generated from the repository default branch rather than local files"
    ],
    "answer": [
      0
    ],
    "explain": "The documented inbound flow gathers code before and after the cursor, the file name and type, information about adjacent open tabs, project structure, and the languages and frameworks in use. An open tab is one of the named context sources, which is why the helper was available.\n\nWhy not the others:\n- \"The model retains every file from the developer's previous editing sessions\": A model does not carry state between sessions. Anything it appears to remember arrived as context with the current request.\n- \"The repository index is rebuilt on every keystroke and sent with each prompt\": Repository indexing exists to support retrieval, but it is not rebuilt per keystroke, and that is not the mechanism behind an adjacent-tab completion.\n- \"Completions are generated from the repository default branch rather than local files\": Completions reflect the working state in the editor. Generating from the default branch would make uncommitted local work invisible, which is not the observed behavior.",
    "src": "https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/3-github-copilot-user-prompt-process-flow"
  },
  {
    "id": "w304",
    "d": "D3",
    "v": "2026-11-23",
    "stem": "Contoso is mapping which safeguards act on a prompt and which act on a response. In the documented flow, where does filtering for harmful content and personal data take place?",
    "options": [
      "Only on the response, immediately before the suggestion is shown to the developer",
      "Only on the prompt, immediately after the developer accepts a suggestion in an editor",
      "On the prompt before generation, and again on the response after generation occurs",
      "On neither, because filtering runs inside the editor extension before transmission"
    ],
    "answer": [
      2
    ],
    "explain": "The documented flow applies content filtering on the way in, covering hate speech, offensive content, and personal data before intent extraction and generation, and then filters again on the way out before the proxy applies its final checks. Filtering acts on both sides.\n\nWhy not the others:\n- \"Only on the response, immediately before the suggestion is shown to the developer\": Outbound filtering is real, but treating it as the only pass misses the inbound toxicity filtering stage that runs before the model receives the prompt.\n- \"Only on the prompt, immediately after the developer accepts a suggestion in an editor\": Acceptance happens at the end of the flow, so nothing about it can filter a prompt. The ordering in this option is impossible.\n- \"On neither, because filtering runs inside the editor extension before transmission\": Filtering happens in GitHub-operated services rather than locally in the extension. A client-side-only model would place the safeguard where a user could disable it.",
    "src": "https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/3-github-copilot-user-prompt-process-flow",
    "quote": "Copilot incorporates content filtering mechanisms before proceeding with intent extraction and code generation"
  },
  {
    "id": "w305",
    "d": "D3",
    "v": "2026-11-23",
    "stem": "A Northwind Traders trainer is drawing the code suggestion lifecycle for a new team. Which ordering matches the documented flow?",
    "options": [
      "Prompt assembly, model generation, proxy filtering, post-processing, delivery",
      "Proxy filtering, prompt assembly, post-processing, model generation, delivery",
      "Prompt assembly, post-processing, proxy filtering, model generation, delivery",
      "Prompt assembly, proxy filtering, model generation, post-processing, delivery"
    ],
    "answer": [
      3
    ],
    "explain": "The documented order is context gathering and prompt assembly, the proxy filter, toxicity filtering, model generation, post-processing and response validation, then delivery to the developer with a feedback loop. This option preserves that sequence.\n\nWhy not the others:\n- \"Prompt assembly, model generation, proxy filtering, post-processing, delivery\": This places the proxy after generation. The proxy screens the prompt on the way in, before the model sees it, and then applies checks again on the way out.\n- \"Proxy filtering, prompt assembly, post-processing, model generation, delivery\": Filtering cannot precede prompt assembly, because there is no prompt to filter yet. Context gathering and prompt building come first.\n- \"Prompt assembly, post-processing, proxy filtering, model generation, delivery\": Post-processing acts on a response, so it cannot occur before generation. This ordering inverts the outbound half of the flow.",
    "src": "https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/3-github-copilot-user-prompt-process-flow"
  },
  {
    "id": "w306",
    "d": "D3",
    "v": "2026-11-23",
    "stem": "A WoodGrove Bank compliance reviewer asks a single question before approving a pilot: does GitHub retain Copilot prompts? What is the most accurate response to give?",
    "options": [
      "Retention differs by feature and surface, so current documentation must be checked",
      "Every prompt is retained for the life of the organization's Copilot subscription",
      "No prompt is ever retained, because each request is discarded after generation",
      "Retention is governed entirely by the content exclusion policy for the repository"
    ],
    "answer": [
      0
    ],
    "explain": "Data handling is documented per feature and per surface, and it differs between code completions and chat, and between working inside an editor and working on GitHub. The defensible answer is to name the surface and check the current trust documentation rather than to state one universal rule.\n\nWhy not the others:\n- \"Every prompt is retained for the life of the organization's Copilot subscription\": A blanket retention claim overstates what the documentation says and would fail a review for the same reason a blanket denial would.\n- \"No prompt is ever retained, because each request is discarded after generation\": A blanket denial is equally wrong. Some interactions are documented as retained for a period, so this answer cannot be defended.\n- \"Retention is governed entirely by the content exclusion policy for the repository\": Content exclusion controls what may be used as context on supported surfaces. It is a different control from data retention and does not govern it.",
    "src": "https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/4-github-copilot-data"
  },
  {
    "id": "w307",
    "d": "D3",
    "v": "2026-11-23",
    "stem": "A Tailwind Traders developer attaches a large folder to a long-running Chat conversation and notices that details discussed early on stop influencing later answers. Which limitation best explains this behavior?",
    "options": [
      "Chat discards all attachments once a conversation exceeds ten exchanges",
      "Chat prioritizes the repository default branch over any attached local file",
      "A context window is finite, so not everything supplied remains in view",
      "Chat requires a brand new session before any attachment takes effect"
    ],
    "answer": [
      2
    ],
    "explain": "A model processes a bounded amount of context per request. As a conversation and its attachments grow past that bound, earlier material is summarized or displaced, which is why a focused session or a deliberate compaction restores relevance.\n\nWhy not the others:\n- \"Chat discards all attachments once a conversation exceeds ten exchanges\": No fixed exchange count triggers discarding attachments. A specific threshold like this is the kind of invented rule that reads plausibly and is not documented.\n- \"Chat prioritizes the repository default branch over any attached local file\": Attached context is used for the request. There is no rule that a default branch outranks a file the developer explicitly supplied.\n- \"Chat requires a brand new session before any attachment takes effect\": Attachments take effect on the request they accompany. Starting a fresh session is a useful remedy for accumulated clutter, but it is not a precondition.",
    "src": "https://docs.github.com/en/copilot/concepts/prompting-and-context/context-management"
  },
  {
    "id": "w308",
    "d": "D3",
    "v": "2026-11-23",
    "stem": "An Adventure Works architect observes that some Copilot models are hosted by external providers rather than by GitHub, and asks whether selecting such a model bypasses GitHub content filtering. Which statement is accurate?",
    "options": [
      "Selecting an externally hosted model removes GitHub filtering from the request path",
      "Inputs and outputs continue to pass through Copilot content filtering in either case",
      "Filtering applies only to models hosted inside GitHub's own Azure tenant environment",
      "Filtering is disabled automatically whenever an organization permits a custom model"
    ],
    "answer": [
      1
    ],
    "explain": "GitHub documents which provider hosts each model together with the data commitments that apply, and confirms that inputs and outputs still pass through Copilot content filtering. The safeguard is a property of the Copilot pipeline rather than of the host.\n\nWhy not the others:\n- \"Selecting an externally hosted model removes GitHub filtering from the request path\": This is the intuitive but incorrect reading. Hosting describes where inference runs; it does not remove the surrounding request pipeline.\n- \"Filtering applies only to models hosted inside GitHub's own Azure tenant environment\": Restricting filtering to GitHub-hosted models would create a gap that the documentation explicitly closes.\n- \"Filtering is disabled automatically whenever an organization permits a custom model\": Model availability is an administrative policy decision. Permitting additional models does not switch off filtering.",
    "src": "https://docs.github.com/en/copilot/reference/ai-models/model-hosting",
    "quote": "All input requests and output responses processed by GitHub Copilot's models continue to pass through GitHub Copilot's, content filtering systems."
  },
  {
    "id": "w401",
    "d": "D4",
    "v": "2026-11-23",
    "stem": "A Coho Winery developer asks Copilot to generate distribution report titles and receives inconsistent formatting. The developer revises the request to include three correctly formatted titles as examples of what is wanted. What has the request become?",
    "options": [
      "A zero-shot request, because no system-level instruction was supplied with it",
      "A chain-of-thought request, because intermediate reasoning steps are now shown",
      "A few-shot request, because worked examples demonstrate the intended pattern",
      "A retrieval request, because reference material is now attached to the prompt"
    ],
    "answer": [
      2
    ],
    "explain": "Few-shot prompting supplies a small number of worked examples so that the model can infer the pattern rather than guess at it. Three formatted titles is the textbook case, and it is the standard fix for inconsistent output shape.\n\nWhy not the others:\n- \"A zero-shot request, because no system-level instruction was supplied with it\": Zero-shot describes a request that supplies no worked example. Adding three examples is precisely what moves a request out of that category, and the presence or absence of a system instruction is a different axis.\n- \"A chain-of-thought request, because intermediate reasoning steps are now shown\": Chain-of-thought prompting asks a model to show its reasoning steps. Supplying examples of a finished output format is not the same technique.\n- \"A retrieval request, because reference material is now attached to the prompt\": Retrieval brings in external documents or tool results as evidence. Examples authored inside the prompt are not retrieved material.",
    "src": "https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/2-prompt-engineering-foundations-best-practices"
  },
  {
    "id": "w402",
    "d": "D4",
    "v": "2026-11-23",
    "stem": "A Fourth Coffee developer types \"make the scheduling code better\" and receives a sprawling rewrite that touches files nobody intended to change. Which revision best applies documented prompt structure?",
    "options": [
      "State the goal, name the relevant files, set a constraint, and define the check",
      "Repeat the same request three times so the model weights the intent more heavily",
      "Ask for the longest response available so that no requirement can be overlooked",
      "Switch to a larger model and submit exactly the same wording a second time"
    ],
    "answer": [
      0
    ],
    "explain": "A well-formed request supplies a goal, the relevant context, a constraint that bounds the change, and an observable way to tell whether the result is acceptable. Each element removes one assumption the model would otherwise make for itself.\n\nWhy not the others:\n- \"Repeat the same request three times so the model weights the intent more heavily\": Repetition adds tokens without adding information. It does not tell the model which files matter or what \"better\" means here.\n- \"Ask for the longest response available so that no requirement can be overlooked\": Length is not a proxy for correctness. A longer answer to an underspecified request is a longer guess.\n- \"Switch to a larger model and submit exactly the same wording a second time\": A more capable model given the same vague request still has to invent the missing requirements. Model choice does not substitute for specification.",
    "src": "https://docs.github.com/en/copilot/concepts/prompting-and-context/prompt-engineering"
  },
  {
    "id": "w403",
    "d": "D4",
    "v": "2026-11-23",
    "stem": "A Proseware developer needs confidence that Copilot actually considered a specific interface definition when answering a question about a contract change. What is the most reliable approach?",
    "options": [
      "Open the file in a background tab and rely on adjacent tabs always being read",
      "Name the file in prose and assume the name resolves to the file contents",
      "Rely on repository indexing, which guarantees every file is read per request",
      "Attach the file as explicit context, then inspect which references were used"
    ],
    "answer": [
      3
    ],
    "explain": "Supplying the file explicitly is the one mechanism that puts its contents in the request deliberately, and checking the references reported with the answer is how the developer confirms what was actually used. Explicit context plus verification is the defensible practice.\n\nWhy not the others:\n- \"Open the file in a background tab and rely on adjacent tabs always being read\": Open tabs can contribute to context, but contribution is not a guarantee for any particular file. Relying on it is exactly the assumption that produces confidently wrong answers.\n- \"Name the file in prose and assume the name resolves to the file contents\": Mentioning a name puts a string in the prompt. It does not attach the contents of the file behind that name.\n- \"Rely on repository indexing, which guarantees every file is read per request\": Indexing supports retrieval of likely-relevant material. It does not load an entire repository into every request, and a context window would not accommodate that.",
    "src": "https://code.visualstudio.com/docs/agents/concepts/context"
  },
  {
    "id": "w404",
    "d": "D4",
    "v": "2026-11-23",
    "stem": "Contoso is writing internal guidance on prompt crafting for Copilot Chat and wants it to match GitHub's published advice. Which sequence should the guidance recommend?",
    "options": [
      "Begin with edge cases, then broaden to the general goal at the very end",
      "Begin with the general goal, add specifics, and break complex tasks apart",
      "Begin with the output format and omit the goal so results stay unbiased",
      "Begin with the largest available context and narrow only after a failure"
    ],
    "answer": [
      1
    ],
    "explain": "GitHub advises starting general and then getting specific, supplying examples, breaking a complex task into smaller ones, and iterating. That ordering gives the model the frame first and the detail second.\n\nWhy not the others:\n- \"Begin with edge cases, then broaden to the general goal at the very end\": Leading with edge cases gives the model exceptions before it knows the rule. The general goal is what makes the exceptions interpretable.\n- \"Begin with the output format and omit the goal so results stay unbiased\": Omitting the goal does not remove bias; it removes information. The model then infers a goal, which is a worse outcome than stating one.\n- \"Begin with the largest available context and narrow only after a failure\": Loading maximum context first crowds the window with irrelevant material and makes the important parts harder to weigh. Relevance beats volume.",
    "src": "https://docs.github.com/en/copilot/concepts/prompting-and-context/prompt-engineering"
  },
  {
    "id": "w405",
    "d": "D4",
    "v": "2026-11-23",
    "stem": "An Alpine Ski House developer notices that Chat answers about a booking defect keep drifting toward an unrelated payment refactor that was discussed earlier in the same long thread. Which action best addresses this?",
    "options": [
      "Start a new conversation so that unrelated history stops shaping responses",
      "Attach more files so the correct topic outweighs the earlier discussion",
      "Repeat the question without changes until the responses converge on it",
      "Change models, because history handling is a property of the model alone"
    ],
    "answer": [
      0
    ],
    "explain": "Copilot Chat uses conversation history as context, which helps while a thread stays on one topic and hurts once unrelated material accumulates. Starting a fresh conversation for an unrelated task is the documented remedy, and compacting a thread serves the same purpose.\n\nWhy not the others:\n- \"Attach more files so the correct topic outweighs the earlier discussion\": Adding files enlarges the request without removing the misleading history. The competing topic is still present and still weighed.\n- \"Repeat the question without changes until the responses converge on it\": Repetition inside the same polluted thread reinforces the existing context rather than clearing it.\n- \"Change models, because history handling is a property of the model alone\": History is supplied with the request by the client, so changing the model does not change what history is sent.",
    "src": "https://docs.github.com/en/copilot/concepts/prompting-and-context/prompt-engineering"
  },
  {
    "id": "w406",
    "d": "D4",
    "v": "2026-11-23",
    "stem": "A Wide World Importers developer receives a response that is nearly right but omits a required validation rule for purchase order totals. According to documented prompt engineering practice, what is the recommended next move?",
    "options": [
      "Accept the response now and add the validation rule in a separate later commit",
      "Discard the conversation and begin again with completely different wording",
      "Iterate on the request, naming the missing rule and the evidence required",
      "Escalate to agent mode so that the omission is corrected without more input"
    ],
    "answer": [
      2
    ],
    "explain": "Prompting is documented as an iterative activity: review what came back, state precisely what is missing, and say how success will be checked. That is the smallest correction that uses the work already done.\n\nWhy not the others:\n- \"Accept the response now and add the validation rule in a separate later commit\": Deferring a known gap ships an incomplete change and relies on memory to close it. The gap is known right now, which is the cheapest moment to fix it.\n- \"Discard the conversation and begin again with completely different wording\": Starting over discards the parts that were already correct. Nothing about the situation suggests the whole framing was wrong.\n- \"Escalate to agent mode so that the omission is corrected without more input\": Agent mode changes how work is carried out, not whether the requirement was stated. An unstated rule stays unstated on any surface.",
    "src": "https://docs.github.com/en/copilot/concepts/prompting-and-context/prompt-engineering"
  },
  {
    "id": "w407",
    "d": "D4",
    "v": "2026-11-23",
    "stem": "An Adventure Works developer asks how Copilot decides which code informs a Chat answer about a service module. Which description is accurate?",
    "options": [
      "Only files the developer edited during the current session are considered",
      "Implicit context and explicitly supplied references both inform a request",
      "Only the file containing the cursor is considered, and others are ignored",
      "Every file in the repository is loaded for every request, without selection"
    ],
    "answer": [
      1
    ],
    "explain": "Context arrives two ways: implicitly, from the active editor, open tabs, workspace information, and retrieval, and explicitly, when the developer attaches a file, folder, selection, or tool result. Both paths contribute, which is why explicit attachment is the reliable one.\n\nWhy not the others:\n- \"Only files the developer edited during the current session are considered\": Edit history within a session is not the selection rule, and a file the developer has never touched can still be highly relevant.\n- \"Only the file containing the cursor is considered, and others are ignored\": Restricting context to the current file would make cross-file explanation impossible, and Copilot routinely answers across files.\n- \"Every file in the repository is loaded for every request, without selection\": Loading an entire repository per request is neither possible within a context window nor how retrieval works.",
    "src": "https://code.visualstudio.com/docs/agents/concepts/context"
  },
  {
    "id": "w408",
    "d": "D4",
    "v": "2026-11-23",
    "stem": "A Fabrikam developer asks Copilot to write a currency conversion function from a single sentence of description, supplying no sample inputs and no sample outputs. How is this request classified?",
    "options": [
      "Few-shot, because the descriptive sentence itself serves as one example",
      "Role prompting, because a professional persona is implied by the request",
      "Retrieval-augmented, because repository context is attached to a request",
      "Zero-shot, because the request supplies no demonstration of the pattern"
    ],
    "answer": [
      3
    ],
    "explain": "Zero-shot means the model is asked to perform the task with no worked example to pattern-match against. That is exactly this request, and it is the default state of most everyday prompts.\n\nWhy not the others:\n- \"Few-shot, because the descriptive sentence itself serves as one example\": A description of what is wanted is not a worked example of the output. Few-shot requires demonstrations, not instructions.\n- \"Role prompting, because a professional persona is implied by the request\": Role prompting assigns a persona or expertise to shape tone and depth. Nothing here assigns a role, and doing so would not change the shot classification.\n- \"Retrieval-augmented, because repository context is attached to a request\": Retrieval-augmented describes supplying retrieved external evidence. Ordinary editor context does not make a request retrieval-augmented.",
    "src": "https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/2-prompt-engineering-foundations-best-practices"
  },
  {
    "id": "w501",
    "d": "D5",
    "v": "2026-11-23",
    "stem": "Northwind Traders wants Copilot to refactor a 900-line order pricing module that currently has no automated tests. What should the team do first?",
    "options": [
      "Ask for the refactor and document the reasoning in the pull request description",
      "Establish tests that capture current behavior, then refactor against that net",
      "Split the module into smaller files so that each one fits a context window",
      "Turn on agent mode so the refactor and its verification happen in one pass"
    ],
    "answer": [
      1
    ],
    "explain": "A refactor is defined as changing structure while preserving behavior, so it needs a way to detect changed behavior. Characterization tests written against the current module supply that, and they are useful whether or not Copilot does the refactoring.\n\nWhy not the others:\n- \"Ask for the refactor and document the reasoning in the pull request description\": A description records intent. It provides no way to detect that the refactor silently changed a pricing outcome, which is the risk that matters here.\n- \"Split the module into smaller files so that each one fits a context window\": Splitting the file is itself a refactor, performed with the same missing safety net. It moves the risk earlier rather than reducing it.\n- \"Turn on agent mode so the refactor and its verification happen in one pass\": Agent mode can run tests as part of its loop, but it cannot run tests that do not exist. Automation does not substitute for the missing oracle.",
    "src": "https://docs.github.com/en/copilot/tutorials/reduce-technical-debt"
  },
  {
    "id": "w502",
    "d": "D5",
    "v": "2026-11-23",
    "stem": "Tailwind Traders needs realistic customer records to exercise a new returns workflow in a staging environment. Which approach matches responsible documented practice?",
    "options": [
      "Copy a recent slice of the production customer table into the staging database",
      "Export real records and replace only the surname column with random strings",
      "Retrieve comparable records from a public dataset of real customer profiles",
      "Generate fictional records that satisfy the schema and its stated constraints"
    ],
    "answer": [
      3
    ],
    "explain": "Generating fictional records that match the schema, the field constraints, and the realistic shape of the data exercises the workflow without handling anyone's personal information. This is the documented use of Copilot for sample data.\n\nWhy not the others:\n- \"Copy a recent slice of the production customer table into the staging database\": Copying production records moves real personal data into an environment with weaker controls. Convenience does not change the data protection obligation.\n- \"Export real records and replace only the surname column with random strings\": Replacing one field leaves the rest of the record identifying. Partial masking is a common and inadequate approach, which is what makes it a plausible wrong answer.\n- \"Retrieve comparable records from a public dataset of real customer profiles\": Public data about real people is still data about real people, and its licensing and provenance add a second problem on top of the privacy one.",
    "src": "https://learn.microsoft.com/en-us/training/modules/developer-use-cases-for-ai-with-github-copilot/2-boost-developer-productivity",
    "quote": "Sample data creation: When testing, GitHub Copilot can generate realistic sample data, saving time on manual data creation."
  },
  {
    "id": "w503",
    "d": "D5",
    "v": "2026-11-23",
    "stem": "A WoodGrove Bank developer asks Copilot to document a settlement function. The generated summary reads well but describes a rounding behavior the function does not actually implement. What does this indicate about generated documentation?",
    "options": [
      "Documentation must be verified against the implementation before it is published",
      "Documentation should be generated only after a function has shipped to production",
      "Documentation generation requires a dedicated MCP server to produce accuracy",
      "Documentation is dependable whenever the function already passes existing tests"
    ],
    "answer": [
      0
    ],
    "explain": "Generated documentation is a proposal about behavior, and a fluent description can state something the code does not do. Reading the summary against the implementation is the check, and inaccurate documentation is more damaging than none because readers trust it.\n\nWhy not the others:\n- \"Documentation should be generated only after a function has shipped to production\": Timing is not the issue. The same mismatch would appear after release, with more people relying on it.\n- \"Documentation generation requires a dedicated MCP server to produce accuracy\": An MCP server supplies external context. It does not guarantee that a description of local code is faithful.\n- \"Documentation is dependable whenever the function already passes existing tests\": Passing tests establish the behaviors those tests exercise. A rounding rule that no test covers can be both undocumented in reality and confidently described in prose.",
    "src": "https://docs.github.com/en/copilot/tutorials/review-ai-generated-code"
  },
  {
    "id": "w504",
    "d": "D5",
    "v": "2026-11-23",
    "stem": "A Blue Yonder Airlines developer who is new to the codebase spends most of a day moving between a wiki, a ticket system, and unfamiliar source files trying to understand a scheduling service. Which documented benefit applies most directly?",
    "options": [
      "Copilot removes the need to read the service source code at all",
      "Copilot guarantees that the wiki and the source code stay consistent",
      "Copilot explains unfamiliar code in place, reducing context switching",
      "Copilot replaces onboarding documentation with generated equivalents"
    ],
    "answer": [
      2
    ],
    "explain": "Explaining unfamiliar code where the developer is already working is the documented productivity benefit, and reducing context switching is named explicitly in the objectives. Staying in one place while building understanding is the gain.\n\nWhy not the others:\n- \"Copilot removes the need to read the service source code at all\": Explanation supports reading the code; it does not replace it. A developer who never reads the source cannot validate what the explanation claims.\n- \"Copilot guarantees that the wiki and the source code stay consistent\": Nothing about Copilot keeps a wiki synchronized with an implementation. Documentation drift is an organizational problem.\n- \"Copilot replaces onboarding documentation with generated equivalents\": Generated explanations are a supplement to onboarding material, not a replacement, and treating them as authoritative reintroduces the validation problem.",
    "src": "https://learn.microsoft.com/en-us/training/modules/developer-use-cases-for-ai-with-github-copilot/2-boost-developer-productivity"
  },
  {
    "id": "w505",
    "d": "D5",
    "v": "2026-11-23",
    "stem": "Fourth Coffee wants Copilot to help test a payment service that calls an external gateway. The tests have to run in continuous integration on every pull request without contacting the gateway. Which approach fits?",
    "options": [
      "Generate unit tests with the gateway replaced by a mock or stub dependency",
      "Generate tests that call the live gateway using a shared sandbox credential",
      "Generate one end-to-end test that exercises the deployed staging environment",
      "Generate tests that skip themselves whenever the gateway is unreachable"
    ],
    "answer": [
      0
    ],
    "explain": "Substituting a mock or stub for the external dependency isolates the service logic, keeps the suite fast and deterministic, and removes the network call entirely. That satisfies both stated requirements, and generating mock objects is a documented Copilot use.\n\nWhy not the others:\n- \"Generate tests that call the live gateway using a shared sandbox credential\": A live call violates the stated constraint, introduces a shared credential into continuous integration, and makes results depend on a third party's availability.\n- \"Generate one end-to-end test that exercises the deployed staging environment\": An end-to-end test against staging is valuable separately, but it contacts the gateway and is the wrong instrument for per-pull-request feedback.\n- \"Generate tests that skip themselves whenever the gateway is unreachable\": A test that skips on failure reports green while verifying nothing. Silent skips are worse than an honest absence of coverage.",
    "src": "https://docs.github.com/en/copilot/tutorials/copilot-cookbook/testing-code/create-mock-objects"
  },
  {
    "id": "w506",
    "d": "D5",
    "v": "2026-11-23",
    "stem": "A Contoso developer asks Copilot for tests covering a discount calculator and receives three tests that each assert only that the function returns a number. What is the most useful next request?",
    "options": [
      "Ask for additional tests so that the total assertion count increases",
      "Ask for the same tests rewritten in a different testing framework",
      "Ask for a coverage report so that untested lines become visible",
      "Ask for boundary and failure cases with assertions on exact values"
    ],
    "answer": [
      3
    ],
    "explain": "The defect is assertion strength, not test count. Asking for boundary values, invalid input, and exact expected results is what turns a passing suite into evidence about behavior.\n\nWhy not the others:\n- \"Ask for additional tests so that the total assertion count increases\": More tests of the same shape add runtime and no information. A weak assertion repeated is still a weak assertion.\n- \"Ask for the same tests rewritten in a different testing framework\": The framework is not the problem. Changing it preserves the inadequate assertions exactly.\n- \"Ask for a coverage report so that untested lines become visible\": Coverage would show these lines as exercised, which is precisely the false comfort that a type-only assertion creates. The metric would look fine.",
    "src": "https://docs.github.com/en/copilot/tutorials/copilot-cookbook/testing-code/generate-unit-tests"
  },
  {
    "id": "w507",
    "d": "D5",
    "v": "2026-11-23",
    "stem": "A Coho Winery team asks Copilot to review a reporting endpoint for security problems, and Copilot identifies a missing input validation check. Which conclusion is accurate?",
    "options": [
      "The endpoint is secure once the identified input check has been added",
      "A single useful finding does not establish that no other issue remains",
      "Copilot can replace code scanning tools for this class of assessment",
      "The finding can be accepted unreviewed because it is highly specific"
    ],
    "answer": [
      1
    ],
    "explain": "Copilot can surface real vulnerability patterns and propose fixes, and GitHub documentation is explicit that this does not substitute for dedicated security tooling. An absence of further findings is not evidence of absence.\n\nWhy not the others:\n- \"The endpoint is secure once the identified input check has been added\": Fixing a found issue removes that issue. It says nothing about the issues that were not surfaced, and treating one finding as a clean bill of health is the reasoning error this item targets.\n- \"Copilot can replace code scanning tools for this class of assessment\": Code scanning performs systematic analysis with different guarantees. The documentation positions Copilot as complementary rather than as a replacement.\n- \"The finding can be accepted unreviewed because it is highly specific\": A specific finding can still be wrong about this codebase, and a proposed fix can introduce its own defect. Review applies to security suggestions as much as to any other output.",
    "src": "https://docs.github.com/en/copilot/tutorials/copilot-cookbook/analyze-security/find-vulnerabilities"
  },
  {
    "id": "w508",
    "d": "D5",
    "v": "2026-11-23",
    "stem": "Proseware maintains a reporting tool written in an older language that very few staff can still maintain. Leadership wants Copilot to help modernize it. Which approach matches documented guidance?",
    "options": [
      "Request a full rewrite in a single pass and review the resulting diff",
      "Freeze the legacy tool and rebuild from scratch without reference to it",
      "Work in bounded reviewed steps, verifying behavior at every stage",
      "Translate it automatically and deploy once the new code compiles"
    ],
    "answer": [
      2
    ],
    "explain": "GitHub documents modernization and technical debt reduction as incremental work: translate or restructure a bounded piece, verify that behavior is preserved, review it, and repeat. Each step stays reviewable and reversible.\n\nWhy not the others:\n- \"Request a full rewrite in a single pass and review the resulting diff\": A single enormous diff cannot be reviewed meaningfully, and any behavioral change hides inside it. Review effort scales badly with change size.\n- \"Freeze the legacy tool and rebuild from scratch without reference to it\": Discarding the existing implementation discards the accumulated business rules encoded in it, many of which exist nowhere else. That is how modernization projects lose undocumented behavior.\n- \"Translate it automatically and deploy once the new code compiles\": Compilation proves syntax, not equivalence. A translated report that compiles can still produce different totals, which is the failure that matters here.",
    "src": "https://docs.github.com/en/copilot/tutorials/reduce-technical-debt"
  },
  {
    "id": "w602",
    "d": "D6",
    "v": "2026-11-23",
    "stem": "An Adventure Works legal reviewer asks who owns the code that Copilot produces and who carries responsibility for using it. Which statement reflects GitHub's current terms?",
    "options": [
      "GitHub owns the output and grants the customer a perpetual license to use it",
      "Ownership transfers to the customer once a human has edited the suggestion",
      "GitHub does not own inputs or outputs, and responsibility for use stays with you",
      "Ownership depends on which underlying model generated the suggestion returned"
    ],
    "answer": [
      2
    ],
    "explain": "The current Generative AI Services Terms state that GitHub does not own inputs or outputs and that you retain any ownership you already have in your inputs, while responsibility for reviewing, testing, and using the output remains with you.\n\nWhy not the others:\n- \"GitHub owns the output and grants the customer a perpetual license to use it\": GitHub's terms state the opposite. Framing GitHub as the owner granting a license back is a plausible-sounding inversion of the actual position.\n- \"Ownership transfers to the customer once a human has edited the suggestion\": No editing threshold appears in the terms. Whether a given suggestion attracts protection at all depends on law, length, and how functional rather than expressive it is, not on whether someone changed a line.\n- \"Ownership depends on which underlying model generated the suggestion returned\": Model selection affects cost and quality. It has no bearing on the ownership position.",
    "src": "https://github.com/customer-terms/github-generative-ai-services-terms?locale=en-US"
  },
  {
    "id": "w603",
    "d": "D6",
    "v": "2026-11-23",
    "stem": "Wide World Importers sets Suggestions matching public code to Allow. A developer receives a suggestion accompanied by a notice that similar code was found. What does that notice indicate?",
    "options": [
      "The suggestion was blocked, and a different suggestion was substituted instead",
      "The suggestion matched public code, and a reference to the match is available",
      "The suggestion conflicts with the organization's content exclusion configuration",
      "The suggestion was generated from the organization's own private repositories"
    ],
    "answer": [
      1
    ],
    "explain": "When matching is allowed, Copilot surfaces the match and can provide references to the matching public files and the license information it could determine. That gives the developer the evidence needed to make a decision, and a license reported as unknown is exactly the case requiring human judgment.\n\nWhy not the others:\n- \"The suggestion was blocked, and a different suggestion was substituted instead\": Blocking is what the other setting value does. Under Allow the suggestion is shown rather than withheld, which is the whole point of the distinction.\n- \"The suggestion conflicts with the organization's content exclusion configuration\": Content exclusion governs what may be used as context from the organization's own repositories. It produces no public-code notice.\n- \"The suggestion was generated from the organization's own private repositories\": Suggestions are not generated by copying an organization's private repositories, and the notice specifically concerns publicly available code.",
    "src": "https://docs.github.com/en/copilot/how-tos/manage-your-account/manage-policies"
  },
  {
    "id": "w604",
    "d": "D6",
    "v": "2026-11-23",
    "stem": "Alpine Ski House configures content exclusion for a sensitive directory. A developer reports that the excluded content still appears to inform responses in one particular interaction mode, although inline suggestions behave as expected. What should the administrator check first?",
    "options": [
      "Whether the developer's account currently has an active Copilot seat",
      "Whether the repository default branch holds the exclusion configuration",
      "Whether the developer has restarted the workstation since the change",
      "Whether that interaction mode is documented as supporting exclusions"
    ],
    "answer": [
      3
    ],
    "explain": "Content exclusion support is documented per surface and per interaction mode, and GitHub states that some modes do not honor it. A difference between two modes on the same machine points directly at the support matrix.\n\nWhy not the others:\n- \"Whether the developer's account currently has an active Copilot seat\": A missing seat would remove Copilot functionality entirely rather than produce mode-specific behavior. The symptom does not fit.\n- \"Whether the repository default branch holds the exclusion configuration\": Placement matters for repository-scoped configuration, but the developer reports that exclusions work correctly in one mode, which proves the configuration is being read.\n- \"Whether the developer has restarted the workstation since the change\": A reload can help with propagation delay, and delay affects all modes at once. It does not explain a difference between two modes.",
    "src": "https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/content-exclusion"
  },
  {
    "id": "w605",
    "d": "D6",
    "v": "2026-11-23",
    "stem": "A Northwind Traders developer gets no suggestions at all in a file that nobody intended to exclude, and the Copilot status indicator reports that the file is affected by content exclusion. What is the most direct next step?",
    "options": [
      "Review the exclusion patterns at repository and organization scope for a match",
      "Reinstall the Copilot extension and clear the editor's local language caches",
      "Ask an administrator to assign the developer a different type of Copilot seat",
      "Move the file into a new directory so the existing pattern stops matching it"
    ],
    "answer": [
      0
    ],
    "explain": "The status indicator has already identified the cause, so the question is which rule matched. Exclusion patterns are written at repository, organization, and enterprise scope, and a pattern broader than intended is the usual explanation.\n\nWhy not the others:\n- \"Reinstall the Copilot extension and clear the editor's local language caches\": Reinstalling addresses client faults. The client is reporting the policy correctly, so there is nothing malfunctioning to repair.\n- \"Ask an administrator to assign the developer a different type of Copilot seat\": Seat type governs plan features. It does not determine which paths an exclusion pattern matches.\n- \"Move the file into a new directory so the existing pattern stops matching it\": Moving the file works around a misconfigured rule and leaves that rule in place to catch the next file. It treats the symptom.",
    "src": "https://docs.github.com/en/copilot/how-tos/troubleshoot-copilot/troubleshoot-common-issues"
  },
  {
    "id": "w606",
    "d": "D6",
    "v": "2026-11-23",
    "stem": "A Contoso developer wants inline suggestions to stop appearing while writing Markdown, but wants them to continue working normally in source files. Which mechanism fits this requirement?",
    "options": [
      "An organization policy that disables Copilot across documentation repositories",
      "A content exclusion rule that removes Markdown files in every repository",
      "An editor setting that disables inline suggestions for the Markdown language",
      "A prompt file instructing Copilot to ignore Markdown files for the session"
    ],
    "answer": [
      2
    ],
    "explain": "Editor settings for Copilot include enabling or disabling inline suggestions per language, which is exactly a per-developer preference expressed at the right scope.\n\nWhy not the others:\n- \"An organization policy that disables Copilot across documentation repositories\": An organization policy is the wrong scope for one developer's editing preference, and it would affect colleagues who want the behavior.\n- \"A content exclusion rule that removes Markdown files in every repository\": Content exclusion is a privacy and governance control applied by administrators to protect content. Using it as a personal preference switch misapplies the control and affects everyone.\n- \"A prompt file instructing Copilot to ignore Markdown files for the session\": Prompt files package reusable tasks. They do not govern whether inline completions render in a file type.",
    "src": "https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/set-up-copilot/configure-in-ide"
  },
  {
    "id": "w607",
    "d": "D6",
    "v": "2026-11-23",
    "stem": "Blue Yonder Airlines blocks suggestions matching public code and asks whether the codebase can now be considered free of third-party licensing concerns. Which statement is accurate?",
    "options": [
      "The setting establishes that no third-party licensed code remains in the project",
      "The setting reduces one specific risk and does not clear the codebase overall",
      "The setting applies retroactively to any code accepted before it was enabled",
      "The setting removes the need for dependency and license scanning altogether"
    ],
    "answer": [
      1
    ],
    "explain": "Blocking prevents Copilot from returning suggestions that match public code, which addresses one route by which such code could arrive. Everything already present, and everything arriving by another route, is untouched, so the filter is a risk reduction rather than a clearance.\n\nWhy not the others:\n- \"The setting establishes that no third-party licensed code remains in the project\": Third-party code enters a project through dependencies, vendored source, and copied snippets. A suggestion filter touches none of those paths.\n- \"The setting applies retroactively to any code accepted before it was enabled\": The setting governs suggestions at the moment they are generated. It has no effect on code already accepted and committed.\n- \"The setting removes the need for dependency and license scanning altogether\": Dependency and license scanning analyze what the project actually contains. They answer a different and broader question.",
    "src": "https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-in-ides"
  },
  {
    "id": "w608",
    "d": "D6",
    "v": "2026-11-23",
    "stem": "Fourth Coffee's internal AI policy cites the GitHub Copilot Product Specific Terms for its ownership language. A reviewer opens the link and finds the page marked as archived. What should the team do?",
    "options": [
      "Keep citing the archived page, because its ownership language is unchanged",
      "Remove the ownership language, because no current terms document exists",
      "Cite the product documentation instead, because terms are not authoritative",
      "Cite the current Generative AI Services Terms and update the wording used"
    ],
    "answer": [
      3
    ],
    "explain": "The Generative AI Services Terms govern currently, and a policy that quotes superseded wording will not survive review. Updating both the citation and the terminology is the complete fix.\n\nWhy not the others:\n- \"Keep citing the archived page, because its ownership language is unchanged\": An archived page is superseded by definition, and the wording did change. The current terms speak of inputs and outputs where the archived page spoke of suggestions and your code.\n- \"Remove the ownership language, because no current terms document exists\": A replacement document exists, so deleting the policy language creates a gap rather than resolving one.\n- \"Cite the product documentation instead, because terms are not authoritative\": Documentation explains behavior; the terms govern the commercial and legal relationship. Substituting one for the other weakens the policy.",
    "src": "https://github.com/customer-terms/github-copilot-product-specific-terms?locale=en-US"
  },
  {
    "id": "w609",
    "d": "D6",
    "v": null,
    "stem": "A WoodGrove Bank developer adds a file named .copilotignore to a repository and tells the team that sensitive directories are now excluded from Copilot. What should a reviewer point out?",
    "options": [
      "That file is not a documented substitute for configured content exclusion",
      "That file takes effect only when placed on the repository default branch",
      "That file has to be committed by an organization owner to have effect",
      "That file governs inline suggestions but not any chat-based interaction"
    ],
    "answer": [
      0
    ],
    "explain": "Content exclusion is configured through repository, organization, or enterprise settings, and GitHub documents no .copilotignore file as an equivalent. A file named after a familiar pattern looks like a control and enforces nothing, which makes the team believe it is protected when it is not.\n\nWhy not the others:\n- \"That file takes effect only when placed on the repository default branch\": Branch placement matters for configuration that GitHub actually reads. Stating a placement rule for a file with no defined behavior implies the file works.\n- \"That file has to be committed by an organization owner to have effect\": Committer identity does not give an unrecognized file meaning. This answer concedes the false premise.\n- \"That file governs inline suggestions but not any chat-based interaction\": Describing a scope for the file also concedes that it does something. The correct response rejects the premise rather than qualifying it.",
    "src": "https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/content-exclusion"
  },
  {
    "id": "wm1",
    "d": "D1",
    "v": "2026-11-23",
    "stem": "Tailwind Traders receives a Copilot-generated function that calls an unfamiliar library method. The function appears to meet the requirement, but no test has run. What should the developer do first?",
    "options": [
      "Approve the change after comparing its naming with nearby code.",
      "Verify the method in documentation and test the expected behavior.",
      "Accept the change after generating a longer explanation in Chat.",
      "Approve the change after reproducing the prompt in a new session."
    ],
    "answer": [
      1
    ],
    "explain": "Documentation can expose a fabricated or misused API, and tests check the stated behavior. The developer remains responsible for accepting the change.\n\nWhy not the others:\n- \"Approve the change after comparing its naming with nearby code.\": Naming consistency does not establish correctness. It remains a useful maintainability check after the behavior is verified.\n- \"Accept the change after generating a longer explanation in Chat.\": A longer explanation can repeat the same incorrect assumption. Explanations help understanding but do not substitute for verification.\n- \"Approve the change after reproducing the prompt in a new session.\": Repeating a prompt can reproduce a hallucination. Independent evidence is more useful than agreement between unverified responses.",
    "src": "https://docs.github.com/en/copilot/tutorials/review-ai-generated-code"
  },
  {
    "id": "wm2",
    "d": "D2",
    "v": "2026-11-23",
    "stem": "WoodGrove Bank developers repeatedly request the same change-review checklist in VS Code. They want a reusable task prompt that developers intentionally invoke. Which repository artifact best fits?",
    "options": [
      "A repository-wide instructions file that applies general project guidance.",
      "An MCP configuration file that connects an external documentation tool.",
      "A hook configuration file that runs a script at a tool-use event.",
      "A prompt file that contains the shared change-review procedure."
    ],
    "answer": [
      3
    ],
    "explain": "Prompt files capture reusable task instructions. Developers can invoke the same review procedure without rebuilding the request each time.\n\nWhy not the others:\n- \"A repository-wide instructions file that applies general project guidance.\": Repository instructions supply persistent project guidance. They are appropriate for conventions rather than an intentionally invoked review task.\n- \"An MCP configuration file that connects an external documentation tool.\": MCP connects tools and data sources. It does not itself define the requested reusable review prompt.\n- \"A hook configuration file that runs a script at a tool-use event.\": Hooks execute code at supported events. That is different from a developer choosing to run a review prompt.",
    "src": "https://code.visualstudio.com/docs/agent-customization/prompt-files"
  },
  {
    "id": "wm3",
    "d": "D3",
    "v": "2026-11-23",
    "stem": "Adventure Works asks Copilot to explain a function after attaching one source file. The answer confidently describes behavior implemented in another file that was not supplied or retrieved. Which response is most appropriate?",
    "options": [
      "Inspect the missing implementation and verify the claim with that evidence.",
      "Treat the attached file as evidence that the entire repository was examined.",
      "Treat the confidence of the explanation as evidence of complete context.",
      "Repeat the explanation as documentation because the wording is consistent."
    ],
    "answer": [
      0
    ],
    "explain": "The missing file may change the explanation. Inspecting it provides evidence rather than relying on an inference.\n\nWhy not the others:\n- \"Treat the attached file as evidence that the entire repository was examined.\": Attaching one file does not demonstrate that all files were read. Available context depends on the request and retrieval.\n- \"Treat the confidence of the explanation as evidence of complete context.\": Confident language is not proof of context coverage. A model can produce a fluent but unsupported description.\n- \"Repeat the explanation as documentation because the wording is consistent.\": Consistent wording does not establish factual accuracy. Documentation should describe verified implementation behavior.",
    "src": "https://code.visualstudio.com/docs/chat/copilot-chat-context"
  },
  {
    "id": "wm4",
    "d": "D4",
    "v": "2026-11-23",
    "stem": "Fabrikam wants generated tests to follow its existing arrange-act-assert conventions. Which prompt change most directly supplies few-shot guidance?",
    "options": [
      "Increase the requested response length and ask for more detailed wording.",
      "Provide two representative tests and identify the new behavior to cover.",
      "Start a fresh conversation and repeat the original request without examples.",
      "Request another model and leave the task description otherwise unchanged."
    ],
    "answer": [
      1
    ],
    "explain": "A small set of examples gives the model a pattern to follow. The requested behavior still needs clear assertions and review.\n\nWhy not the others:\n- \"Increase the requested response length and ask for more detailed wording.\": Response length does not supply examples of the intended convention. It can produce more text without improving alignment.\n- \"Start a fresh conversation and repeat the original request without examples.\": A fresh session can reduce unrelated context. It does not create few-shot guidance without worked examples.\n- \"Request another model and leave the task description otherwise unchanged.\": A different model may change the result. Model selection is separate from supplying examples in the prompt.",
    "src": "https://docs.github.com/en/copilot/concepts/prompting-and-context/prompt-engineering"
  },
  {
    "id": "wm5",
    "d": "D5",
    "v": "2026-11-23",
    "stem": "Contoso sees increased completion acceptance after a Copilot rollout. Leadership wants to conclude that delivery time improved. What additional evidence best supports that conclusion?",
    "options": [
      "A larger count of suggested lines during the same reporting period.",
      "A list of available models and their current context-window limits.",
      "Comparable delivery measures, with task mix and quality considered.",
      "A higher count of tool calls across all active agent sessions."
    ],
    "answer": [
      2
    ],
    "explain": "Comparable outcome measures address the claim directly. Task complexity and quality matter when interpreting any change.\n\nWhy not the others:\n- \"A larger count of suggested lines during the same reporting period.\": Suggested-line volume measures activity. It does not establish faster delivery or unchanged quality.\n- \"A list of available models and their current context-window limits.\": Model capabilities describe available tools. They do not measure the team's actual delivery outcome.\n- \"A higher count of tool calls across all active agent sessions.\": Tool-call volume can increase for many reasons, including retries. It is not a direct measure of value delivered.",
    "src": "https://docs.github.com/en/copilot/tutorials/roll-out-at-scale/measure-copilot-impact"
  },
  {
    "id": "wm6",
    "d": "D6",
    "v": "2026-11-23",
    "stem": "Northwind configures content exclusions and plans to use IDE Agent mode on sensitive files. What must the administrator verify before relying on those exclusions?",
    "options": [
      "Whether the exact Copilot surface and mode support the exclusion policy.",
      "Whether the repository has instructions that repeat the desired policy.",
      "Whether developers have selected the same available language model.",
      "Whether the workspace has a file named .copilotignore at its root."
    ],
    "answer": [
      0
    ],
    "explain": "Current documentation says agents in IDEs, Copilot CLI and the Copilot app honour exclusions through Copilot tools but might not detect indirect file access, and support varies by surface. The administrator must choose a workflow and controls that meet the actual requirement.\n\nWhy not the others:\n- \"Whether the repository has instructions that repeat the desired policy.\": Instructions can communicate expectations. They do not make an unsupported exclusion policy enforceable.\n- \"Whether developers have selected the same available language model.\": Selecting a common model does not establish policy coverage. The relevant distinction is the product surface and supported controls.\n- \"Whether the workspace has a file named .copilotignore at its root.\": That filename is not a documented replacement for configured content exclusions. A local placeholder cannot establish the required protection.",
    "src": "https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/content-exclusion",
    "quote": "When you use a Copilot agent in an IDE, GitHub Copilot CLI, or the GitHub Copilot app, content exclusion prevents the agent from accessing excluded files through Copilot tools and checks identifiable file paths in commands and scripts before running them, but might not detect indirect file access."
  }
]);
