import { useState } from "react";
import RetrievalInspector from "./RetrievalInspector";
import CodeContextViewer from "./CodeContextViewer";
import MCPToolsPanel from "./MCPToolsPanel";
import RepoPilotArchitecture from "./RepoPilotArchitecture";
import AgentWorkflowPanel from "./AgentWorkflowPanel";
import { repopilotDemoService } from "../services/repopilot";

const tabs = [
  ["agent", "CLI agent workflow"],
  ["search", "Search & inspect"],
  ["tools", "MCP Tools"],
  ["architecture", "Architecture"]
];
const modes = [
  ["hybrid", "Hybrid"],
  ["lexical", "BM25"],
  ["semantic", "Semantic"]
];

const RepoPilotDemo = () => {
  const [repository, setRepository] = useState(repopilotDemoService.repositories[0].id);
  const [query, setQuery] = useState(repopilotDemoService.questions[0].query);
  const [mode, setMode] = useState("hybrid");
  const [tab, setTab] = useState("agent");
  const [response, setResponse] = useState(null);
  const [selected, setSelected] = useState(null);
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState("");

  const questions = repopilotDemoService.questions.filter((item) => item.repository === repository);
  const repositoryName = repopilotDemoService.repositories.find((item) => item.id === repository)?.name || repository;

  const clearResults = () => {
    setResponse(null);
    setSelected(null);
    setError("");
  };

  const changeRepository = (id) => {
    setRepository(id);
    setQuery(repopilotDemoService.questions.find((item) => item.repository === id)?.query || "");
    clearResults();
  };

  const executeSearch = async (event) => {
    event.preventDefault();
    setSearching(true);
    setError("");
    try {
      const result = await repopilotDemoService.search({ repository, query, mode });
      setResponse(result);
      setSelected(result.context[0] || null);
    } catch {
      setError("The demo search could not be completed.");
    } finally {
      setSearching(false);
    }
  };

  const inspectAgentResult = ({ repository: nextRepository, query: nextQuery, result, selected: nextSelected }) => {
    setRepository(nextRepository);
    setQuery(nextQuery);
    setMode("hybrid");
    setResponse(result);
    setSelected(nextSelected);
    document.getElementById("repopilot-tab-search")?.focus();
    setTab("search");
  };

  return (
    <article className="lab-shell" aria-labelledby="repopilot-title">
      <div className="grid border-b border-white/10 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div className="flex flex-col justify-between gap-6 p-5 md:p-8">
          <div>
            <p className="lab-eyebrow">01 / Retrieval & code intelligence</p>
            <h3 id="repopilot-title" className="text-3xl font-semibold text-gray-100">RepoPilot</h3>
            <p className="text-sm text-gray-300 mt-3 max-w-md leading-relaxed">Find the source files that matter. Follow a coding agent through MCP retrieval, then inspect the context behind its response.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="lab-badge">LOCAL DEMO · SYNTHETIC REPOS</span>
            <span className="text-xs text-gray-400">BM25 + semantic → RRF → MCP</span>
          </div>
        </div>
        <figure className="relative h-52 overflow-hidden border-t border-white/10 md:h-auto md:min-h-72 md:border-l md:border-t-0">
          <img src="/images/repopilot-evidence.jpg" width="1440" height="618" loading="lazy"
            alt="Concept artwork: two streams of source-file tiles narrow to a few selected files beside a coding terminal."
            className="absolute inset-0 h-full w-full object-cover object-center" />
          <figcaption className="absolute bottom-3 left-3 rounded bg-black/75 px-3 py-1.5 font-mono text-[10px] tracking-wider text-gray-200">SOURCE EVIDENCE / CONCEPT ART</figcaption>
        </figure>
      </div>
      <div className="flex flex-wrap gap-2 border-b border-white/10 px-5 py-3 md:px-7" role="tablist" aria-label="RepoPilot views">
        {tabs.map(([id, label]) => (
          <button key={id} id={`repopilot-tab-${id}`} type="button" role="tab"
            aria-selected={tab === id} aria-controls={`repopilot-panel-${id}`}
            tabIndex={tab === id ? 0 : -1}
            onKeyDown={(event) => {
              if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
                event.preventDefault();
                const next = (tabs.findIndex(([key]) => key === tab) + (event.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length;
                setTab(tabs[next][0]);
                document.getElementById(`repopilot-tab-${tabs[next][0]}`)?.focus();
              }
            }}
            onClick={() => setTab(id)}
            className={`lab-tab ${tab === id ? "lab-tab-active" : ""}`}>{label}</button>
        ))}
      </div>
      <div className="p-4 md:p-7" id={`repopilot-panel-${tab}`} role="tabpanel" aria-labelledby={`repopilot-tab-${tab}`}>
        {tab === "agent" && <AgentWorkflowPanel onInspect={inspectAgentResult} />}
        {tab === "tools" && <MCPToolsPanel />}
        {tab === "architecture" && <RepoPilotArchitecture />}
        {tab === "search" && (
          <>
            <div className="grid gap-4 lg:grid-cols-[minmax(0,13rem)_minmax(0,1fr)]">
              <div className="lab-panel">
                <h4 className="text-sm font-semibold mb-3">Demo repositories</h4>
                <div className="space-y-2">
                  {repopilotDemoService.repositories.map((item) => (
                    <button type="button" key={item.id} onClick={() => changeRepository(item.id)}
                      aria-pressed={repository === item.id}
                      className={`lab-repository ${repository === item.id ? "lab-repository-active" : ""}`}>
                      <span className="block text-sm font-medium">{item.name}</span>
                      <span className="block text-xs text-gray-400 mt-1">{item.description}</span>
                    </button>
                  ))}
                </div>
              </div>
              <form className="lab-panel" onSubmit={executeSearch}>
                <label htmlFor="repopilot-query" className="block text-sm font-semibold mb-2">Ask the codebase</label>
                <p className="text-xs text-gray-400 mb-4">Prepared questions search synthetic example files. Custom questions display an honest no-result state.</p>
                <textarea id="repopilot-query" rows="2" value={query} required
                  onChange={(event) => { setQuery(event.target.value); clearResults(); }}
                  className="text-field resize-y min-h-20" />
                <div className="flex flex-wrap gap-2 mt-3" aria-label="Example questions">
                  {questions.map((item) => (
                    <button key={item.key} type="button" onClick={() => { setQuery(item.query); clearResults(); }}
                      className="lab-chip">{item.query}</button>
                  ))}
                </div>
                <fieldset className="mt-5">
                  <legend className="text-sm font-semibold mb-2">Retrieval mode</legend>
                  <div className="flex flex-wrap gap-2">
                    {modes.map(([id, label]) => (
                      <label key={id} className={`lab-mode ${mode === id ? "lab-mode-active" : ""}`}>
                        <input type="radio" name="retrieval-mode" value={id} checked={mode === id}
                          onChange={() => { setMode(id); clearResults(); }} className="sr-only" />
                        {label}
                      </label>
                    ))}
                  </div>
                </fieldset>
                <button className="btn btn-primary mt-5" type="submit" disabled={searching}>
                  {searching ? "Searching…" : "Run demo query"} <span aria-hidden="true">→</span>
                </button>
              </form>
            </div>
            {error && <p role="alert" className="text-red-300 mt-4">{error}</p>}
            {response?.message && <p role="status" className="lab-panel mt-4 text-sm text-gray-300">{response.message}</p>}
            {response?.context.length > 0 && (
              <>
                <RetrievalInspector response={response} mode={mode} selectedId={selected?.id} onSelect={setSelected} />
                <CodeContextViewer result={selected} repositoryName={repositoryName} />
                <p className="text-xs text-gray-400 mt-3">No generated answer is shown. These snippets are illustrative, synthetic source context.</p>
              </>
            )}
          </>
        )}
      </div>
    </article>
  );
};

export default RepoPilotDemo;
