
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="min-h-screen harmony-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-harmony-cyan rounded-full"></div>
        <div className="absolute top-40 right-20 w-20 h-20 border border-harmony-cyan rounded-full"></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 border border-harmony-cyan rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              IT Solutions
              <br />
              <span className="text-harmony-cyan">that transform</span>
              <br />
              your business
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Empowering businesses through insight, innovation, and intelligence. 
              We specialize in business consulting, market research, AI integration, 
              and strategic growth solutions.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-transparent border-2 border-harmony-cyan text-harmony-cyan hover:bg-harmony-cyan hover:text-white transition-all duration-300"
            >
              <Link to="/solutions">learn more</Link>
            </Button>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <img
              src="/lovable-uploads/c833d23d-2de1-48de-9ef6-c41f8edfa256.png"
              alt="Business transformation"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
