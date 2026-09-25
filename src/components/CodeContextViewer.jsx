import PropTypes from "prop-types";

const CodeContextViewer = ({ result, repositoryName }) => (
  <section className="lab-panel mt-4 min-w-0" aria-labelledby="context-heading">
    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
      <div>
        <p className="lab-eyebrow">Retrieved context · synthetic demo</p>
        <h3 id="context-heading" className="text-lg font-semibold">Source / symbol viewer</h3>
      </div>
      {result && <span className="text-xs text-orange-300">Rank #{result.rank} · {result.source}</span>}
    </div>
    {result ? (
      <>
        <dl className="grid gap-3 text-xs sm:grid-cols-2">
          <div><dt className="text-gray-500">Repository</dt><dd className="text-gray-200">{repositoryName}</dd></div>
          <div><dt className="text-gray-500">Symbol</dt><dd className="text-gray-200 font-mono break-all">{result.symbol}</dd></div>
          <div className="sm:col-span-2"><dt className="text-gray-500">Synthetic path</dt><dd className="text-gray-200 font-mono break-all">{result.path}</dd></div>
          {result.rrfScore && <div><dt className="text-gray-500">Illustrative RRF score</dt><dd className="text-gray-200 font-mono">{result.rrfScore} · BM25 #{result.lexicalRank ?? "—"} / semantic #{result.semanticRank ?? "—"}</dd></div>}
        </dl>
        <pre className="mt-4 overflow-x-auto rounded-lg border border-white/10 bg-black/50 p-4 text-xs leading-relaxed text-gray-200"><code>{result.snippet}</code></pre>
      </>
    ) : <p className="text-sm text-gray-400">Choose a result to inspect its source context.</p>}
  </section>
);

CodeContextViewer.propTypes = {
  result: PropTypes.object,
  repositoryName: PropTypes.string.isRequired
};

export default CodeContextViewer;
