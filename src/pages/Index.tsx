
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <div className="py-20 harmony-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-harmony-cyan mb-6">Who We Are</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Write a paragraph that talks about your company here. You can talk 
                about your company's background, history, mission, vision or 
                philosophy. Anything that will introduce your brand's persona to your 
                clients. This will help build a connection between you and them, that 
                hopefully leads into a working relationship.
              </p>
            </div>
            <div>
              <img
                src="/lovable-uploads/07122101-b5a7-48ff-9398-0848fafdde02.png"
                alt="Who we are"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <ServicesSection />
      <WhyChooseSection />
      <CTASection />
    </div>
  );
};

export default Index;
