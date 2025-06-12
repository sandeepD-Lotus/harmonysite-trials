
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';

const Solutions = () => {
  const solutions = [
    {
      title: "Business Consulting",
      description: "Strategic guidance to optimize operations, improve efficiency, and drive sustainable growth.",
      features: ["Strategic Planning", "Process Optimization", "Change Management", "Performance Analytics"]
    },
    {
      title: "Market Research & Analytics",
      description: "Data-driven insights to understand markets, customers, and competitive landscapes.",
      features: ["Market Analysis", "Customer Research", "Competitive Intelligence", "Data Visualization"]
    },
    {
      title: "AI Integration",
      description: "Cutting-edge artificial intelligence solutions to automate processes and enhance decision-making.",
      features: ["Machine Learning", "Process Automation", "Predictive Analytics", "AI Strategy"]
    },
    {
      title: "Digital Transformation",
      description: "Comprehensive technology modernization to digitize operations and improve customer experience.",
      features: ["Cloud Migration", "System Integration", "Digital Strategy", "Technology Roadmap"]
    },
    {
      title: "Strategic Growth Solutions",
      description: "Scalable frameworks and methodologies to accelerate business growth and market expansion.",
      features: ["Growth Strategy", "Market Entry", "Scale Operations", "Investment Planning"]
    },
    {
      title: "Technology Consulting",
      description: "Expert guidance on technology selection, implementation, and optimization for business success.",
      features: ["Tech Assessment", "Solution Architecture", "Implementation Support", "Training & Support"]
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
              Comprehensive consulting services designed to transform your business and drive sustainable growth through innovation and strategic implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="bg-harmony-navy/50 border border-harmony-cyan/30 hover:border-harmony-cyan transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-harmony-cyan mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-harmony-cyan rounded-full mr-3"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process Section */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-harmony-cyan mb-12 text-center">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", description: "Understanding your business needs and challenges" },
                { step: "02", title: "Strategy", description: "Developing customized solutions and roadmaps" },
                { step: "03", title: "Implementation", description: "Executing solutions with expert guidance" },
                { step: "04", title: "Optimization", description: "Continuous improvement and performance monitoring" }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-harmony-cyan rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{phase.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{phase.title}</h3>
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

export default Solutions;
