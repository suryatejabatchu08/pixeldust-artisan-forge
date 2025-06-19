
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import CardSamples from '@/components/CardSamples';
import CarouselSection from '@/components/CarouselSection';
import StrikingEffects from '@/components/StrikingEffects';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We dive deep into your vision, understanding your goals, target audience, and unique requirements."
    },
    {
      step: "02", 
      title: "Design & Prototype",
      description: "Creating wireframes, mockups, and interactive prototypes that bring your ideas to life."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Building your application with clean code, rigorous testing, and performance optimization."
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Deploying your project and providing ongoing support to ensure continued success."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <StrikingEffects />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-fade-in">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Comprehensive digital solutions that transform your vision into pixel-perfect reality
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <CarouselSection />
      <CardSamples />

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures your project's success from concept to launch
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-card/50 backdrop-blur-sm border border-border/40 rounded-lg p-6 h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="text-4xl font-bold text-purple-500 mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  <CheckCircle className="absolute top-4 right-4 h-5 w-5 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 h-6 w-6 text-purple-500 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
