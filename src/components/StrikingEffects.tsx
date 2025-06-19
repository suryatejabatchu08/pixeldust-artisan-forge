
import { useState, useEffect } from 'react';

const StrikingEffects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; color: string }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Create particles on mouse move
      if (Math.random() > 0.95) {
        const newParticle = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 4 + 2,
          color: ['#8b5cf6', '#3b82f6', '#ec4899', '#06b6d4'][Math.floor(Math.random() * 4)]
        };
        
        setParticles(prev => [...prev.slice(-20), newParticle]);
        
        // Remove particle after animation
        setTimeout(() => {
          setParticles(prev => prev.filter(p => p.id !== newParticle.id));
        }, 2000);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Floating geometric shapes */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Animated triangles */}
        <div className="absolute top-20 left-10 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-purple-500/20 animate-pulse" />
        <div className="absolute top-40 right-20 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent border-b-blue-500/30 animate-bounce" />
        
        {/* Animated circles */}
        <div className="absolute bottom-32 left-16 w-12 h-12 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 animate-spin" style={{ animationDuration: '8s' }} />
        <div className="absolute top-1/3 right-12 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-500/30 animate-pulse" />
        
        {/* Animated squares */}
        <div className="absolute bottom-20 right-1/4 w-6 h-6 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rotate-45 animate-spin" style={{ animationDuration: '6s' }} />
        
        {/* Mouse follower */}
        <div 
          className="absolute w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-60 transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 8,
            top: mousePosition.y - 8,
            transform: 'scale(1)',
          }}
        />
        
        {/* Trail particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full animate-ping"
            style={{
              left: particle.x - particle.size / 2,
              top: particle.y - particle.size / 2,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              animationDuration: '2s',
            }}
          />
        ))}
      </div>

      {/* Background pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse" />
      </div>
    </>
  );
};

export default StrikingEffects;
