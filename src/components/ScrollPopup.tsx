
import { useState, useEffect } from 'react';
import { X, Star, Zap, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ScrollPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercent > 60 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-background border border-border/40 rounded-lg p-8 m-4 max-w-md w-full shadow-2xl animate-scale-in">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center">
          <div className="flex justify-center space-x-2 mb-4">
            <Star className="h-6 w-6 text-yellow-500 animate-pulse" />
            <Zap className="h-6 w-6 text-blue-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
            <Heart className="h-6 w-6 text-red-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
          
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Loving Our Work?
          </h3>
          
          <p className="text-muted-foreground mb-6">
            You've scrolled this far! Ready to bring your vision to life with our magical touch?
          </p>
          
          <div className="space-y-3">
            <Button 
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              onClick={() => setIsVisible(false)}
            >
              Let's Create Magic Together
            </Button>
            <Button 
              variant="ghost" 
              className="w-full"
              onClick={() => setIsVisible(false)}
            >
              Continue Exploring
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollPopup;
