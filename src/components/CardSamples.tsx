
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Code, Palette, Smartphone, Globe, Zap } from 'lucide-react';

const CardSamples = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Development",
      description: "Bespoke web applications built with cutting-edge technologies and pixel-perfect precision.",
      color: "from-blue-500 to-cyan-500",
      features: ["React & TypeScript", "Performance Optimized", "Scalable Architecture"]
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Stunning interfaces that captivate users and provide intuitive experiences across all touchpoints.",
      color: "from-purple-500 to-pink-500",
      features: ["User Research", "Prototyping", "Design Systems"]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Experience",
      description: "Responsive designs that look and feel perfect on every device, from phones to tablets.",
      color: "from-green-500 to-blue-500",
      features: ["Progressive Web Apps", "Touch Optimized", "Cross-Platform"]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Presence",
      description: "Complete digital solutions that establish your brand's online authority and drive engagement.",
      color: "from-orange-500 to-red-500",
      features: ["SEO Optimized", "Analytics Integration", "Content Strategy"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance",
      description: "Lightning-fast applications that provide exceptional user experiences without compromise.",
      color: "from-yellow-500 to-orange-500",
      features: ["Core Web Vitals", "Lazy Loading", "Caching Strategies"]
    },
    {
      icon: <ExternalLink className="h-8 w-8" />,
      title: "Integration",
      description: "Seamless connections with third-party services, APIs, and existing business systems.",
      color: "from-teal-500 to-blue-500",
      features: ["API Development", "Database Design", "Cloud Solutions"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions crafted with artisanal precision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border-0 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                hoveredCard === index ? 'z-10' : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Ripple effect on hover */}
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader className="relative z-10">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-blue-500 transition-all duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative z-10">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`} />
                      {feature}
                    </div>
                  ))}
                </div>

                <Button 
                  variant="ghost" 
                  className="w-full group-hover:bg-gradient-to-r group-hover:from-purple-600/20 group-hover:to-blue-600/20 transition-all duration-300"
                >
                  Learn More
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>

              {/* Floating particles effect */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-purple-500 rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-ping transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-40 group-hover:animate-pulse transition-opacity duration-300" style={{ animationDelay: '0.5s' }} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSamples;
