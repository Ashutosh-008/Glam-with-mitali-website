import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="text-[#2C2C2C] font-semibold">Blush with Mitali</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-[#2C2C2C] hover:text-[#8B7355] transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-[#2C2C2C] hover:text-[#8B7355] transition-colors duration-300"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-[#2C2C2C] hover:text-[#8B7355] transition-colors duration-300"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-[#2C2C2C] hover:text-[#8B7355] transition-colors duration-300"
            >
              Testimonials
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-[#8B7355] hover:bg-[#6B5943] text-white transition-colors duration-300"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#2C2C2C]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-[#2C2C2C] hover:text-[#8B7355] transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-[#2C2C2C] hover:text-[#8B7355] transition-colors duration-300"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left text-[#2C2C2C] hover:text-[#8B7355] transition-colors duration-300"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left text-[#2C2C2C] hover:text-[#8B7355] transition-colors duration-300"
            >
              Testimonials
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-[#8B7355] hover:bg-[#6B5943] text-white transition-colors duration-300"
            >
              Book Now
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
