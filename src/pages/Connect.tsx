
import React from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Connect = () => {
  return (
    <div className="min-h-screen harmony-gradient">
      <Navigation />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-5xl font-bold text-harmony-cyan mb-6">Let's work together!</h1>
              <p className="text-xl text-white mb-8">Book a free consultation.</p>
              
              <Button
                size="lg"
                className="bg-transparent border-2 border-harmony-cyan text-harmony-cyan hover:bg-harmony-cyan hover:text-white transition-all duration-300 mb-12"
              >
                contact us
              </Button>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-harmony-cyan font-semibold mb-2">PHONE</h3>
                  <p className="text-white text-lg">123-456-789</p>
                </div>
                
                <div>
                  <h3 className="text-harmony-cyan font-semibold mb-2">EMAIL</h3>
                  <p className="text-white text-lg">hello@harmonygreatsite.com</p>
                </div>
                
                <div>
                  <h3 className="text-harmony-cyan font-semibold mb-2">SOCIAL</h3>
                  <div className="flex space-x-4">
                    <div className="w-10 h-10 bg-harmony-cyan rounded-full flex items-center justify-center hover:bg-harmony-cyan/80 transition-colors cursor-pointer">
                      <Facebook className="w-5 h-5 text-white" />
                    </div>
                    <div className="w-10 h-10 bg-harmony-cyan rounded-full flex items-center justify-center hover:bg-harmony-cyan/80 transition-colors cursor-pointer">
                      <Twitter className="w-5 h-5 text-white" />
                    </div>
                    <div className="w-10 h-10 bg-harmony-cyan rounded-full flex items-center justify-center hover:bg-harmony-cyan/80 transition-colors cursor-pointer">
                      <Instagram className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div>
              <img
                src="/lovable-uploads/22e160ad-81d3-42d9-a4fc-daa711a988bb.png"
                alt="Let's work together"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-20">
            <Card className="bg-harmony-navy/50 border border-harmony-cyan/30 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-harmony-cyan mb-8 text-center">Get In Touch</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-harmony-cyan font-medium mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-harmony-navy border border-harmony-cyan/30 rounded text-white placeholder-gray-400 focus:outline-none focus:border-harmony-cyan"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-harmony-cyan font-medium mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-harmony-navy border border-harmony-cyan/30 rounded text-white placeholder-gray-400 focus:outline-none focus:border-harmony-cyan"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-harmony-cyan font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-harmony-navy border border-harmony-cyan/30 rounded text-white placeholder-gray-400 focus:outline-none focus:border-harmony-cyan"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-harmony-cyan font-medium mb-2">Company</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-harmony-navy border border-harmony-cyan/30 rounded text-white placeholder-gray-400 focus:outline-none focus:border-harmony-cyan"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-harmony-cyan font-medium mb-2">Service Interest</label>
                    <select className="w-full px-4 py-3 bg-harmony-navy border border-harmony-cyan/30 rounded text-white focus:outline-none focus:border-harmony-cyan">
                      <option value="">Select a service</option>
                      <option value="consulting">Business Consulting</option>
                      <option value="research">Market Research</option>
                      <option value="ai">AI Integration</option>
                      <option value="strategy">Strategic Planning</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-harmony-cyan font-medium mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-harmony-navy border border-harmony-cyan/30 rounded text-white placeholder-gray-400 focus:outline-none focus:border-harmony-cyan"
                      placeholder="Tell us about your project and how we can help..."
                    ></textarea>
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-harmony-cyan hover:bg-harmony-cyan/80 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 text-center">
            <Card className="bg-harmony-navy/50 border border-harmony-cyan/30 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-harmony-cyan mb-4">Stay Connected</h3>
                <p className="text-gray-300 mb-6">
                  Subscribe to our newsletter for industry insights, company updates, and exclusive content.
                </p>
                <div className="flex gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-harmony-navy border border-harmony-cyan/30 rounded text-white placeholder-gray-400 focus:outline-none focus:border-harmony-cyan"
                  />
                  <Button className="bg-harmony-cyan hover:bg-harmony-cyan/80 text-white">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
