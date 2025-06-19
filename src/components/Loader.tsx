
import { useEffect, useState } from 'react';

const Loader = () => {
  const [progress, setProgress] = useState(0);

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

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative">
          <div className="w-32 h-32 border-4 border-gray-800 rounded-full"></div>
          <div 
            className="absolute top-0 left-0 w-32 h-32 border-4 border-purple-500 rounded-full transition-all duration-300 ease-out"
            style={{
              clipPath: `polygon(50% 50%, 50% 0%, ${50 + Math.cos((progress * 3.6 - 90) * Math.PI / 180) * 50}% ${50 + Math.sin((progress * 3.6 - 90) * Math.PI / 180) * 50}%, 50% 50%)`
            }}
          ></div>
        </div>
        <div className="mt-8">
          <div className="text-4xl font-bold text-white mb-4">
            {String(progress).padStart(3, '0')}
          </div>
          <div className="w-64 h-1 bg-gray-800 rounded">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
