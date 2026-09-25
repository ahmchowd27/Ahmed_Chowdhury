const tools = [
  ["hybrid_search", "Combine lexical and semantic results with RRF."],
  ["lexical_search", "Find exact terms and identifiers with BM25."],
  ["semantic_search", "Find conceptually related chunks."],
  ["find_symbol", "Locate a named class or function."],
  ["find_files", "Find files by path or name."],
  ["get_context", "Read a bounded source excerpt."]
];

const MCPToolsPanel = () => (
  <div className="lab-panel">
    <p className="lab-eyebrow">Planned read-only interface</p>
    <h3 className="text-xl font-semibold mb-2">MCP Tools</h3>
    <p className="text-sm text-gray-400 max-w-2xl mb-6">The proposed public MCP server would make indexed code context available to CLI coding agents such as OpenCode or GitHub Copilot CLI. The CLI agent workflow tab shows how search and context tools work together. These tools are conceptual; this page does not invoke an MCP server.</p>
    <div className="grid gap-3 sm:grid-cols-2">
      {tools.map(([name, description]) => (
        <div className="rounded-lg border border-white/10 bg-black/30 p-4" key={name}>
          <code className="text-sm text-orange-300 break-all">{name}</code>
          <p className="text-xs text-gray-400 mt-2">{description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default MCPToolsPanel;
