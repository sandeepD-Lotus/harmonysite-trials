
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-20 harmony-gradient relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-harmony-cyan mb-8 leading-tight">
            Driving Smarter Decisions for Sustainable Business Growth<br />
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge solutions? 
            Let's discuss how Harmony Consulting can drive your success.
          </p>
          
          <Button
            asChild
            size="lg"
            className="bg-harmony-cyan hover:bg-harmony-cyan/80 text-white px-8 py-3 text-lg"
          >
            <Link to="/connect">Get Started Today</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
