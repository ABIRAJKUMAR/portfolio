import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70; // offset for sticky navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md transition-all duration-200 border-b ${
        isScrolled ? 'border-neutral-200 shadow-subtle py-3.5' : 'border-neutral-100 py-4'
      }`}
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Left: Name & Title */}
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setMobileMenuOpen(false);
          }}
          className="text-left group cursor-pointer focus:outline-none"
          aria-label="Abiraj K Portfolio"
        >
          <div className="text-sm font-semibold tracking-tight text-neutral-900 group-hover:text-neutral-600 transition-colors">
            ABIRAJ K
          </div>
          <div className="text-xs text-neutral-400 font-normal">
            Software Engineer
          </div>
        </button>

        {/* Center / Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors py-1 cursor-pointer ${
                  isActive
                    ? 'text-neutral-900 font-medium border-b-2 border-neutral-900'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Socials & Resume CTA */}
        <div className="hidden sm:flex items-center gap-4 text-xs font-medium">
          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-1"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href={personalInfo.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-1"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>

          <button
            onClick={() => scrollToSection('contact')}
            className="px-3 py-1.5 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 transition-colors text-xs font-medium cursor-pointer"
          >
            Get in touch
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center sm:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-neutral-600 hover:text-neutral-900 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-neutral-200 px-5 py-4 space-y-3 shadow-subtle animate-in fade-in duration-150">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left py-1.5 text-sm transition-colors ${
                    isActive ? 'text-neutral-900 font-semibold' : 'text-neutral-500'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-neutral-100 flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-4">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-neutral-900 flex items-center gap-1"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-neutral-900 flex items-center gap-1"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-3 py-1.5 rounded-md bg-neutral-900 text-white text-xs font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
