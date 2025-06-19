
import { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CarouselSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Pixel Perfect Design",
      description: "Crafting beautiful interfaces with attention to every detail",
      color: "from-purple-600 to-blue-600",
      icon: "🎨"
    },
    {
      title: "Magical Animations",
      description: "Bringing your ideas to life with smooth, engaging animations",
      color: "from-pink-600 to-purple-600",
      icon: "✨"
    },
    {
      title: "Responsive Excellence",
      description: "Ensuring perfect experiences across all devices and screen sizes",
      color: "from-blue-600 to-cyan-600",
      icon: "📱"
    },
    {
      title: "Performance Optimized",
      description: "Lightning-fast loading times without compromising on beauty",
      color: "from-green-600 to-blue-600",
      icon: "⚡"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-background to-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Our Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover what makes us the artisans of digital excellence
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index}>
                  <Card className="border-0 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm">
                    <CardContent className="p-12 text-center">
                      <div className="text-6xl mb-6 animate-bounce">{slide.icon}</div>
                      <h3 className={`text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r ${slide.color} bg-clip-text text-transparent`}>
                        {slide.title}
                      </h3>
                      <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        {slide.description}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border-border/40" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border-border/40" />
          </Carousel>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500' 
                    : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
