
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
      <div className="h-screen sticky top-0 z-10">
        <HeroSection />
      </div>
      <div className="h-screen relative z-20">
        <IntroSection />
      <StatsSection />
      <ProcessSection />
      <CTASection />
      </div>
    </div>
  );
};

export default Index;
