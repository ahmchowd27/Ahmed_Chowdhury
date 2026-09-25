import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { demoAgentOutcomes } from "../data/repopilotDemo";
import { repopilotDemoService } from "../services/repopilot";

const hosts = ["OpenCode", "GitHub Copilot CLI"];

const AgentWorkflowPanel = ({ onInspect }) => {
  const [host, setHost] = useState(hosts[0]);
  const [questionKey, setQuestionKey] = useState(repopilotDemoService.questions[0].key);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const question = repopilotDemoService.questions.find((item) => item.key === questionKey);
  const repository = repopilotDemoService.repositories.find((item) => item.id === question.repository);
  const outcome = demoAgentOutcomes[questionKey];

  useEffect(() => {
    let active = true;
    repopilotDemoService.search({
      repository: question.repository,
      query: question.query,
      mode: "hybrid"
    }).then((response) => {
      if (active) {
        setResult(response);
        setError("");
      }
    }).catch(() => {
      if (active) setError("The prepared walkthrough could not be loaded.");
    });
    return () => { active = false; };
  }, [question]);

  const evidence = outcome.evidence
    .map((id) => result?.hybridResults.find((item) => item.id === id))
    .filter(Boolean);

  return (
    <div className="space-y-5">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(16rem,0.65fr)]">
        <div>
          <p className="lab-eyebrow">Prepared CLI agent walkthrough</p>
          <h3 className="text-xl font-semibold text-gray-100">See what MCP gives the agent</h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-400">
            A coding agent asks RepoPilot for ranked source context, opens the relevant symbols, and responds with file-level evidence. This is a local illustration: no agent or MCP server is connected.
          </p>
        </div>
        <div className="lab-panel">
          <p className="text-xs font-semibold text-orange-300 mb-2">Why use this from a CLI agent?</p>
          <p className="text-sm text-gray-300">The engineer stays in the coding workflow while the agent receives bounded, inspectable context instead of guessing from a repository name.</p>
        </div>
      </div>

      <div className="lab-panel grid gap-4 md:grid-cols-2">
        <fieldset>
          <legend className="text-sm font-semibold mb-2">Example coding agent</legend>
          <div className="flex flex-wrap gap-2">
            {hosts.map((item) => (
              <label key={item} className={`lab-mode ${host === item ? "lab-mode-active" : ""}`}>
                <input type="radio" name="agent-host" value={item} checked={host === item}
                  onChange={() => setHost(item)} className="sr-only" />
                {item}
              </label>
            ))}
          </div>
        </fieldset>
        <div>
          <label htmlFor="agent-question" className="block text-sm font-semibold mb-2">Prepared question</label>
          <select id="agent-question" className="text-field" value={questionKey}
            onChange={(event) => { setQuestionKey(event.target.value); setResult(null); }}>
            {repopilotDemoService.questions.map((item) => (
              <option key={item.key} value={item.key}>{item.query}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-[#0c0d11] overflow-hidden">
        <div className="flex flex-wrap justify-between gap-2 border-b border-white/10 px-4 py-3 text-xs">
          <span className="font-mono text-gray-200">{host} · illustrative session</span>
          <span className="text-orange-300">PREPARED DEMO / NO LIVE MCP CALLS</span>
        </div>
        <ol className="divide-y divide-white/10">
          <li className="p-4 md:p-5">
            <p className="lab-eyebrow">1 / Engineer asks</p>
            <p className="text-sm text-gray-100 break-words">&gt; {question.query}</p>
            <p className="text-xs text-gray-500 mt-2">Repository: {repository.name} · synthetic example</p>
          </li>
          <li className="p-4 md:p-5">
            <p className="lab-eyebrow">2 / Agent requests ranked context</p>
            <code className="block break-all text-xs text-orange-200">repopilot.hybrid_search({JSON.stringify({ repository: question.repository, query: question.query })})</code>
            {error && <p role="alert" className="text-red-300 text-sm mt-3">{error}</p>}
            {result && <ol className="mt-4 grid gap-2 sm:grid-cols-3">
              {result.hybridResults.map((item) => (
                <li key={item.id} className="min-w-0 rounded-lg border border-white/10 bg-white/[0.03] p-3">
                  <span className="text-xs text-orange-300">#{item.rank} · {item.symbol}</span>
                  <span className="block truncate font-mono text-xs text-gray-400 mt-1" title={item.path}>{item.path}</span>
                </li>
              ))}
            </ol>}
          </li>
          <li className="p-4 md:p-5">
            <p className="lab-eyebrow">3 / Agent opens relevant symbols</p>
            <code className="block break-all text-xs text-orange-200">repopilot.get_context({JSON.stringify({ repository: question.repository, symbols: evidence.map((item) => item.symbol) })})</code>
            <p className="text-xs text-gray-400 mt-3">MCP returns bounded snippets with repository, path, symbol, and rank provenance.</p>
            <div className="grid gap-2 mt-3 md:grid-cols-2">
              {evidence.map((item) => (
                <div key={item.id} className="min-w-0 rounded-lg border border-white/10 bg-black/30 p-3">
                  <p className="text-xs text-gray-300 font-mono break-all mb-2">{item.symbol}</p>
                  <pre className="overflow-x-auto text-xs text-gray-400"><code>{item.snippet}</code></pre>
                </div>
              ))}
            </div>
          </li>
          <li className="p-4 md:p-5">
            <p className="lab-eyebrow">4 / Illustrative agent response</p>
            <p className="text-sm text-gray-200 leading-relaxed">{outcome.response}</p>
            <p className="text-xs text-gray-400 mt-3">Suggested next step: {outcome.nextStep}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {evidence.map((item) => (
                <button key={item.id} type="button" className="lab-chip"
                  onClick={() => onInspect({ repository: question.repository, query: question.query, result, selected: item })}>
                  Inspect {item.path.split("/").at(-1)} ↗
                </button>
              ))}
            </div>
          </li>
        </ol>
      </div>
      <p className="text-xs text-gray-400">OpenCode and GitHub Copilot CLI are example MCP clients. No configuration, agent reasoning, tool execution, or answer generation happens on this page.</p>
    </div>
  );
};

AgentWorkflowPanel.propTypes = {
  onInspect: PropTypes.func.isRequired
};

export default AgentWorkflowPanel;
