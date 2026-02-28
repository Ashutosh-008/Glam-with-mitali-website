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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FFF8F0] via-[#FFF0F5] to-[#FAF6F1]">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#E8B4BC]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="bg-[#D4AF37]/20 p-4 rounded-full animate-pulse">
              <Sparkles className="w-12 h-12 text-[#D4AF37]" />
            </div>
          </div>

          {/* Main Heading */}
          <h1
            className="text-5xl md:text-7xl font-bold text-[#1B2845] leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Mitali Verma
          </h1>

          {/* Subtitle */}
          <div className="space-y-6">
            <p
              className="text-2xl md:text-3xl text-[#D4AF37] font-semibold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Professional Makeup Artist
            </p>
            <p className="text-lg md:text-xl text-[#1B2845]/80 max-w-3xl mx-auto leading-relaxed">
              Specializing in bridal artistry, I believe every bride deserves to feel radiant and confident on her special day. 
              With a passion for enhancing natural beauty and creating timeless looks, I work closely with each client to bring 
              their vision to life—whether it's soft and romantic, bold and glamorous, or anything in between.
            </p>
            <p className="text-base md:text-lg text-[#E8B4BC] max-w-2xl mx-auto leading-relaxed italic">
              From the first brushstroke to the final touch, my goal is to make you look and feel like the most beautiful version of yourself.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <Button
              onClick={scrollToContact}
              className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#1B2845] px-12 py-7 text-lg font-semibold rounded-md shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Book Your Date
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;