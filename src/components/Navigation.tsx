
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const [showSolutionsDropdown, setShowSolutionsDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
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

  const handleMobileMenuToggle = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-harmony-navy/95 backdrop-blur-sm border-b border-harmony-cyan/20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
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

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative" style={{animationDelay: `${index * 0.1}s`}}>
                {item.hasDropdown ? (
                  <div
                    className="relative animate-fade-in"
                    onMouseEnter={() => setShowSolutionsDropdown(true)}
                    onMouseLeave={() => setShowSolutionsDropdown(false)}
                  >
                    <Link
                      to={item.path}
                      className={`text-sm font-medium transition-all duration-300 hover:text-harmony-cyan flex items-center relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-harmony-cyan after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                        location.pathname === item.path
                          ? 'text-harmony-cyan after:scale-x-100'
                          : 'text-white'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" />
                    </Link>
                    
                    {showSolutionsDropdown && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-harmony-navy border border-harmony-cyan/30 rounded-lg shadow-xl z-10 animate-scale-in">
                        <div className="py-2">
                          {solutionItems.map((solutionItem, index) => (
                            <Link
                              key={index}
                              to={solutionItem.path}
                              className="block px-4 py-2 text-sm text-gray-300 hover:text-harmony-cyan hover:bg-harmony-navy/50 transition-all duration-200 hover:translate-x-2"
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
                    className={`text-sm font-medium transition-all duration-300 hover:text-harmony-cyan relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-harmony-cyan after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left animate-fade-in ${
                      location.pathname === item.path
                        ? 'text-harmony-cyan after:scale-x-100'
                        : 'text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block animate-fade-in">
            <Button
              asChild
              className="bg-harmony-cyan hover:bg-harmony-cyan/80 text-white border border-harmony-cyan transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-harmony-cyan/30"
            >
              <Link to="/connect">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleMobileMenuToggle}
              className="text-white hover:text-harmony-cyan hover:bg-harmony-navy/50"
            >
              {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-harmony-navy/95 backdrop-blur-sm border-b border-harmony-cyan/20 animate-scale-in">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    onClick={closeMobileMenu}
                    className={`
                      block 
                      py-2
                      text-base
                      font-medium
                      transition-all
                      duration-300
                      hover:text-harmony-cyan
                      hover:translate-x-2
                      ${location.pathname === item.path ? 'text-harmony-cyan' : 'text-white'}
                      text-[15px] leading-5
                      sm:text-[17px]
                      sm:leading-6
                      md:text-base md:leading-6
                    `}
                    style={{
                      // Extra tight line height for nav links on small screens
                      lineHeight: '1.3',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <div className="ml-2 mt-1 space-y-1">
                      {solutionItems.map((solutionItem, index) => (
                        <Link
                          key={index}
                          to={solutionItem.path}
                          onClick={closeMobileMenu}
                          className={`
                            block
                            py-1
                            text-sm
                            text-gray-300
                            hover:text-harmony-cyan
                            transition-all
                            duration-200
                            hover:translate-x-2
                            text-[13px]
                            leading-5
                            sm:text-[15px]
                            sm:leading-6
                          `}
                          style={{
                            // Compact dropdown line height on mobile
                            lineHeight: '1.25',
                          }}
                        >
                          {solutionItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-2 border-t border-harmony-cyan/20">
                <Button
                  asChild
                  className="w-full bg-harmony-cyan hover:bg-harmony-cyan/80 text-white border border-harmony-cyan transition-all duration-300 py-2 text-[15px] sm:text-base"
                >
                  <Link to="/connect" onClick={closeMobileMenu}>Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
