
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Creative Director',
    company: 'DesignCorp',
    content: 'The attention to detail is extraordinary. Every pixel is perfectly placed.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b547'
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'TechFlow',
    content: 'Magical interactions that truly delight our users. Outstanding work!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
  },
  {
    name: 'Emily Rodriguez',
    role: 'UX Designer',
    company: 'InnovateLabs',
    content: 'The quality of craftsmanship is unmatched. Truly artisanal work.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
  }
];

const CustomerSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('customer-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="customer-section" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          What Our Customers Say
        </h2>
        
        <div className="relative h-80">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`absolute inset-0 bg-gray-900/80 border-purple-500/30 transition-all duration-700 transform ${
                index === currentIndex
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-4 scale-95'
              } ${isVisible ? 'animate-fade-in' : ''}`}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <img
                    src={`${testimonial.avatar}?w=100&h=100&fit=crop&crop=face`}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-purple-500"
                  />
                  <p className="text-xl text-gray-300 italic mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-purple-400">{testimonial.role}</p>
                    <p className="text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-purple-500 scale-125'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerSection;
