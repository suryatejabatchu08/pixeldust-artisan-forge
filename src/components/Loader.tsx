
import { useEffect, useState } from 'react';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [displayText, setDisplayText] = useState('');
  
  const loadingTexts = [
    'Crafting pixels...',
    'Weaving magic...',
    'Polishing details...',
    'Adding sparkle...',
    'Almost ready...'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const textIndex = Math.floor((progress / 100) * loadingTexts.length);
    setDisplayText(loadingTexts[Math.min(textIndex, loadingTexts.length - 1)]);
  }, [progress]);

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-8">
          {/* Outer circle */}
          <div className="w-32 h-32 border-4 border-border rounded-full"></div>
          
          {/* Progress circle */}
          <div 
            className="absolute top-0 left-0 w-32 h-32 border-4 border-purple-500 rounded-full transition-all duration-300 ease-out"
            style={{
              clipPath: `polygon(50% 50%, 50% 0%, ${50 + Math.cos((progress * 3.6 - 90) * Math.PI / 180) * 50}% ${50 + Math.sin((progress * 3.6 - 90) * Math.PI / 180) * 50}%, 50% 50%)`
            }}
          ></div>
          
          {/* Inner glow */}
          <div className="absolute top-2 left-2 w-28 h-28 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full animate-pulse" />
          
          {/* Center icon */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse" />
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="text-4xl font-bold text-foreground mb-2">
            {String(progress).padStart(3, '0')}%
          </div>
          
          {/* Progress bar */}
          <div className="w-64 h-2 bg-border rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-300 relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full" />
            </div>
          </div>
          
          {/* Loading text */}
          <div className="text-muted-foreground text-lg animate-pulse">
            {displayText}
          </div>
          
          {/* Floating particles */}
          <div className="relative h-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-purple-500 rounded-full animate-bounce"
                style={{
                  left: `${20 + i * 15}%`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '1.5s'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
