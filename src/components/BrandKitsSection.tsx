
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

const brandKits = [
  { id: 1, name: 'ECorp', color: '#10b981', selected: false },
  { id: 2, name: 'ICorp', color: '#f59e0b', selected: false },
  { id: 3, name: 'The Agency', color: '#ef4444', selected: true },
  { id: 4, name: 'TechFlow', color: '#3b82f6', selected: false },
  { id: 5, name: 'DesignHub', color: '#8b5cf6', selected: false },
  { id: 6, name: 'CreativeSpace', color: '#06b6d4', selected: false },
];

const BrandKitsSection = () => {
  const [kits, setKits] = useState(brandKits);

  const toggleKit = (id: number) => {
    setKits(kits.map(kit => 
      kit.id === id ? { ...kit, selected: !kit.selected } : kit
    ));
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Brand Kits
        </h2>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20 rounded-3xl blur-xl"></div>
          <Card className="relative bg-gray-900/80 border-purple-500/30 rounded-3xl p-8 backdrop-blur-sm">
            <CardContent className="space-y-4">
              {kits.map((kit, index) => (
                <div
                  key={kit.id}
                  className="group flex items-center justify-between p-4 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 animate-fade-in hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => toggleKit(kit.id)}
                >
                  <div className="flex items-center space-x-4">
                    <Checkbox 
                      checked={kit.selected}
                      onChange={() => toggleKit(kit.id)}
                      className="data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500"
                    />
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-8 h-8 rounded-full"
                        style={{ backgroundColor: kit.color }}
                      ></div>
                      <span className="text-lg font-medium text-white">{kit.name}</span>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="w-1 h-4 bg-gray-600 rounded-full group-hover:bg-purple-400 transition-colors duration-300"></div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BrandKitsSection;
