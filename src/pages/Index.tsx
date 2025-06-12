
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      
      {/* Harmony Introduction Section */}
      <div className="py-20 harmony-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-harmony-cyan mb-6">Who We Are</h2>
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

      {/* What We Offer Section */}
      <section className="py-20 harmony-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-harmony-cyan mb-6">What We Offer</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions designed to transform your business and drive growth through innovation and strategic excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 border border-harmony-cyan/30 rounded-lg hover:border-harmony-cyan transition-all duration-300">
              <div className="w-16 h-16 bg-harmony-cyan rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">BC</span>
              </div>
              <h3 className="text-xl font-semibold text-harmony-cyan mb-3">Business Consulting</h3>
              <p className="text-gray-300 text-sm">Strategic guidance and operational excellence</p>
            </div>
            
            <div className="text-center p-6 border border-harmony-cyan/30 rounded-lg hover:border-harmony-cyan transition-all duration-300">
              <div className="w-16 h-16 bg-harmony-cyan rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">MR</span>
              </div>
              <h3 className="text-xl font-semibold text-harmony-cyan mb-3">Market Research</h3>
              <p className="text-gray-300 text-sm">Data-driven insights and analytics</p>
            </div>
            
            <div className="text-center p-6 border border-harmony-cyan/30 rounded-lg hover:border-harmony-cyan transition-all duration-300">
              <div className="w-16 h-16 bg-harmony-cyan rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <h3 className="text-xl font-semibold text-harmony-cyan mb-3">AI Integration</h3>
              <p className="text-gray-300 text-sm">Cutting-edge artificial intelligence solutions</p>
            </div>
            
            <div className="text-center p-6 border border-harmony-cyan/30 rounded-lg hover:border-harmony-cyan transition-all duration-300">
              <div className="w-16 h-16 bg-harmony-cyan rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">SG</span>
              </div>
              <h3 className="text-xl font-semibold text-harmony-cyan mb-3">Strategic Growth</h3>
              <p className="text-gray-300 text-sm">Scalable solutions for sustainable expansion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Financial Insights Section */}
      <section className="py-20 harmony-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-harmony-cyan mb-6">Global Financial Insights</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead with our comprehensive market analysis and financial intelligence across global markets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-harmony-navy/50 p-8 rounded-lg border border-harmony-cyan/30">
              <h3 className="text-2xl font-bold text-harmony-cyan mb-4">Market Trends</h3>
              <p className="text-gray-300 mb-4">Real-time analysis of global market movements and emerging opportunities.</p>
              <div className="text-3xl font-bold text-white">95%</div>
              <div className="text-harmony-cyan text-sm">Accuracy Rate</div>
            </div>
            
            <div className="bg-harmony-navy/50 p-8 rounded-lg border border-harmony-cyan/30">
              <h3 className="text-2xl font-bold text-harmony-cyan mb-4">Investment Insights</h3>
              <p className="text-gray-300 mb-4">Strategic investment recommendations backed by comprehensive research.</p>
              <div className="text-3xl font-bold text-white">$2.5B+</div>
              <div className="text-harmony-cyan text-sm">Assets Analyzed</div>
            </div>
            
            <div className="bg-harmony-navy/50 p-8 rounded-lg border border-harmony-cyan/30">
              <h3 className="text-2xl font-bold text-harmony-cyan mb-4">Risk Assessment</h3>
              <p className="text-gray-300 mb-4">Advanced risk modeling and mitigation strategies for informed decisions.</p>
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-harmony-cyan text-sm">Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />
      <WhyChooseSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
