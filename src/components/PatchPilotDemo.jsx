import { useState } from "react";
import { patchpilotDemo } from "../data/patchpilotDemo";

const PatchPilotDemo = () => {
  const [showDiff, setShowDiff] = useState(false);
  return (
    <article className="lab-shell mt-6 p-5 md:p-7" aria-labelledby="patchpilot-title">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-stretch">
        <div className="flex flex-col justify-between gap-5 lg:order-2">
          <div>
            <p className="lab-eyebrow">02 / Agentic maintenance & human review</p>
            <h3 id="patchpilot-title" className="text-3xl font-semibold">PatchPilot</h3>
            <p className="text-sm text-gray-300 mt-3 max-w-md leading-relaxed">A bounded maintenance workflow: prepare a patch in a sandbox, validate it, and leave the decision with a person.</p>
          </div>
          <span className="lab-badge self-start">WORKFLOW MOCKUP · NO EXECUTION</span>
        </div>
        <figure className="relative h-48 overflow-hidden rounded-xl border border-red-500/20 sm:h-60 lg:order-1 lg:h-auto lg:min-h-64">
          <img src="/images/patchpilot-review.jpg" width="1440" height="618" loading="lazy"
            alt="Concept artwork: a dependency tile is replaced inside a guarded sandbox, beside a proposed diff and a human review station."
            className="absolute inset-0 h-full w-full object-cover object-center" />
          <figcaption className="absolute bottom-3 left-3 rounded bg-black/75 px-3 py-1.5 font-mono text-[10px] tracking-wider text-gray-200">SANDBOX / HUMAN REVIEW / CONCEPT ART</figcaption>
        </figure>
      </div>
      <ol className="flex flex-wrap gap-2 my-6">
        {patchpilotDemo.steps.map((step, index) => (
          <li key={step} className="flex items-center gap-2 text-xs">
            <span className="rounded border border-red-500/25 bg-black/30 px-2 py-2">{step}</span>
            {index < patchpilotDemo.steps.length - 1 && <span aria-hidden="true" className="text-orange-400">→</span>}
          </li>
        ))}
      </ol>
      <div className="grid gap-3 md:grid-cols-2">
        <div className="lab-panel">
          <p className="lab-eyebrow">Example issue</p>
          <p className="text-sm text-gray-200 mb-4">{patchpilotDemo.issue}</p>
          <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-2">Plan</h4>
          <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-300">
            {patchpilotDemo.plan.map((item) => <li key={item}>{item}</li>)}
          </ol>
        </div>
        <div className="lab-panel">
          <p className="lab-eyebrow">Illustrative outcome</p>
          <p className="text-sm text-gray-300 mb-3">Proposed patch → build validation → tests</p>
          <p className="text-sm font-semibold text-orange-300 mb-4">Human review required before any change is accepted.</p>
          <button type="button" className="btn btn-outline" onClick={() => setShowDiff((value) => !value)} aria-expanded={showDiff} aria-controls="patchpilot-diff">
            {showDiff ? "Hide diff" : "View diff"}
          </button>
        </div>
      </div>
      {showDiff && <div id="patchpilot-diff" className="mt-4 lab-panel">
        <p className="text-xs text-gray-400 mb-2">Sanitized illustrative diff · no repository was changed</p>
        <pre className="overflow-x-auto text-xs text-gray-200"><code>{patchpilotDemo.diff}</code></pre>
      </div>}
    </article>
  );
};

export default PatchPilotDemo;
