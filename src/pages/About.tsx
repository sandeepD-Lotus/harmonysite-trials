
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

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

          <div className="mb-20">
            <h2 className="text-4xl font-bold text-harmony-cyan mb-8 text-center">Company Overview</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Harmony Consulting Solutions is a leading global consulting firm that specializes in transforming 
                businesses through strategic innovation and intelligent solutions. Founded on the principles of 
                insight, innovation, and intelligence, we have established ourselves as trusted partners for 
                organizations seeking sustainable growth and competitive advantage.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Our comprehensive approach combines deep industry expertise with cutting-edge technology to deliver 
                customized solutions that address our clients' most complex challenges. From business consulting 
                and market research to AI integration and strategic growth planning, we provide the tools and 
                insights necessary for long-term success.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                With a global presence and a team of seasoned professionals, Harmony Consulting Solutions continues 
                to set new standards in the consulting industry, helping organizations navigate the complexities 
                of today's rapidly evolving business landscape.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-harmony-navy/50 p-8 rounded-lg border border-harmony-cyan/30">
              <h2 className="text-3xl font-bold text-harmony-cyan mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To empower businesses with transformative solutions that drive growth, efficiency, and competitive 
                advantage. We are committed to delivering innovative consulting services that bridge the gap between 
                technology and business strategy, enabling our clients to achieve sustainable success in an 
                increasingly complex marketplace.
              </p>
            </div>
            
            <div className="bg-harmony-navy/50 p-8 rounded-lg border border-harmony-cyan/30">
              <h2 className="text-3xl font-bold text-harmony-cyan mb-6">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be the leading global consulting partner for businesses seeking digital transformation and 
                sustainable growth. We envision a future where every organization can harness the full potential 
                of technology, data-driven insights, and strategic innovation to create lasting value for their 
                stakeholders and communities.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold text-harmony-cyan mb-12 text-center">Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Martha Blevins',
                  role: 'Chief Executive Officer',
                  image: 'lovable-uploads/Screenshot_11.jpg',
                  bio: 'Visionary leader with 15+ years in strategic consulting and business transformation. Martha has led over 200 successful digital transformation projects across Fortune 500 companies.'
                },
                {
                  name: 'Michael Chen',
                  role: 'Chief Technology Officer',
                  image: 'lovable-uploads/Screenshot_14.jpg',
                  bio: 'Technology expert specializing in AI, cloud computing, and digital innovation. Michael holds multiple patents in machine learning and has published extensively in tech journals.'
                },
                {
                  name: 'Emily Rodriguez',
                  role: 'Chief Operations Officer',
                  image: 'lovable-uploads/Screenshot_19.jpg',
                  bio: 'Operations specialist focused on process optimization and client success. Emily has streamlined operations for over 100 organizations, improving efficiency by an average of 40%.'
                }
              ].map((member, index) => (
                <div key={index} className="text-center bg-harmony-navy/50 p-8 rounded-lg border border-harmony-cyan/30">
                  <div className="w-48 h-48 lg:w-56 lg:h-56 mx-auto mb-6 overflow-hidden rounded-full border-4 border-harmony-cyan">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=224&background=00FFFF&color=1a365d&bold=true`;
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-harmony-cyan font-medium mb-4">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-harmony-cyan mb-12 text-center">Our Trusted Business Clients</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  name: 'Fortune 500 Manufacturing Corp',
                  image: 'lovable-uploads/Screenshot_15.jpg'
                },
                {
                  name: 'Global Tech Solutions Inc',
                  image: 'lovable-uploads/Screenshot_16.jpg'
                },
                {
                  name: 'Healthcare Innovation Group',
                  image: 'lovable-uploads/Screenshot_17.jpg'
                },
                {
                  name: 'Financial Services Alliance',
                  image: 'lovable-uploads/Screenshot_18.jpg'
                }
              ].map((client, index) => (
                <div key={index} className="text-center p-6 border border-harmony-cyan/30 rounded-lg hover:border-harmony-cyan transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 overflow-hidden rounded-full border-2 border-harmony-cyan">
                    <img 
                      src={client.image} 
                      alt={client.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-300 text-sm font-medium">{client.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
