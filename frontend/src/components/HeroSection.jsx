import React from 'react';
import { Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Elegant Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF8F0] via-[#FAF0E6] to-[#F5EDE3]"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#D4A5A5]/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="bg-[#D4AF37]/20 p-4 rounded-full">
              <Sparkles className="w-12 h-12 text-[#D4AF37]" />
            </div>
          </div>

          {/* Main Heading */}
          <h1
            className="text-5xl md:text-7xl font-bold text-[#2C2C2C] leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Mitali Verma
          </h1>

          {/* Subtitle */}
          <div className="space-y-4">
            <p
              className="text-2xl md:text-3xl text-[#D4AF37] font-semibold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Professional Makeup Artist
            </p>
            <p className="text-lg md:text-xl text-[#2C2C2C]/80 max-w-2xl mx-auto leading-relaxed">
              Natural, Glamour, and Bridal Makeup tailored to your special day.
              Creating timeless beauty with every brushstroke.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <Button
              onClick={scrollToContact}
              className="bg-[#D4AF37] hover:bg-[#B8941F] text-white px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Book Your Date
            </Button>
          </div>

          {/* Social Proof */}
          <div className="pt-12 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-[#2C2C2C]/70">
            <div className="text-center">
              <p className="text-3xl font-bold text-[#D4AF37]">500+</p>
              <p className="text-sm">Happy Brides</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#D4AF37]">8+</p>
              <p className="text-sm">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#D4AF37]">100%</p>
              <p className="text-sm">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
