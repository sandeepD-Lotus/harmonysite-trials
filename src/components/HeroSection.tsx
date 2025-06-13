import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const HeroSection = () => {
  return <section className="min-h-screen harmony-gradient relative overflow-hidden">
      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-harmony-cyan to-transparent animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
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

          {/* Right Content - Image */}
          <div className="relative animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            <div className="relative group">
              <img src="/lovable-uploads/Hands_on_a_laptop_keyboard_(Unsplash).jpg" alt="Business transformation" className="w-full h-auto rounded-lg shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-harmony-cyan/30" />
              {/* Floating overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-harmony-cyan/20 to-harmony-teal/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;