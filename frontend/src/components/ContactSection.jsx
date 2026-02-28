import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';
import { Mail, Instagram, MapPin } from 'lucide-react';
import { toast } from '../hooks/use-toast';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventDate: '',
    serviceRequired: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await axios.post(`${API}/bookings`, formData);
      
      toast({
        title: "Booking Inquiry Sent!",
        description: "We'll get back to you within 24 hours at mitaliverma8853@gmail.com",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        eventDate: '',
        serviceRequired: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Failed",
        description: "Please try again or email us directly at mitaliverma8853@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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
    window.location.href = 'mailto:mitaliverma8853@gmail.com?subject=Booking Inquiry';
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#FFF8F0] via-[#FFF0F5] to-[#FAF6F1]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1B2845] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Book Your Date
          </h2>
          <p className="text-lg text-[#1B2845]/70 max-w-2xl mx-auto">
            Ready to look stunning on your special day? Get in touch with us today!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="border-2 border-[#E8B4BC]/30 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <CardTitle
                  className="text-2xl text-[#1B2845]"
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
                    <h3 className="font-semibold text-[#1B2845] mb-1">Email Us</h3>
                    <Button
                      onClick={handleEmailClick}
                      variant="link"
                      className="text-[#D4AF37] hover:text-[#B8941F] p-0 h-auto"
                    >
                      mitaliverma8853@gmail.com
                    </Button>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#E8B4BC]/20 p-3 rounded-full">
                    <Instagram className="w-6 h-6 text-[#E8B4BC]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1B2845] mb-1">Follow Us</h3>
                    <a
                      href="https://instagram.com/blush_with_mitali"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#E8B4BC] hover:text-[#D4A5A5] hover:underline transition-colors duration-300"
                    >
                      @blush_with_mitali
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#1B2845]/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-[#1B2845]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1B2845] mb-1">Service Area</h3>
                    <p className="text-[#1B2845]/70">Available for bookings across India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Direct Email CTA */}
            <Card className="bg-gradient-to-br from-[#1B2845] to-[#0F1F3A] text-white border-none shadow-xl">
              <CardContent className="p-8 text-center">
                <h3
                  className="text-2xl font-bold mb-4 text-[#D4AF37]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Prefer Email?
                </h3>
                <p className="mb-6 text-white/90">
                  Click below to send us an inquiry directly via your email client
                </p>
                <Button
                  onClick={handleEmailClick}
                  className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#1B2845] font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Inquire via Email
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <Card className="border-2 border-[#E8B4BC]/30 hover:border-[#D4AF37] transition-all duration-300 shadow-lg">
            <CardHeader>
              <CardTitle
                className="text-2xl text-[#1B2845]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Book an Appointment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[#1B2845] font-medium">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="border-[#E8B4BC]/50 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#1B2845] font-medium">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="border-[#E8B4BC]/50 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                  />
                </div>

                {/* Event Date */}
                <div className="space-y-2">
                  <Label htmlFor="eventDate" className="text-[#1B2845] font-medium">Event Date *</Label>
                  <Input
                    id="eventDate"
                    name="eventDate"
                    type="date"
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                    className="border-[#E8B4BC]/50 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                  />
                </div>

                {/* Service Required */}
                <div className="space-y-2">
                  <Label htmlFor="serviceRequired" className="text-[#1B2845] font-medium">Service Required *</Label>
                  <Select onValueChange={handleServiceChange} value={formData.serviceRequired} required>
                    <SelectTrigger className="border-[#E8B4BC]/50 focus:border-[#D4AF37] focus:ring-[#D4AF37]">
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
                  <Label htmlFor="message" className="text-[#1B2845] font-medium">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your event and any specific requirements..."
                    rows={4}
                    className="border-[#E8B4BC]/50 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-[#1B2845] font-semibold py-6 text-lg transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
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