import { useState, useEffect, useMemo } from 'react';

const FireBackground = () => {
  const [flames, setFlames] = useState([]);
  const [swordSlashes, setSwordSlashes] = useState([]);

  // Memoize particle generation for better performance
  const generateParticles = useMemo(() => {
    return {
      flames: () => {
        const newFlames = [];
        for (let i = 0; i < 15; i++) { // Further reduced from 20 to 15
          newFlames.push({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 2, // Slightly smaller
            delay: Math.random() * 4, // Reduced delay
            duration: 2 + Math.random() * 2 // Shorter duration
          });
        }
        return newFlames;
      },
      slashes: () => {
        const newSlashes = [];
        for (let i = 0; i < 3; i++) { // Further reduced from 4 to 3
          newSlashes.push({
            id: i,
            x: Math.random() * 80,
            y: Math.random() * 80,
            rotation: Math.random() * 360,
            delay: i * 4, // Increased delay between slashes
            duration: 1.2 + Math.random() * 0.5 // Shorter duration
          });
        }
        return newSlashes;
      }
    };
  }, []);

  // Generate flame particles (reduced for performance)
  useEffect(() => {
    setFlames(generateParticles.flames());
    setSwordSlashes(generateParticles.slashes());
  }, [generateParticles]);

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

      {/* Floating embers (reduced for performance) */}
      {[...Array(10)].map((_, i) => ( // Further reduced from 15 to 10
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

      {/* Breathing effect overlay - simplified */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-orange-500/3 to-red-600/5"></div>

      {/* Epic fire waves - simplified */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-red-900/20 via-orange-600/10 to-transparent opacity-40"></div>
    </div>
  );
};

export default FireBackground;
