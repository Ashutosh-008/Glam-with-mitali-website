import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Ananya R.',
      event: 'Bridal',
      text: "Mitali gave me the exact 'Royal Luxe' look I had dreamed of for my wedding. The Ultra HD finish was flawless even after 10 hours of rituals, and her eye for detail is unmatched. Truly the best in the business!",
      rating: 5
    },
    {
      id: 2,
      name: 'Priya S.',
      event: 'Engagement',
      text: "I was nervous about looking 'overdone,' but Mitali's Soft Glam for my engagement was perfect. It felt like my skin but better. She is professional, calm, and incredibly talented.",
      rating: 5
    },
    {
      id: 3,
      name: 'Riya M.',
      event: 'Reception',
      text: "Booked Mitali for a high-profile reception, and I've never received so many compliments. The advanced hairstyling stayed perfectly in place, and the makeup felt so lightweight.",
      rating: 5
    },
    {
      id: 4,
      name: 'Srishti V.',
      event: 'Haldi/Mehendi',
      text: "The Fresh Haldi Glam was exactly what I needed—vibrant yet natural. Mitali has a way of enhancing your features without masking them. A truly seamless experience from booking to the final look!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-[#1B2845] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#E8B4BC]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Kind Words from Our Clients
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Hear from the beautiful brides and clients we've had the pleasure to work with
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="border-2 border-[#D4AF37]/30 bg-white/95 backdrop-blur-sm hover:border-[#D4AF37] hover:bg-white transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
            >
              <CardContent className="p-8">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-[#1B2845]/80 italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="border-t border-[#E8B4BC]/30 pt-4">
                  <p
                    className="font-semibold text-[#1B2845] text-lg"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {testimonial.name}
                  </p>
                  <p className="text-[#D4AF37] text-sm font-medium">{testimonial.event} Client</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;