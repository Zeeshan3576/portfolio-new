---
description: "Plan and build a feature following AGENTS.md: size it, propose, wait for approval, then implement."
disable-model-invocation: true
argument-hint: "<feature description>"
---

Feature: $ARGUMENTS

Follow AGENTS.md. Size the task first (Small / Medium / Large) and say which tier it is.

For Medium and Large tasks, before material implementation give me:
1. Your understanding of the requirement
2. Proposed flow and technical design
3. Affected files and modules
4. API and database changes
5. Security considerations
6. Testing strategy
7. Decisions I need to make, each with options and a recommendation

For Large tasks: Stay in plan mode until I approve. After approval, implement with tests, run the verification commands from AGENTS.md §0, self-review the diff, and finish with the completion report (§16).
