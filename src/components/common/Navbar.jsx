import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Menu, X, ArrowRight } from 'lucide-react';
import { companyData } from '../../data/company';
import { navigationData } from '../../data/navigation';
import { Container } from './Container';
import { Button } from './Button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm py-3'
        : 'bg-white border-b border-slate-100 py-3.5'
    }`}>
      <Container>
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 group focus:outline-none shrink-0">
            <img
              src={companyData.logo}
              alt={`${companyData.name} Logo`}
              className="h-9 w-auto object-contain group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-slate-900 tracking-tight font-serif group-hover:text-[#f0771a] transition-colors leading-tight">
                {companyData.name}
              </span>
              <span className="text-[9px] uppercase font-extrabold tracking-widest text-[#f0771a] -mt-0.5">
                Solar Energy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {navigationData.navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all relative ${
                    isActive
                      ? 'text-[#f0771a] bg-orange-50/80 font-bold'
                      : 'text-slate-700 hover:text-[#f0771a] hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#f0771a] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <Button to={navigationData.ctaButton.path} variant="primary" size="sm" icon={ArrowRight}>
              {navigationData.ctaButton.label}
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:text-[#f0771a] hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-5 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1.5 mb-5">
            {navigationData.navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2.5 rounded-xl text-base font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#f0771a] text-white font-bold'
                      : 'text-slate-800 hover:bg-orange-50 hover:text-[#f0771a]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-white"></span>}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-100 space-y-3">
            <Button to={navigationData.ctaButton.path} variant="primary" size="md" className="w-full justify-center">
              {navigationData.ctaButton.label}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

