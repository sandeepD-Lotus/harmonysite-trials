import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const [showSolutionsDropdown, setShowSolutionsDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showMobileMenu]);

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
    setMobileSolutionsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-harmony-navy/95 backdrop-blur-sm border-b border-harmony-cyan/20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo and Hamburger/Menu */}
          <Link to="/" className="flex items-center space-x-2 group md:space-x-3 z-[55]">
            <div className="relative overflow-hidden rounded-lg h-10 w-10 md:w-16 md:h-16">
              <img 
                src="/lovable-uploads/5293c8eb-5f72-4bb9-b36a-732d2afdec1d.png" 
                alt="Harmony Consulting Solutions Logo" 
                className="w-full h-full transition-transform duration-300 group-hover:scale-110 object-cover"
              />
              <div className="absolute inset-0 bg-harmony-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="flex-col">
              <span className="text-white font-bold text-base md:text-xl leading-tight"
                style={{ whiteSpace: 'nowrap' }}
              >HARMONY</span>
              <div className="text-harmony-cyan text-xs md:text-sm font-medium leading-tight"
                style={{ whiteSpace: 'nowrap' }}
              >CONSULTING SOLUTIONS</div>
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
          <div className="md:hidden flex items-center z-[55]">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleMobileMenuToggle}
              className="text-white hover:text-harmony-cyan hover:bg-harmony-navy/50"
              aria-label={showMobileMenu ? "Close menu" : "Open menu"}
            >
              {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
        {/* Border divider for mobile below nav */}
        <div className="md:hidden border-t border-harmony-cyan/15"></div>

        {/* MOBILE MENU OVERLAY */}
        {showMobileMenu && (
          <>
            {/* Dark overlay, closes menu on click */}
            <div
              className="fixed inset-0 bg-black/60 z-40"
              onClick={closeMobileMenu}
              aria-hidden="true"
            ></div>

            {/* Mobile Menu */}
            <div
              className="md:hidden fixed top-0 left-0 right-0 z-50 bg-harmony-navy w-full pt-4 min-h-screen flex flex-col animate-scale-in shadow-xl border-r border-harmony-cyan/40"
              style={{
                maxWidth: '100%',
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
              }}
            >
              {/* Nav header */}
              <div className="flex items-start px-4 pb-1 w-full gap-2">
                {/* Logo & titles - stacked on mobile */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <div className="relative overflow-hidden rounded-lg h-10 w-10 bg-white flex-shrink-0">
                    <img 
                      src="/lovable-uploads/5293c8eb-5f72-4bb9-b36a-732d2afdec1d.png"
                      alt="Harmony Consulting Solutions Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-white font-bold text-base leading-tight whitespace-nowrap block truncate max-w-[80px]"
                      style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
                    >HARMONY</span>
                    <span className="text-harmony-cyan text-xs font-medium leading-tight whitespace-nowrap block truncate max-w-[90px]"
                      style={{ textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}
                    >CONSULTING SOLUTIONS</span>
                  </div>
                </div>
                {/* Spacer */}
                <div className="flex-1" />
                {/* Close (X) button, always at far right */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeMobileMenu}
                  className="text-white hover:text-harmony-cyan ml-2 mt-1 flex-shrink-0"
                  aria-label="Close menu"
                >
                  <X className="w-7 h-7" />
                </Button>
              </div>
              {/* Navigation Links */}
              <nav className="flex flex-col gap-0 pt-2 pb-6" style={{}}>
                {navItems.map((item, idx) =>
                  item.hasDropdown ? (
                    <div key={item.name} className="w-full">
                      <button
                        onClick={() => setMobileSolutionsOpen((open) => !open)}
                        className={`
                          w-full flex items-center justify-between px-5 py-3 text-base font-semibold
                          border-b border-harmony-cyan/[0.15]
                          ${location.pathname === item.path ? "text-harmony-cyan bg-harmony-navy/80 border-l-4 border-harmony-cyan" : "text-white"}
                          focus:outline-none transition-all
                        `}
                        aria-expanded={mobileSolutionsOpen}
                        style={{ minHeight: '44px', lineHeight: '1.3', letterSpacing: '-0.01em'}}
                      >
                        <span>Our Solutions</span>
                        <ChevronDown
                          className={`ml-2 w-5 h-5 transition-transform duration-200 ${mobileSolutionsOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {mobileSolutionsOpen && (
                        <div className="bg-harmony-navy/95">
                          {solutionItems.map((solutionItem) => (
                            <Link
                              key={solutionItem.name}
                              to={solutionItem.path}
                              onClick={closeMobileMenu}
                              className="block pl-10 pr-5 py-2 text-sm border-b border-harmony-cyan/10 text-gray-300 hover:text-harmony-cyan hover:bg-harmony-navy/70"
                              style={{ lineHeight: '1.2', letterSpacing: '-0.01em' }}
                            >
                              {solutionItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={closeMobileMenu}
                      className={`
                        w-full block px-5 py-3 text-base font-semibold border-b border-harmony-cyan/[0.15]
                        text-left transition-all duration-150
                        ${
                          location.pathname === item.path
                            ? "text-harmony-cyan bg-harmony-navy/80 border-l-4 border-harmony-cyan"
                            : "text-white"
                        }
                      `}
                      style={{
                        lineHeight: '1.3',
                        letterSpacing: '-0.01em',
                        minHeight: '44px',
                      }}
                    >
                      {item.name}
                    </Link>
                  )
                )}
                <div className="px-5 py-4">
                  <Button
                    asChild
                    className="w-full bg-harmony-cyan text-white font-bold text-base py-3 rounded-md mt-1 shadow-harmony-cyan/20 hover:bg-harmony-cyan/80 transition duration-200"
                  >
                    <Link to="/connect" onClick={closeMobileMenu}>Get Started</Link>
                  </Button>
                </div>
              </nav>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
