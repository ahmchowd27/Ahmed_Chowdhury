import PropTypes from "prop-types";

const ResultList = ({ title, description, results, selectedId, onSelect }) => (
  <div className="lab-panel min-w-0">
    <div className="flex items-baseline justify-between gap-2 mb-2">
      <h4 className="font-semibold text-gray-100">{title}</h4>
      <span className="text-[11px] text-gray-500">{results.length} matches</span>
    </div>
    <p className="text-xs text-gray-400 mb-3">{description}</p>
    <ol className="space-y-2">
      {results.map((result) => (
        <li key={result.id}>
          <button type="button" onClick={() => onSelect(result)}
            className={`lab-result ${selectedId === result.id ? "lab-result-selected" : ""}`}
            aria-pressed={selectedId === result.id}>
            <span className="text-orange-300 font-mono text-xs">#{result.rank}</span>
            <span className="min-w-0 text-left">
              <span className="block truncate text-sm text-gray-100">{result.path.split("/").at(-1)}</span>
              <span className="block truncate text-xs text-gray-400">{result.symbol}</span>
            </span>
          </button>
        </li>
      ))}
    </ol>
  </div>
);

ResultList.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  results: PropTypes.array.isRequired,
  selectedId: PropTypes.string,
  onSelect: PropTypes.func.isRequired
};

const RetrievalInspector = ({ response, mode, selectedId, onSelect }) => (
  <section aria-labelledby="retrieval-heading" className="mt-5">
    <div className="mb-4">
      <p className="lab-eyebrow">Retrieval inspector</p>
      <h3 id="retrieval-heading" className="text-xl font-semibold">Trace the ranking</h3>
    </div>
    {mode === "hybrid" ? (
      <>
        <div className="grid gap-3 md:grid-cols-2">
          <ResultList title="BM25 / lexical" description="Exact words, identifiers, and code terms." results={response.lexicalResults} selectedId={selectedId} onSelect={onSelect} />
          <ResultList title="Semantic" description="Conceptually related source context." results={response.semanticResults} selectedId={selectedId} onSelect={onSelect} />
        </div>
        <div className="my-3 flex items-center gap-3 text-xs text-gray-300">
          <span className="h-px flex-1 bg-red-500/25" />
          <span className="rounded-full border border-red-500/30 px-3 py-2 text-center">↓ Reciprocal Rank Fusion · 1 / (60 + rank)</span>
          <span className="h-px flex-1 bg-red-500/25" />
        </div>
        <p className="text-xs text-gray-400 mb-3">RRF adds rank contributions from each list; it does not mix incompatible raw scores.</p>
        <ResultList title="Hybrid / final ranked context" description="Rank positions combined across both retrieval paths." results={response.hybridResults} selectedId={selectedId} onSelect={onSelect} />
      </>
    ) : (
      <ResultList title={mode === "lexical" ? "BM25 / lexical" : "Semantic"} description={mode === "lexical" ? "Exact words, identifiers, and code terms." : "Conceptually related source context."} results={response.context} selectedId={selectedId} onSelect={onSelect} />
    )}
  </section>
);

RetrievalInspector.propTypes = {
  response: PropTypes.object.isRequired,
  mode: PropTypes.string.isRequired,
  selectedId: PropTypes.string,
  onSelect: PropTypes.func.isRequired
};

export default RetrievalInspector;
