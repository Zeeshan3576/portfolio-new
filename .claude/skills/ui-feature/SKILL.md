---
description: "Plan and build a UI feature on the existing design system, states and patterns."
disable-model-invocation: true
argument-hint: "<feature>"
---

UI feature: $ARGUMENTS

Inspect the existing design system, components, state management, routing, API layer and forms first.

Before implementing, show: user flow, states (loading, empty, error), edge cases, components, API needs, state ownership, accessibility and responsive behaviour. Ask about UX choices that existing patterns don't answer.

After I approve, implement following the AB Ark standards (§7): PascalCase component files, components ≤ 200 lines, user-friendly error messages, Error Boundaries around critical UI. Verify (§0) and finish with the completion report (§16).
