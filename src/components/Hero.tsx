
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const createRipple = (e: React.MouseEvent) => {
    const button = e.currentTarget as HTMLElement;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  };

  return (
    <>
      <style>{`
        .ripple {
          position: absolute;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.3);
          transform: scale(0);
          animation: ripple-animation 0.6s linear;
          pointer-events: none;
        }

        @keyframes ripple-animation {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent animate-pulse"></div>
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"
              style={{ left: `${i * 5}%` }}
            ></div>
          ))}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
              style={{ top: `${i * 5}%` }}
            ></div>
          ))}
        </div>

        {/* Floating Elements */}
        <div 
          className="absolute w-4 h-4 bg-purple-500 rounded-full opacity-60 animate-pulse"
          style={{
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
            transition: 'all 0.3s ease-out'
          }}
        ></div>
        <div 
          className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-40"
          style={{
            right: `${mousePosition.x * 0.01}px`,
            bottom: `${mousePosition.y * 0.01}px`,
            transition: 'all 0.5s ease-out'
          }}
        ></div>

        <div className="text-center z-10 px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-fade-in">
            Pixel Dust
          </h1>
          <h2 className="text-2xl md:text-4xl font-light mb-8 text-gray-300 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Artisan Forge
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '1s' }}>
            Crafting pixel-perfect experiences with a touch of magic. Where artisanal design meets cutting-edge technology.
          </p>
          <Button 
            onClick={createRipple}
            className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 animate-fade-in"
            style={{ animationDelay: '1.5s' }}
          >
            Explore Our Magic
            <span className="absolute inset-0 bg-white opacity-0 rounded-full transform scale-0 transition-all duration-500"></span>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Hero;
