import { useState, useEffect } from 'react';

const StrikingEffects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
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

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Parallax background layers */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Deep background layer */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-blue-900/5 to-pink-900/5"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        
        {/* Mid background layer with animated orbs */}
        <div 
          className="absolute inset-0"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        {/* Foreground parallax layer */}
        <div 
          className="absolute inset-0"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          {/* Animated gradient lines */}
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-pulse"
              style={{
                top: `${20 + i * 15}%`,
                left: 0,
                right: 0,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced floating geometric shapes */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Existing triangles with parallax */}
        <div 
          className="absolute top-20 left-10 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-purple-500/20 animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        />
        <div 
          className="absolute top-40 right-20 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent border-b-blue-500/30 animate-bounce"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        
        {/* New triangles */}
        <div 
          className="absolute bottom-40 left-1/3 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-cyan-500/25 animate-pulse"
          style={{ 
            transform: `translateY(${scrollY * 0.25}px) rotate(${scrollY * 0.1}deg)`,
            animationDelay: '1s'
          }}
        />
        
        {/* Enhanced circles with parallax */}
        <div 
          className="absolute bottom-32 left-16 w-12 h-12 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 animate-spin" 
          style={{ 
            animationDuration: '8s',
            transform: `translateY(${scrollY * 0.2}px)`
          }} 
        />
        <div 
          className="absolute top-1/3 right-12 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-500/30 animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.18}px)` }}
        />
        
        {/* New floating circles */}
        <div 
          className="absolute top-1/4 left-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500/25 to-blue-500/25 animate-bounce"
          style={{ 
            transform: `translateY(${scrollY * 0.12}px)`,
            animationDelay: '0.5s'
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/3 w-10 h-10 rounded-full bg-gradient-to-r from-purple-500/15 to-pink-500/15 animate-pulse"
          style={{ 
            transform: `translateY(${scrollY * 0.22}px)`,
            animationDelay: '1.5s'
          }}
        />
        
        {/* Enhanced squares with parallax */}
        <div 
          className="absolute bottom-20 right-1/4 w-6 h-6 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rotate-45 animate-spin" 
          style={{ 
            animationDuration: '6s',
            transform: `translateY(${scrollY * 0.16}px) rotate(${45 + scrollY * 0.05}deg)`
          }} 
        />
        
        {/* New squares and diamonds */}
        <div 
          className="absolute top-1/2 left-20 w-4 h-4 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rotate-45 animate-spin"
          style={{ 
            animationDuration: '10s',
            transform: `translateY(${scrollY * 0.14}px) rotate(${45 + scrollY * 0.08}deg)`,
            animationDirection: 'reverse'
          }}
        />
        <div 
          className="absolute bottom-1/3 left-1/4 w-8 h-8 bg-gradient-to-br from-pink-500/15 to-blue-500/15 rotate-45 animate-pulse"
          style={{ 
            transform: `translateY(${scrollY * 0.19}px) rotate(${45 + scrollY * 0.03}deg)`,
            animationDelay: '2s'
          }}
        />
        
        {/* Mouse follower with enhanced trail */}
        <div 
          className="absolute w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-60 transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 8,
            top: mousePosition.y - 8,
            transform: 'scale(1)',
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)'
          }}
        />
        
        {/* Secondary mouse follower */}
        <div 
          className="absolute w-2 h-2 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full opacity-40 transition-all duration-500 ease-out"
          style={{
            left: mousePosition.x - 1,
            top: mousePosition.y - 1,
            transform: 'scale(1.2)',
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
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}40`
            }}
          />
        ))}
        
        {/* Floating hexagons */}
        <div 
          className="absolute top-3/4 right-16 w-8 h-8 opacity-20"
          style={{ 
            transform: `translateY(${scrollY * 0.13}px) rotate(${scrollY * 0.06}deg)`,
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            background: 'linear-gradient(45deg, #8b5cf6, #3b82f6)'
          }}
        />
        <div 
          className="absolute top-1/6 left-3/4 w-6 h-6 opacity-15"
          style={{ 
            transform: `translateY(${scrollY * 0.17}px) rotate(${scrollY * 0.04}deg)`,
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            background: 'linear-gradient(45deg, #ec4899, #06b6d4)',
            animationDelay: '1s'
          }}
        />
      </div>

      {/* Enhanced background pattern with parallax */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-10"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          animation: 'pulse 4s ease-in-out infinite'
        }} />
      </div>
      
      {/* Additional decorative grid pattern */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-5"
        style={{ transform: `translateY(${scrollY * 0.08}px)` }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23a855f7' stroke-width='0.5' stroke-opacity='0.3'%3E%3Cpath d='M0 0h100v100H0z'/%3E%3Cpath d='M20 0v100M40 0v100M60 0v100M80 0v100M0 20h100M0 40h100M0 60h100M0 80h100'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
    </>
  );
};

export default StrikingEffects;
