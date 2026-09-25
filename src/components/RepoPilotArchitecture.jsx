const stages = ["Public repo", "Parser", "Symbol-aware chunks", "Content hash", "SQLite FTS5 / BM25 + embeddings", "Retrieval", "RRF", "MCP / API"];

const RepoPilotArchitecture = () => (
  <div className="lab-panel">
    <p className="lab-eyebrow">Proposed public implementation</p>
    <h3 className="text-xl font-semibold mb-2">Index & architecture</h3>
    <p className="text-sm text-gray-400 mb-6">A clean-room design for public or owned repositories. The portfolio currently demonstrates the interface and ranking model.</p>
    <ol className="flex flex-wrap items-center gap-2 mb-7">
      {stages.map((stage, index) => (
        <li key={stage} className="flex items-center gap-2">
          <span className="rounded-lg border border-red-500/30 bg-red-950/20 px-3 py-2 text-xs text-gray-200">{stage}</span>
          {index < stages.length - 1 && <span className="text-orange-400" aria-hidden="true">→</span>}
        </li>
      ))}
    </ol>
    <h4 className="font-semibold mb-3">Incremental indexing</h4>
    <ul className="grid gap-3 text-sm text-gray-300 md:grid-cols-2">
      <li>Content hashes identify unchanged chunks so embeddings can be reused.</li>
      <li>New or modified chunks are parsed, indexed, and embedded again.</li>
      <li>Deleted or renamed files remove stale index entries.</li>
      <li>Only approved public or owned repository content enters the index.</li>
    </ul>
  </div>
);

export default RepoPilotArchitecture;
