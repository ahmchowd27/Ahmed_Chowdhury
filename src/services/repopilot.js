import { demoDocuments, demoQuestions, demoRankings, demoRepositories } from "../data/repopilotDemo";

const RRF_K = 60;

const ranked = (ids, source) => ids.map((id, index) => ({
  ...demoDocuments[id],
  rank: index + 1,
  source
}));

const fuse = (lexical, semantic) => {
  const scores = new Map();
  for (const list of [lexical, semantic]) {
    for (const result of list) {
      scores.set(result.id, (scores.get(result.id) || 0) + 1 / (RRF_K + result.rank));
    }
  }
  return [...scores.entries()]
    .sort((first, second) => second[1] - first[1])
    .map(([id, score], index) => ({
      ...demoDocuments[id], rank: index + 1, source: "Hybrid / RRF",
      rrfScore: score.toFixed(4),
      lexicalRank: lexical.find((item) => item.id === id)?.rank ?? null,
      semanticRank: semantic.find((item) => item.id === id)?.rank ?? null
    }));
};

export const repopilotDemoService = {
  repositories: demoRepositories,
  questions: demoQuestions,
  async search({ repository, query, mode }) {
    if (!["hybrid", "lexical", "semantic"].includes(mode)) {
      throw new Error("Unsupported retrieval mode");
    }
    const question = demoQuestions.find((item) =>
      item.repository === repository && item.query.toLowerCase() === query.trim().toLowerCase()
    );
    if (!question) {
      return {
        lexicalResults: [], semanticResults: [], hybridResults: [],
        context: [], answer: null,
        message: "This local demo has prepared results for the example questions only. Choose an example question to inspect retrieval."
      };
    }
    const ranking = demoRankings[question.key];
    const lexicalResults = ranked(ranking.lexical, "BM25");
    const semanticResults = ranked(ranking.semantic, "Semantic");
    const hybridResults = fuse(lexicalResults, semanticResults);
    const context = mode === "hybrid" ? hybridResults : mode === "lexical" ? lexicalResults : semanticResults;
    return { lexicalResults, semanticResults, hybridResults, context, answer: null, message: null };
  }
};
