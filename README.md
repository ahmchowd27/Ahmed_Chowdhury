# Ahmed Chowdhury Portfolio

Portfolio for Ahmed Chowdhury, software engineer working across backend and distributed systems, cloud and data platforms, and agentic developer tooling.

## Stack and setup

React 18, Vite 5, Tailwind CSS 3, GSAP, and Lenis. The site is a static frontend with no application backend.

```bash
npm install
npm run dev
```

Run `npm run build` and `npm run lint` before shipping. `npm run preview` serves a production build locally. The resume is served from `public/images/Ahmed-Chowdhury-Resume.pdf`.

## Structure

- `src/App.jsx`: page order and existing scroll effects.
- `src/components/`: portfolio sections, terminal preview, RepoPilot inspector, and PatchPilot mockup.
- `src/data/repopilotDemo.js`: synthetic repositories, questions, source snippets, and prepared rank lists.
- `src/data/patchpilotDemo.js`: synthetic maintenance example and illustrative diff.
- `src/services/repopilot.js`: search contract and deterministic local demo adapter.
- `src/index.css` and `src/performance.css`: Tailwind utilities, fire styling, developer tool panels, and motion behavior.

## AI Engineering Lab

**RepoPilot — DEMO:** Visitors can select a synthetic repository, run prepared example questions in BM25, semantic, or hybrid mode, inspect result provenance and snippets, and view a calculated RRF ranking. The terminal preview is static. Custom questions show a no-result message. There is no live ingestion, embedding model, search backend, generated answer, or MCP server.

**PatchPilot — DEMO:** Shows a controlled maintenance workflow and a sanitized illustrative diff. It does not scan dependencies, modify repositories, validate builds, or open pull requests. Human review is part of the proposed workflow.

These are clean-room public demonstrations, separate from professional work at Ford. Their synthetic files and paths do not represent Ford systems or a public SafeSnap source tree. SafeSnap is a separate featured project linked to its public repository.

## Future RepoPilot integration

Replace `repopilotDemoService.search({ repository, query, mode })` in `src/services/repopilot.js` with an API adapter. Preserve the response shape: `lexicalResults`, `semanticResults`, `hybridResults`, `context`, and `answer`. Add server-side repository allowlisting, actual source provenance, loading and error handling, index revision metadata, and backend tests before marking search or MCP as live. See [REPOPILOT_ARCHITECTURE.md](REPOPILOT_ARCHITECTURE.md) for the proposed public implementation.
