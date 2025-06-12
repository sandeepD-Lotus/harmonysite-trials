
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-harmony-navy border-t border-harmony-cyan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-harmony-cyan flex items-center justify-center">
                <span className="text-harmony-cyan font-bold text-lg">H</span>
              </div>
              <div>
                <span className="text-white font-bold text-lg">HARMONY</span>
                <div className="text-harmony-cyan text-xs font-medium">CONSULTING SOLUTIONS</div>
              </div>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering businesses through insight, innovation, and intelligence. 
              We specialize in business consulting, market research, AI integration, 
              and strategic growth solutions.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-harmony-cyan rounded-full flex items-center justify-center hover:bg-harmony-cyan/80 transition-colors cursor-pointer">
                <Facebook className="w-4 h-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-harmony-cyan rounded-full flex items-center justify-center hover:bg-harmony-cyan/80 transition-colors cursor-pointer">
                <Twitter className="w-4 h-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-harmony-cyan rounded-full flex items-center justify-center hover:bg-harmony-cyan/80 transition-colors cursor-pointer">
                <Instagram className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-harmony-cyan font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-harmony-cyan transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-harmony-cyan transition-colors">About Us</Link></li>
              <li><Link to="/solutions" className="text-gray-300 hover:text-harmony-cyan transition-colors">Our Solutions</Link></li>
              <li><Link to="/strategy" className="text-gray-300 hover:text-harmony-cyan transition-colors">Business Strategy</Link></li>
              <li><Link to="/articles" className="text-gray-300 hover:text-harmony-cyan transition-colors">Articles</Link></li>
              <li><Link to="/connect" className="text-gray-300 hover:text-harmony-cyan transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div>
            <h3 className="text-harmony-cyan font-semibold mb-4">Contact Summary</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-harmony-cyan" />
                <span className="text-gray-300 text-sm">123-456-789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-harmony-cyan" />
                <span className="text-gray-300 text-sm">hello@harmonygreatsite.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-harmony-cyan" />
                <span className="text-gray-300 text-sm">Global Operations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-harmony-cyan/20 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 Harmony Consulting Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
