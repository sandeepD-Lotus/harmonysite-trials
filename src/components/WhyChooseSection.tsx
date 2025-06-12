
import React from 'react';
import { Globe, ClipboardCheck, Monitor } from 'lucide-react';

const WhyChooseSection = () => {
  const features = [
    {
      icon: Globe,
      title: "We are global.",
      description: "No matter where you are, we've got you covered.",
      detail: "Our global presence ensures comprehensive support across all time zones and regions."
    },
    {
      icon: ClipboardCheck,
      title: "We value our clients.",
      description: "Virtual assistance. Talk to us about any concerns, 24/7.",
      detail: "Dedicated client success teams provide personalized support and strategic guidance."
    },
    {
      icon: Monitor,
      title: "We use top-rate systems.",
      description: "Easy peasy UI. Our interface is simple and easy to use.",
      detail: "Cutting-edge technology platforms designed for optimal performance and user experience."
    }
  ];

  return (
    <section className="py-20 harmony-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-harmony-cyan mb-4">Why Choose Us</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-2xl border border-harmony-cyan/30 hover:border-harmony-cyan transition-all duration-300"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 rounded-full border-2 border-harmony-cyan flex items-center justify-center">
                    <IconComponent className="w-10 h-10 text-harmony-cyan" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-harmony-cyan mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-white font-medium mb-4">
                  {feature.description}
                </p>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
