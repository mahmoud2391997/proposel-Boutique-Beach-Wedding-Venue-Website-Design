import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { SectionId } from '../types';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: `#${SectionId.HOME}` },
    { label: 'Our Story', href: `#${SectionId.ABOUT}` },
    { label: 'Packages', href: `#${SectionId.PACKAGES}` },
    { label: 'Gallery', href: `#${SectionId.GALLERY}` },
    { label: 'Contact', href: `#${SectionId.CONTACT}` },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href={`#${SectionId.HOME}`} className={`text-2xl sm:text-3xl font-serif tracking-widest font-bold flex items-center gap-2 ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              <Heart className={`w-5 h-5 ${isScrolled ? 'text-sand-600' : 'text-white'}`} fill="currentColor" />
              AZURE SANDS
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase hover:text-sand-500 transition-colors ${
                  isScrolled ? 'text-slate-600' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`#${SectionId.CONTACT}`}
              className={`px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider transition-all ${
                isScrolled
                  ? 'bg-sand-600 text-white hover:bg-sand-700'
                  : 'bg-white text-slate-900 hover:bg-sand-100'
              }`}
            >
              Book a Tour
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md focus:outline-none ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col space-y-4 animate-fade-in-down border-t border-sand-100">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-800 hover:text-sand-600 font-medium block text-center uppercase text-sm tracking-wide"
            >
              {link.label}
            </a>
          ))}
           <a
              href={`#${SectionId.CONTACT}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center px-6 py-3 bg-sand-600 text-white rounded-sm uppercase text-sm font-bold tracking-widest"
            >
              Book a Tour
            </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;