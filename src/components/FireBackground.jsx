import { useState, useEffect } from 'react';

const FireBackground = () => {
  const [flames, setFlames] = useState([]);
  const [swordSlashes, setSwordSlashes] = useState([]);

  // Generate flame particles
  useEffect(() => {
    const generateFlames = () => {
      const newFlames = [];
      for (let i = 0; i < 50; i++) {
        newFlames.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          delay: Math.random() * 5,
          duration: 2 + Math.random() * 3
        });
      }
      setFlames(newFlames);
    };

    const generateSwordSlashes = () => {
      const newSlashes = [];
      for (let i = 0; i < 8; i++) {
        newSlashes.push({
          id: i,
          x: Math.random() * 80,
          y: Math.random() * 80,
          rotation: Math.random() * 360,
          delay: i * 3,
          duration: 1.5 + Math.random()
        });
      }
      setSwordSlashes(newSlashes);
    };

    generateFlames();
    generateSwordSlashes();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Dark mountain silhouettes with deeper gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-red-950 to-black">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-red-950/20 to-transparent"></div>
      </div>
      
      {/* Intense fire particles */}
      {flames.map((flame) => (
        <div
          key={flame.id}
          className="absolute rounded-full fire-particle"
          style={{
            left: `${flame.x}%`,
            top: `${flame.y}%`,
            width: `${flame.size}px`,
            height: `${flame.size}px`,
            background: 'radial-gradient(circle, #ff6b35 0%, #f7931e 30%, #ffdc00 70%, transparent 100%)',
            animationDelay: `${flame.delay}s`,
            animationDuration: `${flame.duration}s`,
            filter: 'blur(1px)'
          }}
        />
      ))}
      
      {/* Sword slash effects */}
      {swordSlashes.map((slash) => (
        <div
          key={slash.id}
          className="absolute sword-slash"
          style={{
            left: `${slash.x}%`,
            top: `${slash.y}%`,
            width: '120px',
            height: '4px',
            background: 'linear-gradient(90deg, transparent 0%, #ff4444 20%, #ffaa44 50%, #ff4444 80%, transparent 100%)',
            transform: `rotate(${slash.rotation}deg)`,
            animationDelay: `${slash.delay}s`,
            animationDuration: `${slash.duration}s`,
            filter: 'drop-shadow(0 0 8px rgba(255, 68, 68, 0.8))'
          }}
        />
      ))}

      {/* Floating embers */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-orange-400 rounded-full opacity-70 ember"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${4 + Math.random() * 3}s`,
            boxShadow: '0 0 6px rgba(255, 165, 0, 0.8)'
          }}
        />
      ))}

      {/* Breathing effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-orange-500/5 to-red-600/10 animate-pulse"></div>

      {/* Epic fire waves */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-red-900/30 via-orange-600/20 to-transparent opacity-60 animate-pulse"></div>
    </div>
  );
};

export default FireBackground;
