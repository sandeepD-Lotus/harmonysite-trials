
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';

const Strategy = () => {
  const strategies = [
    {
      title: "Digital Strategy Framework",
      description: "Comprehensive digital transformation roadmaps tailored to your industry and business model.",
      expertise: ["Digital Maturity Assessment", "Technology Roadmapping", "Change Management", "ROI Optimization"]
    },
    {
      title: "Growth Strategy Development",
      description: "Strategic planning for sustainable business expansion and market penetration.",
      expertise: ["Market Analysis", "Competitive Positioning", "Revenue Optimization", "Scale Planning"]
    },
    {
      title: "Innovation Strategy",
      description: "Building innovation capabilities to stay ahead in rapidly evolving markets.",
      expertise: ["Innovation Frameworks", "R&D Strategy", "Technology Adoption", "Future-Proofing"]
    }
  ];

  return (
    <div className="min-h-screen harmony-gradient">
      <Navigation />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-harmony-cyan mb-6">Business Strategy</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic expertise to navigate complex business challenges and unlock sustainable growth opportunities in today's dynamic marketplace.
            </p>
          </div>

          {/* Strategy Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold text-harmony-cyan mb-6">Strategic Excellence</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Our strategic consulting approach combines deep industry knowledge with innovative methodologies 
                to deliver actionable insights and sustainable competitive advantages.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                We work closely with leadership teams to develop and implement strategies that align with 
                organizational goals, market opportunities, and technological capabilities.
              </p>
            </div>
            <div className="bg-harmony-navy/50 p-8 rounded-lg border border-harmony-cyan/30">
              <h3 className="text-2xl font-bold text-harmony-cyan mb-4">Our Approach</h3>
              <ul className="space-y-3">
                {[
                  "Data-driven analysis and insights",
                  "Collaborative strategy development",
                  "Implementation roadmapping",
                  "Continuous monitoring and optimization",
                  "Risk assessment and mitigation",
                  "Stakeholder alignment and communication"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-harmony-cyan rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Strategy Services */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-harmony-cyan mb-12 text-center">Strategy Services</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {strategies.map((strategy, index) => (
                <Card key={index} className="bg-harmony-navy/50 border border-harmony-cyan/30 hover:border-harmony-cyan transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-harmony-cyan mb-4">
                      {strategy.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {strategy.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold mb-3">Core Expertise:</h4>
                      {strategy.expertise.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-harmony-cyan rounded-full mr-3"></div>
                          <span className="text-gray-300 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Methodology */}
          <div>
            <h2 className="text-4xl font-bold text-harmony-cyan mb-12 text-center">Strategic Methodology</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  phase: "Assess", 
                  description: "Current state analysis and opportunity identification",
                  icon: "🔍"
                },
                { 
                  phase: "Design", 
                  description: "Strategic framework development and scenario planning",
                  icon: "📋"
                },
                { 
                  phase: "Execute", 
                  description: "Implementation planning and change management",
                  icon: "⚡"
                },
                { 
                  phase: "Monitor", 
                  description: "Performance tracking and continuous optimization",
                  icon: "📊"
                }
              ].map((phase, index) => (
                <div key={index} className="text-center p-6 rounded-lg border border-harmony-cyan/30">
                  <div className="text-4xl mb-4">{phase.icon}</div>
                  <h3 className="text-xl font-semibold text-harmony-cyan mb-3">{phase.phase}</h3>
                  <p className="text-gray-300 text-sm">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategy;
