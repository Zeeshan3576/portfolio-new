---
description: "Investigate and fix a bug by root cause, with a regression test."
disable-model-invocation: true
argument-hint: "<bug description or ticket>"
---

Bug: $ARGUMENTS

Don't guess. Follow: reproduce or trace → evidence → root cause → fix → regression test → verify.
If the intended behaviour is unclear, ask me before changing it. No unrelated refactors.

Report: root cause, why it happened, the fix, regression coverage, and verification results (PASS / FAIL / NOT RUN per command).
