
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

          {/* About Us Section with Images */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-harmony-cyan mb-12 text-center">About Us</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Lotus Wave is the fastest-growing IT Solutions provider focusing on Omnichannel and Digital first 
                  approaches. We partner with our clients' innovation teams using our in-depth understanding of the 
                  constantly evolving digital landscape, consumer behavior, and established and emerging technology.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  We provide solutions for IT Projects from inception to production support (i.e., Design, 
                  Development, QA testing and automation, DevOps, Production Support, and Release management).
                </p>
                <p className="text-blue-400 text-lg font-semibold">
                  We serve from the startups to the Fortune 500's of the world.
                </p>
              </div>
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-lg border border-harmony-cyan/30 hover:border-harmony-cyan transition-all duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=300&fit=crop&crop=center"
                    alt="Business meeting and collaboration"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-harmony-navy/20"></div>
                </div>
                <div className="relative overflow-hidden rounded-lg border border-harmony-cyan/30 hover:border-harmony-cyan transition-all duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=300&fit=crop&crop=center"
                    alt="Team collaboration and innovation"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-harmony-navy/20"></div>
                </div>
              </div>
            </div>
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
                  image: 'lovable-uploads/Screenshot_10.jpg',
                  bio: 'Technology expert specializing in AI, cloud computing, and digital innovation. Michael holds multiple patents in machine learning and has published extensively in tech journals.'
                },
                {
                  name: 'Emily Rodriguez',
                  role: 'Chief Operations Officer',
                  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
                  bio: 'Operations specialist focused on process optimization and client success. Emily has streamlined operations for over 100 organizations, improving efficiency by an average of 40%.'
                }
              ].map((member, index) => (
                <div key={index} className="text-center bg-harmony-navy/50 p-8 rounded-lg border border-harmony-cyan/30">
                  <div className="w-40 h-40 lg:w-48 lg:h-48 mx-auto mb-6 overflow-hidden rounded-full border-4 border-harmony-cyan">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=192&background=00FFFF&color=1a365d&bold=true`;
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
                  image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop&crop=center'
                },
                {
                  name: 'Global Tech Solutions Inc',
                  image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=400&fit=crop&crop=center'
                },
                {
                  name: 'Healthcare Innovation Group',
                  image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop&crop=center'
                },
                {
                  name: 'Financial Services Alliance',
                  image: 'https://images.unsplash.com/photo-1501286353178-1ec881214838?w=400&h=400&fit=crop&crop=center'
                },
                {
                  name: 'Renewable Energy Consortium',
                  image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop&crop=center'
                },
                {
                  name: 'Retail Excellence Network',
                  image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop&crop=center'
                },
                {
                  name: 'Transportation Systems Ltd',
                  image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=400&fit=crop&crop=center'
                },
                {
                  name: 'Education Technology Partners',
                  image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop&crop=center'
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
