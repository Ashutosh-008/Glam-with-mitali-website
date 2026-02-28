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
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Kind Words from Our Clients
          </h2>
          <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
            Hear from the beautiful brides and clients we've had the pleasure to work with
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="border-2 border-[#E5E5E5] hover:border-[#8B7355] transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-8">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#8B7355] text-[#8B7355]" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-[#5A5A5A] italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="border-t border-[#E5E5E5] pt-4">
                  <p
                    className="font-semibold text-[#2C2C2C] text-lg"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {testimonial.name}
                  </p>
                  <p className="text-[#8B7355] text-sm">{testimonial.event} Client</p>
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