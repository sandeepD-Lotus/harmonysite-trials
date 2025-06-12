
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Solutions', path: '/solutions' },
    { name: 'Business Strategy', path: '/strategy' },
    { name: 'Articles', path: '/articles' },
    { name: 'Connect', path: '/connect' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-harmony-navy/95 backdrop-blur-sm border-b border-harmony-cyan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full border-2 border-harmony-cyan flex items-center justify-center">
              <span className="text-harmony-cyan font-bold text-lg">H</span>
            </div>
            <div>
              <span className="text-white font-bold text-lg">HARMONY</span>
              <div className="text-harmony-cyan text-xs font-medium">CONSULTING SOLUTIONS</div>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-harmony-cyan ${
                  location.pathname === item.path
                    ? 'text-harmony-cyan'
                    : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-harmony-cyan hover:bg-harmony-cyan/80 text-white border border-harmony-cyan"
            >
              <Link to="/connect">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
