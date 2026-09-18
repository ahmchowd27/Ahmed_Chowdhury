import { useState, useEffect, useMemo } from "react";

const tokens = [
  { text: "ahmed@portfolio", type: "prompt" },
  { text: ":~$ ", type: "punct" },
  { text: "curl", type: "cmd" },
  { text: " api.ahmedchowdhury.dev/me\n\n", type: "plain" },
  { text: "{\n", type: "punct" },
  { text: '  "name"', type: "key" },
  { text: ": ", type: "punct" },
  { text: '"Ahmed Chowdhury"', type: "str" },
  { text: ",\n", type: "punct" },
  { text: '  "role"', type: "key" },
  { text: ": ", type: "punct" },
  { text: '"Software Engineer @ Ford"', type: "str" },
  { text: ",\n", type: "punct" },
  { text: '  "focus"', type: "key" },
  { text: ": ", type: "punct" },
  { text: '["backend", "cloud", "agentic AI"]', type: "str" },
  { text: ",\n", type: "punct" },
  { text: '  "certs"', type: "key" },
  { text: ": ", type: "punct" },
  { text: '["GCP ACE", "AWS SAA"]', type: "str" },
  { text: ",\n", type: "punct" },
  { text: '  "status"', type: "key" },
  { text: ": ", type: "punct" },
  { text: '"shipping"', type: "str" },
  { text: "\n", type: "punct" },
  { text: "}", type: "punct" },
];

const typeClasses = {
  prompt: "text-gray-400",
  punct: "text-gray-500",
  cmd: "fire-text font-semibold",
  plain: "text-gray-400",
  key: "text-orange-400",
  str: "text-amber-200",
};

const fullLength = tokens.reduce((sum, t) => sum + t.text.length, 0);

const TerminalHero = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= fullLength) return;
    const id = setTimeout(() => setCount((c) => c + 1), 18);
    return () => clearTimeout(id);
  }, [count]);

  const rendered = useMemo(() => {
    let remaining = count;
    const parts = [];
    for (const token of tokens) {
      if (remaining <= 0) break;
      parts.push({ text: token.text.slice(0, remaining), type: token.type });
      remaining -= token.text.length;
    }
    return parts;
  }, [count]);

  return (
    <div className="fire-card rounded-2xl overflow-hidden w-full max-w-md fire-glow">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-red-500/20 bg-black/30">
        <span className="w-3 h-3 rounded-full bg-red-500/70"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500/70"></span>
        <span className="w-3 h-3 rounded-full bg-green-500/70"></span>
        <span className="ml-3 text-xs text-gray-400">ahmed@portfolio</span>
      </div>

      <pre className="p-5 text-[13px] leading-relaxed font-mono whitespace-pre-wrap break-words min-h-[260px]">
        {rendered.map((part, i) => (
          <span key={i} className={typeClasses[part.type]}>
            {part.text}
          </span>
        ))}
        <span className="terminal-cursor text-orange-400">▋</span>
      </pre>
    </div>
  );
};

export default TerminalHero;
