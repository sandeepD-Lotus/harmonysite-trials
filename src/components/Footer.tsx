
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Mail, Phone, MapPin, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-harmony-navy border-t border-harmony-cyan/20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          {/* Company Info - Always visible, stacked on mobile */}
          <div className="col-span-1 md:col-span-2 mb-4 md:mb-0 animate-slide-in-right flex flex-col">
            <Link to="/" className="flex items-center space-x-3 mb-4 group">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/5293c8eb-5f72-4bb9-b36a-732d2afdec1d.png" 
                  alt="Harmony Consulting Solutions Logo" 
                  className="w-16 h-16 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-harmony-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="transition-all duration-300 group-hover:translate-x-1">
                <span className="text-white font-bold text-xl">HARMONY</span>
                <div className="text-harmony-cyan text-sm font-medium">CONSULTING SOLUTIONS</div>
              </div>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md leading-relaxed">
              Empowering businesses through insight, innovation, and intelligence. 
              We specialize in business consulting, market research, AI integration, 
              and strategic growth solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-harmony-cyan rounded-full flex items-center justify-center hover:bg-harmony-cyan/80 transition-all duration-300 cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-harmony-cyan/50" aria-label="Facebook">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-harmony-cyan rounded-full flex items-center justify-center hover:bg-harmony-cyan/80 transition-all duration-300 cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-harmony-cyan/50" aria-label="Twitter">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-harmony-cyan rounded-full flex items-center justify-center hover:bg-harmony-cyan/80 transition-all duration-300 cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-harmony-cyan/50" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-harmony-cyan rounded-full flex items-center justify-center hover:bg-harmony-cyan/80 transition-all duration-300 cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-harmony-cyan/50" aria-label="YouTube">
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
            <h3 className="text-harmony-cyan font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-harmony-cyan transition-all duration-300 hover:translate-x-2 inline-block">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-harmony-cyan transition-all duration-300 hover:translate-x-2 inline-block">About Us</Link></li>
              <li><Link to="/solutions" className="text-gray-300 hover:text-harmony-cyan transition-all duration-300 hover:translate-x-2 inline-block">Our Solutions</Link></li>
              <li><Link to="/strategy" className="text-gray-300 hover:text-harmony-cyan transition-all duration-300 hover:translate-x-2 inline-block">Business Strategy</Link></li>
              <li><Link to="/articles" className="text-gray-300 hover:text-harmony-cyan transition-all duration-300 hover:translate-x-2 inline-block">Articles</Link></li>
              <li><Link to="/connect" className="text-gray-300 hover:text-harmony-cyan transition-all duration-300 hover:translate-x-2 inline-block">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
            <h3 className="text-harmony-cyan font-semibold mb-4 text-lg">Contact Summary</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-harmony-cyan/20 rounded-full flex items-center justify-center group-hover:bg-harmony-cyan/40 transition-all duration-300">
                  <Phone className="w-4 h-4 text-harmony-cyan" />
                </div>
                <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">123-456-789</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-harmony-cyan/20 rounded-full flex items-center justify-center group-hover:bg-harmony-cyan/40 transition-all duration-300">
                  <Mail className="w-4 h-4 text-harmony-cyan" />
                </div>
                <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">hello@harmonygreatsite.com</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-harmony-cyan/20 rounded-full flex items-center justify-center group-hover:bg-harmony-cyan/40 transition-all duration-300">
                  <MapPin className="w-4 h-4 text-harmony-cyan" />
                </div>
                <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">Global Operations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-harmony-cyan/20 mt-8 pt-8 text-center animate-fade-in" style={{animationDelay: '0.6s'}}>
          <p className="text-gray-300 text-sm">
            © 2024 Harmony Consulting Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

