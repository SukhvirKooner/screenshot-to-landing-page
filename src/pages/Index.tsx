
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import IntroSection from '@/components/IntroSection';
import StatsSection from '@/components/StatsSection';
import ProcessSection from '@/components/ProcessSection';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <IntroSection />
      <StatsSection />
      <ProcessSection />
      <CTASection />
    </div>
  );
};

export default Index;
