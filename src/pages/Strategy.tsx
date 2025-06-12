
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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

  const caseStudies = [
    {
      title: "Global Manufacturing Transformation",
      industry: "Manufacturing",
      challenge: "Outdated systems and processes limiting growth",
      solution: "Comprehensive digital transformation and AI integration",
      results: ["40% increase in operational efficiency", "25% reduction in costs", "60% faster time-to-market"],
      testimonial: "Harmony's strategic approach transformed our entire operation. The results exceeded our expectations."
    },
    {
      title: "Healthcare Innovation Initiative",
      industry: "Healthcare",
      challenge: "Need for patient care optimization and data integration",
      solution: "AI-powered analytics and process optimization",
      results: ["30% improvement in patient outcomes", "50% reduction in administrative tasks", "20% cost savings"],
      testimonial: "The innovative solutions provided by Harmony revolutionized our patient care delivery."
    },
    {
      title: "Financial Services Modernization",
      industry: "Financial Services",
      challenge: "Legacy systems and compliance requirements",
      solution: "Cloud migration and regulatory compliance framework",
      results: ["99.9% system uptime", "35% faster transaction processing", "100% compliance achievement"],
      testimonial: "Harmony guided us through a complex modernization while maintaining full compliance."
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
              Strategic expertise to navigate complex business challenges and unlock sustainable growth opportunities 
              in today's dynamic marketplace.
            </p>
          </div>

          {/* Strategic Overview with Charts */}
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
              <h3 className="text-2xl font-bold text-harmony-cyan mb-6">Success Metrics</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Client Satisfaction</span>
                    <span className="text-harmony-cyan font-bold">98%</span>
                  </div>
                  <div className="w-full bg-harmony-navy rounded-full h-2">
                    <div className="bg-harmony-cyan h-2 rounded-full" style={{width: '98%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Project Success Rate</span>
                    <span className="text-harmony-cyan font-bold">95%</span>
                  </div>
                  <div className="w-full bg-harmony-navy rounded-full h-2">
                    <div className="bg-harmony-cyan h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">ROI Achievement</span>
                    <span className="text-harmony-cyan font-bold">340%</span>
                  </div>
                  <div className="w-full bg-harmony-navy rounded-full h-2">
                    <div className="bg-harmony-cyan h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
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

          {/* Featured Projects / Case Studies */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-harmony-cyan mb-12 text-center">Featured Projects & Case Studies</h2>
            <div className="space-y-8">
              {caseStudies.map((study, index) => (
                <Card key={index} className="bg-harmony-navy/50 border border-harmony-cyan/30">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <div className="flex items-center gap-4 mb-4">
                          <h3 className="text-2xl font-bold text-harmony-cyan">{study.title}</h3>
                          <span className="px-3 py-1 bg-harmony-cyan/20 text-harmony-cyan text-sm rounded-full">
                            {study.industry}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                            <p className="text-gray-300 text-sm">{study.challenge}</p>
                          </div>
                          <div>
                            <h4 className="text-white font-semibold mb-2">Solution:</h4>
                            <p className="text-gray-300 text-sm">{study.solution}</p>
                          </div>
                        </div>
                        
                        <div className="mt-6">
                          <blockquote className="text-gray-300 italic border-l-4 border-harmony-cyan pl-4">
                            "{study.testimonial}"
                          </blockquote>
                        </div>
                      </div>
                      
                      <div className="bg-harmony-navy p-6 rounded-lg">
                        <h4 className="text-white font-semibold mb-4">Key Results:</h4>
                        <div className="space-y-3">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-center">
                              <div className="w-2 h-2 bg-harmony-cyan rounded-full mr-3"></div>
                              <span className="text-gray-300 text-sm">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Methodology */}
          <div className="mb-20">
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

          {/* CTA to Services or Contact */}
          <div className="text-center">
            <Card className="bg-harmony-navy/50 border border-harmony-cyan/30 max-w-4xl mx-auto">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold text-harmony-cyan mb-6">Ready to Develop Your Strategy?</h3>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Let's discuss how our strategic expertise can drive your organization's growth and competitive advantage.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-harmony-cyan hover:bg-harmony-cyan/80 text-white px-8 py-3 text-lg"
                  >
                    <Link to="/connect">Start Strategy Consultation</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-harmony-cyan text-harmony-cyan hover:bg-harmony-cyan hover:text-white px-8 py-3 text-lg"
                  >
                    <Link to="/solutions">Explore Our Services</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Strategy;
