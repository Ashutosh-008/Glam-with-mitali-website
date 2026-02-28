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
      <div className="absolute inset-0 bg-[#FAF7F2]"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="bg-[#A78B5F]/10 p-4 rounded-full">
              <Sparkles className="w-12 h-12 text-[#A78B5F]" />
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
          <div className="space-y-6">
            <p
              className="text-2xl md:text-3xl text-[#8B7355] font-semibold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Professional Makeup Artist
            </p>
            <p className="text-lg md:text-xl text-[#5A5A5A] max-w-3xl mx-auto leading-relaxed">
              Specializing in bridal artistry, I believe every bride deserves to feel radiant and confident on her special day. 
              With a passion for enhancing natural beauty and creating timeless looks, I work closely with each client to bring 
              their vision to life—whether it's soft and romantic, bold and glamorous, or anything in between.
            </p>
            <p className="text-base md:text-lg text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed italic">
              From the first brushstroke to the final touch, my goal is to make you look and feel like the most beautiful version of yourself.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <Button
              onClick={scrollToContact}
              className="bg-[#8B7355] hover:bg-[#6B5943] text-white px-10 py-6 text-lg rounded-md shadow-md hover:shadow-lg transition-all duration-300"
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
