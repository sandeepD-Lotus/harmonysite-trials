
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      title: "Managed IT Services",
      description: "Comprehensive IT infrastructure management and support to keep your business running smoothly 24/7.",
      image: "/lovable-uploads/5ba34598-6bde-4f61-953b-446db39dc09b.png"
    },
    {
      title: "IT Security",
      description: "Advanced cybersecurity solutions to protect your business from evolving digital threats and ensure data integrity.",
      image: "/lovable-uploads/5ba34598-6bde-4f61-953b-446db39dc09b.png"
    },
    {
      title: "IT Consulting",
      description: "Strategic technology consulting to align your IT infrastructure with business goals and drive digital transformation.",
      image: "/lovable-uploads/Gemini_Generated_Image_1q8bu11q8bu11q8b.png"
    }
  ];

  return (
    <section className="py-20 harmony-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-harmony-cyan mb-4">Our Services</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-transparent border border-harmony-cyan/30 hover:border-harmony-cyan transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-harmony-cyan mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
