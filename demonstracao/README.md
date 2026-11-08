# Request workflow · Demonstração independente

A minimal review queue for a fictional community workshop. Built for this portfolio with synthetic records. It illustrates how I approach permission checks and workflow tests.

Fila de revisão para uma oficina comunitária fictícia. O exemplo foi escrito para este portfólio, com registros sintéticos. A demonstração apresenta verificações de permissão e testes de fluxo.

**Stack** · JavaScript (ES modules), Node.js and the built-in test runner.

- [workflow.mjs](workflow.mjs) defines team scoping, permitted status changes and revision checks.
- [workflow.test.mjs](workflow.test.mjs) verifies allowed transitions, cross-team access denial, role restrictions and stale updates.

With Node.js 22, run / Com Node.js 22, execute:

```sh
node --test demonstracao/workflow.test.mjs
```

The example is a pure domain function. Its caller would authenticate the actor and persist changes atomically in an actual application.
