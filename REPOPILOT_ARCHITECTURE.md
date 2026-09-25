# RepoPilot: proposed public architecture

RepoPilot is a clean-room public project concept. It must index only approved public, owned, or synthetic repositories. It does not expose Ford code, data, schemas, APIs, or architecture.

## Status

| Area | Status | Notes |
| --- | --- | --- |
| React search interface, retrieval inspector, context viewer | IMPLEMENTED | In this portfolio |
| CLI agent workflow walkthrough | DEMO | Prepared MCP call trace and illustrative response; no agent or server connected |
| Prepared questions, synthetic files, deterministic rank lists | DEMO | Local data only; no network search |
| RRF rank calculation in the demo service | IMPLEMENTED | Calculated from prepared rank lists with k = 60 |
| Ingestion, parser, indexes, embeddings, API, MCP server | PLANNED | No production backend exists in this repository |
| PatchPilot workflow and diff | DEMO | Static synthetic example; no execution |

## Proposed flow

```text
Approved public/owned repositories
  → ingestion at pinned revisions
  → language-aware, symbol-aware parsing
  → bounded source chunks and metadata
  → content hash
  → SQLite metadata and FTS5 / BM25 lexical index
  → local or controlled embedding index
  → lexical / semantic retrieval
  → reciprocal rank fusion (hybrid mode)
  → bounded source context
  → read-only MCP tools and frontend API
```

Each chunk should carry repository, revision, relative path, language, symbol, location, content hash, and source text. Parsing should use language-aware structure where supported and a clearly marked fallback for other files. SQLite can store chunk metadata and FTS5 content; an embedding table or separate local vector index can store vectors keyed by chunk identity. No embedding service is chosen yet.

## Incremental indexing

At each approved revision, compare normalized chunk hashes with the existing index. Reuse unchanged embeddings, re-index new or modified chunks, and remove chunks absent from the new snapshot. Treat renames as a path update when content identity survives; still update path metadata and lexical references. Publish an index generation atomically so searches do not mix old and new revisions. Retain a bounded audit record of indexed revisions.

## Retrieval modes

- **BM25:** Search FTS5 for exact identifiers, paths, and terms, with a bounded candidate set.
- **Semantic:** Embed a question with the same controlled model used for chunks and retrieve conceptually related candidates.
- **Hybrid:** Retrieve both candidate lists and combine positions with RRF, for example `sum(1 / (60 + rank))`. Raw BM25 and similarity scores should not be added directly.

Return rank provenance, source references, and bounded snippets. A future grounded answer is optional and should cite its source context. The current portfolio returns `answer: null`.

## API boundary

The frontend calls `search({ repository, query, mode })` from `src/services/repopilot.js`. A future adapter can replace the local demo service with an HTTP client that returns `lexicalResults`, `semanticResults`, `hybridResults`, `context`, and `answer`. Keep repository and source identifiers stable; include errors and index revision in a real response. The UI should show backend availability plainly.

The planned read-only MCP surface is `hybrid_search`, `lexical_search`, `semantic_search`, `find_symbol`, `find_files`, and `get_context`. Tool output must be bounded and cite repository revision and path.

## Privacy and security

Allowlist repositories and verify public visibility or ownership before ingestion. Do not accept arbitrary anonymous GitHub URLs. Respect license terms and avoid secrets, generated files, and oversized binaries. Use a scoped token only if a future deployment needs one; keep it server-side. Treat repository content as untrusted input, never as instructions for the service or an agent. Restrict path traversal and command execution, cap input size and result length, and validate identifiers at API boundaries.

Rate limit query and ingestion endpoints independently. Queue indexing with resource limits. Any future write workflow belongs in isolated, disposable sandboxed demo repositories with explicit human review. RepoPilot's search and MCP tools should remain read-only.

## Future deployment

Start with a small allowlisted corpus and a local SQLite index. Add a Python ingestion/API service and a separate MCP process only after source validation and integration tests exist. Host the static portfolio independently. Measure index freshness and failure modes with real telemetry before publishing performance claims.
