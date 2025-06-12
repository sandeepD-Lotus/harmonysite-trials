
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const [showSolutionsDropdown, setShowSolutionsDropdown] = useState(false);
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Solutions', path: '/solutions', hasDropdown: true },
    { name: 'Business Strategy', path: '/strategy' },
    { name: 'Articles', path: '/articles' },
    { name: 'Connect', path: '/connect' },
  ];

  const solutionItems = [
    { name: 'Business Consulting', path: '/solutions#business-consulting' },
    { name: 'Market Research & Analytics', path: '/solutions#market-research' },
    { name: 'AI Integration', path: '/solutions#ai-integration' },
    { name: 'Digital Transformation', path: '/solutions#digital-transformation' },
    { name: 'Strategic Growth Solutions', path: '/solutions#strategic-growth' },
    { name: 'Technology Consulting', path: '/solutions#technology-consulting' },
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
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setShowSolutionsDropdown(true)}
                    onMouseLeave={() => setShowSolutionsDropdown(false)}
                  >
                    <Link
                      to={item.path}
                      className={`text-sm font-medium transition-colors hover:text-harmony-cyan flex items-center ${
                        location.pathname === item.path
                          ? 'text-harmony-cyan'
                          : 'text-white'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </Link>
                    
                    {showSolutionsDropdown && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-harmony-navy border border-harmony-cyan/30 rounded-lg shadow-xl z-10">
                        <div className="py-2">
                          {solutionItems.map((solutionItem, index) => (
                            <Link
                              key={index}
                              to={solutionItem.path}
                              className="block px-4 py-2 text-sm text-gray-300 hover:text-harmony-cyan hover:bg-harmony-navy/50 transition-colors"
                            >
                              {solutionItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-sm font-medium transition-colors hover:text-harmony-cyan ${
                      location.pathname === item.path
                        ? 'text-harmony-cyan'
                        : 'text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
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
