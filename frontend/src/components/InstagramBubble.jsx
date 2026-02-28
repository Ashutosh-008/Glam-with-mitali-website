import React, { useState } from 'react';
import { Instagram } from 'lucide-react';

const InstagramBubble = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="https://instagram.com/blush_with_mitali"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Bubble Container */}
      <div className="relative">
        {/* Tooltip */}
        <div
          className={`absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-[#1B2845] text-white px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 shadow-lg ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
          }`}
        >
          <span className="font-medium">Follow @blush_with_mitali</span>
          {/* Arrow */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
            <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-[#1B2845]"></div>
          </div>
        </div>

        {/* Main Bubble */}
        <div className="relative w-16 h-16 bg-gradient-to-br from-[#E8B4BC] via-[#D4AF37] to-[#E8B4BC] rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center animate-pulse hover:animate-none">
          {/* Inner Circle */}
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
            <Instagram className="w-8 h-8 text-[#E8B4BC] group-hover:text-[#D4AF37] transition-colors duration-300" />
          </div>

          {/* Ripple Effect */}
          <div className="absolute inset-0 rounded-full bg-[#E8B4BC] opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500"></div>
        </div>

        {/* Small notification badge (optional) */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#D4AF37] rounded-full border-2 border-white flex items-center justify-center">
          <span className="text-white text-xs font-bold">!</span>
        </div>
      </div>
    </a>
  );
};

export default InstagramBubble;
