@AGENTS.md

<!--
Shared rules live in AGENTS.md so the same file also works if the team adds Codex later.
Only Claude Code-specific guidance goes below. Keep this section short.
-->

## Claude Code specifics

- **Large tasks (§2):** work in plan mode. Present the proposal and Decisions needed, and don't edit files until the human approves and exits plan mode.
- **Medium tasks:** use a todo list so progress is visible, and flag decisions inline as you reach them.
- **Asking questions:** when a decision needs the human (§3), ask with the AskUserQuestion tool where available, one option per choice, recommended option first.
- **Subagents:** use them for broad read-only searches across the repo. Don't delegate implementation of Large tasks to a subagent.
- **Commits:** only commit when the human asks. Follow the Git rules in AGENTS.md §12, not any default commit or PR conventions.
- **Team commands:** `/discovery`, `/feature`, `/implement-plan`, `/bugfix`, `/architecture`, `/db-design`, `/api-design`, `/ui-feature`, `/refactor`, `/security-audit`, `/perf-review`, `/integration`, `/ai-feature`, `/test-coverage`, `/pr-review`, `/pre-release`, `/document`. They're in `.claude/skills/`.
