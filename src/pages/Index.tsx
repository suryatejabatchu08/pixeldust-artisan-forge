
import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import BrandKitsSection from '@/components/BrandKitsSection';
import FeaturesSection from '@/components/FeaturesSection';
import CustomerSection from '@/components/CustomerSection';
import ParallaxSection from '@/components/ParallaxSection';
import Loader from '@/components/Loader';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Hero />
      <BrandKitsSection />
      <FeaturesSection />
      <CustomerSection />
      <ParallaxSection />
    </div>
  );
};

export default Index;
