---
description: "Behaviour-preserving refactor in small verified steps."
disable-model-invocation: true
argument-hint: "<target file or module>"
---

Refactor: $ARGUMENTS

No external behaviour change unless I approve it.

First explain: current problems, target structure, risks, affected modules, and the tests needed. Stay in plan mode until I approve.
Then establish a passing baseline, refactor in small steps, and keep tests green after each step. Bring files within the AB Ark size limits (§7) where that's part of the goal.
