import React from 'react';
import { Heart, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F0F0F] text-white py-12">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand Section */}
          <div>
            <h3
              className="text-2xl font-bold mb-4 text-[#D4AF37]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Blush with Mitali
            </h3>
            <p className="text-white/70 leading-relaxed">
              Creating timeless beauty and unforgettable transformations for your most special moments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#D4AF37]">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-white/70 hover:text-[#D4AF37] transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-white/70 hover:text-[#D4AF37] transition-colors duration-300"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-white/70 hover:text-[#D4AF37] transition-colors duration-300"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-white/70 hover:text-[#D4AF37] transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#D4AF37]">Connect With Us</h4>
            <div className="space-y-4">
              <a
                href="mailto:contact@blushwithmitali.com"
                className="flex items-center gap-3 text-white/70 hover:text-[#D4AF37] transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>contact@blushwithmitali.com</span>
              </a>
              <a
                href="https://instagram.com/blush_with_mitali"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-[#E8B4BC] transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
                <span>@blush_with_mitali</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm text-center md:text-left">
              © {currentYear} Blush with Mitali. All rights reserved.
            </p>
            <p
              className="text-white/70 text-sm flex items-center gap-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Book your special day with us and make it unforgettable
              <Heart className="w-4 h-4 text-[#E8B4BC] fill-[#E8B4BC]" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;