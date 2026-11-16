---
description: "Senior-engineer review of the current change set against AB Ark standards. Read-only."
disable-model-invocation: true
argument-hint: "[branch or PR, defaults to current changes]"
---

Review the current change set as a senior engineer. Don't modify code.
Scope: $ARGUMENTS (if empty, review `git diff` against `develop`).

Check against:
- Correctness, regressions, business rules, edge cases, concurrency
- Security: authz on every endpoint, input validation, secrets, sensitive data in logs
- DB behaviour, transactions, N+1 queries, migrations
- Error handling, API compatibility and performance
- AB Ark standards (AGENTS.md §7): naming and I/T prefixes, file-name casing, file size limits, import order, no console.log, no unused code
- Git rules (§12): branch name, Conventional Commits, PR description contents
- Test quality and coverage of new behaviour

Skip cosmetic nitpicks. Report findings by severity (Blocker / Major / Minor), each with file and line, problem, consequence, and fix.
