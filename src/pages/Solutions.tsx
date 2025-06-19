
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, TrendingUp, Brain, Smartphone, Target, Settings } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      title: "Business Consulting",
      description: "Strategic guidance to optimize operations, improve efficiency, and drive sustainable growth.",
      features: ["Strategic Planning", "Process Optimization", "Change Management", "Performance Analytics"],
      benefits: ["Increased Efficiency", "Cost Reduction", "Risk Mitigation", "Competitive Advantage"],
      icon: Users
    },
    {
      title: "Market Research & Analytics",
      description: "Data-driven insights to understand markets, customers, and competitive landscapes.",
      features: ["Market Analysis", "Customer Research", "Competitive Intelligence", "Data Visualization"],
      benefits: ["Informed Decisions", "Market Opportunities", "Customer Insights", "Trend Identification"],
      icon: TrendingUp
    },
    {
      title: "AI Integration",
      description: "Cutting-edge artificial intelligence solutions to automate processes and enhance decision-making.",
      features: ["Machine Learning", "Process Automation", "Predictive Analytics", "AI Strategy"],
      benefits: ["Automation", "Predictive Insights", "Cost Savings", "Innovation Edge"],
      icon: Brain
    },
    {
      title: "Digital Transformation",
      description: "Comprehensive technology modernization to digitize operations and improve customer experience.",
      features: ["Cloud Migration", "System Integration", "Digital Strategy", "Technology Roadmap"],
      benefits: ["Digital Efficiency", "Scalability", "Customer Experience", "Future-Ready"],
      icon: Smartphone
    },
    {
      title: "Strategic Growth Solutions",
      description: "Scalable frameworks and methodologies to accelerate business growth and market expansion.",
      features: ["Growth Strategy", "Market Entry", "Scale Operations", "Investment Planning"],
      benefits: ["Revenue Growth", "Market Expansion", "Operational Scale", "Investment ROI"],
      icon: Target
    },
    {
      title: "Technology Consulting",
      description: "Expert guidance on technology selection, implementation, and optimization for business success.",
      features: ["Tech Assessment", "Solution Architecture", "Implementation Support", "Training & Support"],
      benefits: ["Technology Alignment", "Implementation Success", "Team Readiness", "Ongoing Support"],
      icon: Settings
    }
  ];

  return (
    <div className="min-h-screen harmony-gradient">
      <Navigation />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-harmony-cyan mb-6">Our Solutions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive consulting services designed to transform your business and drive sustainable growth 
              through innovation and strategic implementation.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {solutions.map((solution, index) => (
              <Card key={index} className="bg-harmony-navy/50 border border-harmony-cyan/30 hover:border-harmony-cyan transition-all duration-300 group hover:scale-105 hover:shadow-xl hover:shadow-harmony-cyan/20">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-harmony-cyan to-harmony-cyan/70 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                    <solution.icon className="text-white w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-harmony-cyan mb-4 text-center group-hover:text-white transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed text-center group-hover:text-gray-200 transition-colors duration-300">
                    {solution.description}
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3 group-hover:text-harmony-cyan transition-colors duration-300">Key Features:</h4>
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center mb-2 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${featureIndex * 50}ms` }}>
                          <div className="w-2 h-2 bg-harmony-cyan rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                          <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-3 group-hover:text-harmony-cyan transition-colors duration-300">Benefits:</h4>
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center mb-2 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${benefitIndex * 50}ms` }}>
                          <div className="w-2 h-2 bg-harmony-cyan rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                          <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-harmony-cyan mb-12 text-center">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", description: "Understanding your business needs and challenges" },
                { step: "02", title: "Strategy", description: "Developing customized solutions and roadmaps" },
                { step: "03", title: "Implementation", description: "Executing solutions with expert guidance" },
                { step: "04", title: "Optimization", description: "Continuous improvement and performance monitoring" }
              ].map((phase, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-harmony-cyan rounded-full mx-auto mb-4 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-harmony-cyan/50 transition-all duration-300">
                    <span className="text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">{phase.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-harmony-cyan transition-colors duration-300">{phase.title}</h3>
                  <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="bg-harmony-navy/50 border border-harmony-cyan/30 max-w-4xl mx-auto hover:shadow-xl hover:shadow-harmony-cyan/20 transition-all duration-300">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold text-harmony-cyan mb-6">Ready to Transform Your Business?</h3>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Contact us today to discuss how our solutions can drive your organization's growth and success.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-harmony-cyan hover:bg-harmony-cyan/80 text-white px-8 py-3 text-lg hover:scale-105 transition-transform duration-300"
                >
                  <Link to="/connect">Contact Us Today</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Solutions;
