
import { useState, useEffect } from 'react';

const ParallaxSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background layers with parallax effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-blue-900/20"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      
      <div 
        className="absolute inset-0 opacity-30"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Foreground content */}
      <div 
        className="relative z-10 h-full flex items-center justify-center text-center"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <h3 className="text-3xl md:text-5xl font-light text-gray-300 mb-12">
            The Magic of Motion
          </h3>
          <div className="relative">
            <div 
              className="w-32 h-32 mx-auto border-4 border-purple-500 rounded-full animate-spin"
              style={{ animationDuration: '10s' }}
            />
            <div 
              className="absolute top-4 left-1/2 transform -translate-x-1/2 w-24 h-24 border-4 border-blue-500 rounded-full animate-spin"
              style={{ animationDuration: '8s', animationDirection: 'reverse' }}
            />
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div 
        className="absolute top-20 left-10 w-4 h-4 bg-purple-500 rounded-full opacity-60"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      />
      <div 
        className="absolute bottom-32 right-16 w-6 h-6 bg-blue-500 rounded-full opacity-40"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      />
      <div 
        className="absolute top-1/2 left-20 w-2 h-2 bg-pink-500 rounded-full opacity-80"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      />
    </section>
  );
};

export default ParallaxSection;
