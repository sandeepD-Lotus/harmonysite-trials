
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="min-h-screen harmony-gradient relative overflow-hidden">
      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-harmony-cyan to-transparent animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-20 pb-16 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="text-left animate-slide-in-right">
            <div className="stagger-animation">
              <h1 className="text-5xl leading-tight mb-6 lg:text-6xl font-medium text-slate-50">
                IT Solutions
                <br />
                <span className="text-harmony-cyan animate-glow">that transform</span>
                <br />
                your business
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Empowering businesses through insight, innovation, and intelligence. 
                We specialize in business consulting, market research, AI integration, 
                and strategic growth solutions.
              </p>
              <Button asChild size="lg" className="bg-transparent border-2 border-harmony-cyan text-harmony-cyan hover:bg-harmony-cyan hover:text-white transition-all duration-500 professional-button animate-glow">
                <Link to="/solutions">learn more</Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Vertical Rectangular Image */}
          <div className="relative animate-fade-in flex justify-center" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-[320px] md:w-[360px] lg:w-[400px] aspect-[4/5]">
              <img 
                src="lovable-uploads/executives-working-together-laptop.jpg" 
                alt="Business transformation vertical" 
                className="w-full h-full object-cover"
                style={{ borderRadius: '16px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
