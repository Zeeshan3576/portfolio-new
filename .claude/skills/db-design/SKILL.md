---
description: "Design database changes before any migration is written."
disable-model-invocation: true
argument-hint: "<requirement>"
---

Design DB changes for: $ARGUMENTS

Inspect the current schema and migration history first. Don't write migrations yet.

Give me: entities, relationships, schema, keys, constraints, indexes, expected queries, tenant isolation, migration strategy, backfill, rollback, and performance impact. Flag anything irreversible as a decision for me.
