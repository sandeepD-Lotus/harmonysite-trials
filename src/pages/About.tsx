
import React from 'react';
import Navigation from '@/components/Navigation';

const About = () => {
  return (
    <div className="min-h-screen harmony-gradient">
      <Navigation />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-harmony-cyan mb-6">About Harmony</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Empowering businesses through insight, innovation, and intelligence since our founding.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-harmony-navy/50 p-8 rounded-lg border border-harmony-cyan/30">
              <h2 className="text-3xl font-bold text-harmony-cyan mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To empower businesses with transformative technology solutions that drive growth, 
                efficiency, and competitive advantage. We are committed to delivering innovative 
                consulting services that bridge the gap between technology and business strategy.
              </p>
            </div>
            
            <div className="bg-harmony-navy/50 p-8 rounded-lg border border-harmony-cyan/30">
              <h2 className="text-3xl font-bold text-harmony-cyan mb-6">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be the leading global consulting partner for businesses seeking digital 
                transformation and sustainable growth. We envision a future where every 
                organization can harness the full potential of technology and data-driven insights.
              </p>
            </div>
          </div>

          {/* Company Story */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-harmony-cyan mb-8 text-center">Our Story</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Founded with a vision to transform how businesses leverage technology, Harmony Consulting 
                Solutions has grown from a small team of passionate consultants to a global leader in 
                business transformation and technology integration.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Our journey began when we recognized the growing gap between rapid technological advancement 
                and businesses' ability to effectively implement and utilize these innovations. We set out 
                to bridge this gap by providing comprehensive consulting services that combine deep technical 
                expertise with strategic business acumen.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Today, we serve clients across various industries, helping them navigate digital transformation, 
                implement AI solutions, optimize their operations, and achieve sustainable growth in an 
                increasingly competitive marketplace.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div>
            <h2 className="text-4xl font-bold text-harmony-cyan mb-12 text-center">Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((member) => (
                <div key={member} className="text-center">
                  <div className="w-32 h-32 bg-harmony-navy rounded-full mx-auto mb-4 border-2 border-harmony-cyan flex items-center justify-center">
                    <span className="text-harmony-cyan text-2xl font-bold">
                      {member === 1 ? 'CEO' : member === 2 ? 'CTO' : 'COO'}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {member === 1 ? 'Sarah Johnson' : member === 2 ? 'Michael Chen' : 'Emily Rodriguez'}
                  </h3>
                  <p className="text-harmony-cyan font-medium mb-3">
                    {member === 1 ? 'Chief Executive Officer' : member === 2 ? 'Chief Technology Officer' : 'Chief Operations Officer'}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {member === 1 
                      ? 'Visionary leader with 15+ years in strategic consulting and business transformation.'
                      : member === 2 
                      ? 'Technology expert specializing in AI, cloud computing, and digital innovation.'
                      : 'Operations specialist focused on process optimization and client success.'
                    }
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
