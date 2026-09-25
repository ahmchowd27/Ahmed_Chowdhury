const FireBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
    <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-red-950 to-black" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-red-950/10 to-transparent" />
    <div className="absolute -bottom-48 left-1/2 h-96 w-[min(90vw,60rem)] -translate-x-1/2 rounded-full bg-orange-700/10 blur-3xl" />
  </div>
);

export default FireBackground;
