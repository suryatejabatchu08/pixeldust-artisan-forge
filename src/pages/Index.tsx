
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BrandKitsSection from '@/components/BrandKitsSection';
import FeaturesSection from '@/components/FeaturesSection';
import CustomerSection from '@/components/CustomerSection';
import ParallaxSection from '@/components/ParallaxSection';
import CarouselSection from '@/components/CarouselSection';
import CardSamples from '@/components/CardSamples';
import StrikingEffects from '@/components/StrikingEffects';
import ScrollPopup from '@/components/ScrollPopup';
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
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StrikingEffects />
      <ScrollPopup />
      <Navbar />
      <Hero />
      <CarouselSection />
      <BrandKitsSection />
      <FeaturesSection />
      <CardSamples />
      <CustomerSection />
      <ParallaxSection />
    </div>
  );
};

export default Index;
