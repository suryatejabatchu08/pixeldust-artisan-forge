
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    title: 'Pixel Perfect Design',
    description: 'Meticulously crafted interfaces with attention to every detail',
    icon: '🎨',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Magic Interactions',
    description: 'Delightful animations and micro-interactions that enchant users',
    icon: '✨',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Artisan Quality',
    description: 'Handcrafted components built with passion and precision',
    icon: '🔨',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Responsive Magic',
    description: 'Seamless experiences across all devices and screen sizes',
    icon: '📱',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    title: 'Performance First',
    description: 'Lightning-fast loading with optimized code and assets',
    icon: '⚡',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    title: 'Future Ready',
    description: 'Built with cutting-edge technologies and best practices',
    icon: '🚀',
    gradient: 'from-indigo-500 to-purple-500'
  }
];

const FeaturesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Features & Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative bg-gray-900/50 border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg`}></div>
              
              <CardHeader>
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl text-white group-hover:text-purple-300 transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </CardContent>

              {hoveredIndex === index && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-2 right-2 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-2 left-2 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
