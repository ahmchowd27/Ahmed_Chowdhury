const TerminalHero = () => (
  <div className="fire-card rounded-2xl overflow-hidden w-full max-w-lg shadow-xl" aria-label="Static RepoPilot demo preview">
    <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-red-500/20 bg-black/30">
      <span className="text-xs font-mono text-gray-300">repopilot / preview</span>
      <span className="lab-badge">STATIC DEMO</span>
    </div>
    <div className="p-5 font-mono text-xs sm:text-sm leading-7 text-gray-300">
      <p className="text-orange-300 break-words">$ repopilot search &quot;where is authentication enforced?&quot;</p>
      <p className="text-gray-500 mt-3">Synthetic demo repository · prepared example</p>
      <div className="grid grid-cols-[auto_auto] justify-start gap-x-8 mt-4">
        <span>BM25</span><span className="text-green-300">✓ ranked</span>
        <span>Semantic</span><span className="text-green-300">✓ ranked</span>
        <span>Hybrid</span><span className="text-green-300">✓ RRF</span>
      </div>
      <p className="text-gray-400 mt-4">Ranked context</p>
      <p>→ SecurityConfig.java</p>
      <p>→ JwtAuthFilter.java</p>
      <p>→ JwtService.java</p>
      <p className="text-orange-300 mt-3">Agent → get_context(symbols) → cite source</p>
    </div>
    <a href="#ai-lab" className="block border-t border-red-500/20 px-5 py-3 text-sm text-orange-300 hover:bg-red-500/10">Explore CLI agent workflow <span aria-hidden="true">→</span></a>
  </div>
);

export default TerminalHero;
