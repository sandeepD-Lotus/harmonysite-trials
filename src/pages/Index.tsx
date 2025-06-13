
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { Briefcase, BarChart3, Cpu, TrendingUp } from 'lucide-react';

const Index = () => {
  return <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      
      {/* Harmony Introduction Section */}
      <div className="py-20 harmony-gradient relative">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/businessman-hand-laptop-keyboard_59286-1503.jpg" 
            alt="Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-harmony-dark/80 via-harmony-navy/70 to-harmony-teal/60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl text-harmony-cyan mb-6 font-normal">Who We Are</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Harmony Consulting Solutions empowers businesses through insight, innovation, and intelligence. 
                We specialize in business consulting, market research, AI integration, and strategic growth solutions 
                to help organizations achieve sustainable growth and long-term success.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our team of experts brings decades of combined experience in transforming businesses across 
                various industries, leveraging cutting-edge technology and proven methodologies to deliver 
                exceptional results for our clients.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What We Offer Section */}
      <section className="py-20 harmony-gradient relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-harmony-cyan mb-6">What We Offer</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions designed to transform your business and drive growth through innovation and strategic excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
            <div className="text-center p-6 border border-harmony-cyan/30 rounded-lg hover:border-harmony-cyan transition-all duration-300 professional-card group">
              <div className="w-16 h-16 bg-harmony-cyan rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow">
                <Briefcase className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-harmony-cyan mb-3">Business Consulting</h3>
              <p className="text-gray-300 text-sm">Strategic guidance and operational excellence</p>
            </div>
            
            <div className="text-center p-6 border border-harmony-cyan/30 rounded-lg hover:border-harmony-cyan transition-all duration-300 professional-card group">
              <div className="w-16 h-16 bg-harmony-cyan rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow">
                <BarChart3 className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-harmony-cyan mb-3">Market Research</h3>
              <p className="text-gray-300 text-sm">Data-driven insights and analytics</p>
            </div>
            
            <div className="text-center p-6 border border-harmony-cyan/30 rounded-lg hover:border-harmony-cyan transition-all duration-300 professional-card group">
              <div className="w-16 h-16 bg-harmony-cyan rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow">
                <Cpu className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-harmony-cyan mb-3">AI Integration</h3>
              <p className="text-gray-300 text-sm">Cutting-edge artificial intelligence solutions</p>
            </div>
            
            <div className="text-center p-6 border border-harmony-cyan/30 rounded-lg hover:border-harmony-cyan transition-all duration-300 professional-card group">
              <div className="w-16 h-16 bg-harmony-cyan rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-harmony-cyan mb-3">Strategic Growth</h3>
              <p className="text-gray-300 text-sm">Scalable solutions for sustainable expansion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Financial Insights Section */}
      <section className="py-20 harmony-gradient relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-harmony-cyan mb-6">Global Financial Insights</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead with our comprehensive market analysis and financial intelligence across global markets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-animation">
            <div className="bg-harmony-navy/50 p-8 rounded-lg border border-harmony-cyan/30 professional-card group">
              <h3 className="text-2xl font-bold text-harmony-cyan mb-4 group-hover:scale-105 transition-transform duration-300">Market Trends</h3>
              <p className="text-gray-300 mb-4">Real-time analysis of global market movements and emerging opportunities.</p>
              <div className="text-3xl font-bold text-white animate-glow">95%</div>
              <div className="text-harmony-cyan text-sm">Accuracy Rate</div>
            </div>
            
            <div className="bg-harmony-navy/50 p-8 rounded-lg border border-harmony-cyan/30 professional-card group">
              <h3 className="text-2xl font-bold text-harmony-cyan mb-4 group-hover:scale-105 transition-transform duration-300">Investment Insights</h3>
              <p className="text-gray-300 mb-4">Strategic investment recommendations backed by comprehensive research.</p>
              <div className="text-3xl font-bold text-white animate-glow">$2.5B+</div>
              <div className="text-harmony-cyan text-sm">Assets Analyzed</div>
            </div>
            
            <div className="bg-harmony-navy/50 p-8 rounded-lg border border-harmony-cyan/30 professional-card group">
              <h3 className="text-2xl font-bold text-harmony-cyan mb-4 group-hover:scale-105 transition-transform duration-300">Risk Assessment</h3>
              <p className="text-gray-300 mb-4">Advanced risk modeling and mitigation strategies for informed decisions.</p>
              <div className="text-3xl font-bold text-white animate-glow">24/7</div>
              <div className="text-harmony-cyan text-sm">Monitoring</div>
            </div>
          </div>
        </div>
        
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 50px,
                rgba(0, 255, 255, 0.1) 50px,
                rgba(0, 255, 255, 0.1) 51px
              ),
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 50px,
                rgba(0, 255, 255, 0.1) 50px,
                rgba(0, 255, 255, 0.1) 51px
              )`
        }}></div>
        </div>
      </section>

      <ServicesSection />
      <WhyChooseSection />
      <CTASection />
      <Footer />
    </div>;
};

export default Index;
