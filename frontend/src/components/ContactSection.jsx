import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';
import { Mail, Instagram, MapPin } from 'lucide-react';
import { toast } from '../hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventDate: '',
    serviceRequired: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission
    console.log('Form submitted:', formData);
    
    toast({
      title: "Booking Inquiry Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      eventDate: '',
      serviceRequired: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceChange = (value) => {
    setFormData({
      ...formData,
      serviceRequired: value
    });
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:contact@blushwithmitali.com?subject=Booking Inquiry';
  };

  return (
    <section id="contact" className="py-20 bg-[#FFF8F0]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Book Your Date
          </h2>
          <p className="text-lg text-[#2C2C2C]/70 max-w-2xl mx-auto">
            Ready to look stunning on your special day? Get in touch with us today!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="border-2 border-[#D4AF37]/20">
              <CardHeader>
                <CardTitle
                  className="text-2xl text-[#2C2C2C]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#D4AF37]/20 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C2C2C] mb-1">Email Us</h3>
                    <Button
                      onClick={handleEmailClick}
                      variant="link"
                      className="text-[#D4AF37] hover:text-[#B8941F] p-0 h-auto"
                    >
                      contact@blushwithmitali.com
                    </Button>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#D4AF37]/20 p-3 rounded-full">
                    <Instagram className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C2C2C] mb-1">Follow Us</h3>
                    <a
                      href="https://instagram.com/blush_with_mitali"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D4AF37] hover:text-[#B8941F] hover:underline"
                    >
                      @blush_with_mitali
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#D4AF37]/20 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C2C2C] mb-1">Service Area</h3>
                    <p className="text-[#2C2C2C]/70">Available for bookings across India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Direct Email CTA */}
            <Card className="bg-gradient-to-br from-[#D4AF37] to-[#B8941F] text-white border-none">
              <CardContent className="p-8 text-center">
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Prefer Email?
                </h3>
                <p className="mb-6 opacity-90">
                  Click below to send us an inquiry directly via your email client
                </p>
                <Button
                  onClick={handleEmailClick}
                  className="bg-white text-[#D4AF37] hover:bg-[#FFF8F0] transition-colors duration-300"
                >
                  Inquire via Email
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <Card className="border-2 border-[#2C2C2C]/10">
            <CardHeader>
              <CardTitle
                className="text-2xl text-[#2C2C2C]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Book an Appointment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[#2C2C2C]">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="border-[#2C2C2C]/20 focus:border-[#D4AF37]"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#2C2C2C]">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="border-[#2C2C2C]/20 focus:border-[#D4AF37]"
                  />
                </div>

                {/* Event Date */}
                <div className="space-y-2">
                  <Label htmlFor="eventDate" className="text-[#2C2C2C]">Event Date *</Label>
                  <Input
                    id="eventDate"
                    name="eventDate"
                    type="date"
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                    className="border-[#2C2C2C]/20 focus:border-[#D4AF37]"
                  />
                </div>

                {/* Service Required */}
                <div className="space-y-2">
                  <Label htmlFor="serviceRequired" className="text-[#2C2C2C]">Service Required *</Label>
                  <Select onValueChange={handleServiceChange} value={formData.serviceRequired}>
                    <SelectTrigger className="border-[#2C2C2C]/20 focus:border-[#D4AF37]">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bridal">Bridal Makeup</SelectItem>
                      <SelectItem value="engagement">Engagement Makeup</SelectItem>
                      <SelectItem value="reception">Reception Makeup</SelectItem>
                      <SelectItem value="haldi">Haldi/Mehendi</SelectItem>
                      <SelectItem value="party">Party Makeup</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#2C2C2C]">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your event and any specific requirements..."
                    rows={4}
                    className="border-[#2C2C2C]/20 focus:border-[#D4AF37]"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white py-6 text-lg transition-colors duration-300"
                >
                  Send Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
