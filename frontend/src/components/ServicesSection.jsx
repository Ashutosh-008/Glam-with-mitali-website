import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Crown, Heart, Sparkles, Flower, PartyPopper } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      id: 'bridal',
      title: 'Bridal Makeup',
      icon: Crown,
      packages: [
        {
          name: 'Classic',
          price: '₹',
          features: ['HD base', 'Natural glow', 'Subtle eyes', 'Basic hairstyle']
        },
        {
          name: 'HD Glam',
          price: '₹₹',
          features: ['HD flawless finish', 'Defined eyes', 'Advanced styling', 'Accessories setup'],
          popular: true
        },
        {
          name: 'Royal Luxe',
          price: '₹₹₹',
          features: ['Ultra HD finish', 'Detailed eye art', 'Advanced hair', 'Touch-up kit', 'Premium products']
        }
      ]
    },
    {
      id: 'engagement',
      title: 'Engagement Makeup',
      icon: Heart,
      packages: [
        {
          name: 'Soft Glam',
          price: '₹',
          features: ['Natural finish', 'Soft eyes', 'Simple hairstyle', 'Light draping']
        },
        {
          name: 'HD Glam',
          price: '₹₹',
          features: ['HD finish', 'Enhanced eyes', 'Styled hair', 'Advanced draping']
        },
        {
          name: 'Ultra HD Luxe',
          price: '₹₹₹',
          features: ['Ultra HD base', 'Detailed makeup', 'Luxe hairstyle', 'Premium finish']
        }
      ]
    },
    {
      id: 'reception',
      title: 'Reception Makeup',
      icon: Sparkles,
      packages: [
        {
          name: 'Elegant Glam',
          price: '₹',
          features: ['Radiant finish', 'Elegant eyes', 'Chic hairstyle', 'Long-lasting']
        },
        {
          name: 'HD Glam',
          price: '₹₹',
          features: ['HD perfection', 'Statement eyes', 'Sophisticated hair', 'Premium draping']
        },
        {
          name: 'Ultra HD Royal',
          price: '₹₹₹',
          features: ['Ultra luxe finish', 'Glamorous eyes', 'Designer hair', 'Complete package']
        }
      ]
    },
    {
      id: 'haldi',
      title: 'Haldi/Mehendi',
      icon: Flower,
      packages: [
        {
          name: 'Fresh Glam',
          price: '₹',
          features: ['Fresh look', 'Vibrant colors', 'Simple styling', 'Water-resistant']
        },
        {
          name: 'Vibrant Glam',
          price: '₹₹',
          features: ['Bold colors', 'Enhanced features', 'Styled look', 'Long-wear']
        },
        {
          name: 'Royal Glam',
          price: '₹₹₹',
          features: ['Premium finish', 'Detailed work', 'Designer styling', 'Complete package']
        }
      ]
    },
    {
      id: 'party',
      title: 'Party Makeup',
      icon: PartyPopper,
      packages: [
        {
          name: 'Basic',
          price: '₹',
          features: ['Natural look', 'Simple eyes', 'Quick styling', 'Touch-up tips']
        },
        {
          name: 'HD',
          price: '₹₹',
          features: ['HD finish', 'Glamorous eyes', 'Professional styling', 'Long-lasting']
        },
        {
          name: 'Ultra HD Luxe',
          price: '₹₹₹',
          features: ['Ultra HD base', 'Statement look', 'Premium styling', 'Complete glam']
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Services
          </h2>
          <p className="text-lg text-[#2C2C2C]/70 max-w-2xl mx-auto">
            Tailored makeup packages for every special occasion in your life
          </p>
        </div>

        {/* Services Tabs */}
        <Tabs defaultValue="bridal" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-4 mb-12 bg-transparent h-auto">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-white bg-[#FFF8F0] text-[#2C2C2C] px-6 py-3 rounded-full transition-all duration-300 hover:bg-[#D4AF37]/20"
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {service.title}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {service.packages.map((pkg, index) => (
                  <Card
                    key={index}
                    className={`relative overflow-hidden border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                      pkg.popular
                        ? 'border-[#D4AF37] shadow-lg'
                        : 'border-[#2C2C2C]/10 hover:border-[#D4AF37]'
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-[#D4AF37] text-white">Most Popular</Badge>
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle
                        className="text-2xl text-[#2C2C2C]"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {pkg.name}
                      </CardTitle>
                      <CardDescription className="text-3xl font-bold text-[#D4AF37] mt-2">
                        {pkg.price}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-[#2C2C2C]/80">
                            <span className="text-[#D4AF37] mr-2">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-[#2C2C2C]/70 italic">
            All packages can be customized to your specific needs. Contact us for detailed pricing and availability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
