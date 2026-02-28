import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Calendar, Mail, User, MessageSquare, Clock } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const AdminPage = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API}/bookings`);
      setBookings(response.data);
    } catch (err) {
      setError('Failed to fetch bookings');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      pending: 'bg-yellow-500',
      contacted: 'bg-blue-500',
      booked: 'bg-green-500',
      cancelled: 'bg-red-500'
    };
    return colors[status] || 'bg-gray-500';
  };

  const getServiceName = (service) => {
    const services = {
      bridal: 'Bridal Makeup',
      engagement: 'Engagement Makeup',
      reception: 'Reception Makeup',
      haldi: 'Haldi/Mehendi',
      party: 'Party Makeup'
    };
    return services[service] || service;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cream via-pink to-beige flex items-center justify-center">
        <div className="text-2xl text-navy">Loading bookings...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-pink to-beige py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1
            className="text-5xl font-bold text-navy mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Booking Inquiries
          </h1>
          <p className="text-lg text-navy-light">
            Total Bookings: <span className="font-bold text-gold">{bookings.length}</span>
          </p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {bookings.length === 0 ? (
          <Card className="border-2 border-pink-light text-center py-12">
            <CardContent>
              <p className="text-navy-light text-lg">No bookings yet</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookings.map((booking) => (
              <Card
                key={booking.id}
                className="border-2 border-pink-light hover:border-gold transition-all duration-300 hover:shadow-xl"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle
                      className="text-xl text-navy"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {booking.name}
                    </CardTitle>
                    <Badge className={`${getStatusColor(booking.status)} text-white`}>
                      {booking.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-gold" />
                    <a
                      href={`mailto:${booking.email}`}
                      className="text-navy-medium hover:text-gold hover:underline"
                    >
                      {booking.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <User className="w-4 h-4 text-pink" />
                    <span className="text-navy-medium">{getServiceName(booking.serviceRequired)}</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="w-4 h-4 text-navy" />
                    <span className="text-navy-medium font-medium">{booking.eventDate}</span>
                  </div>

                  {booking.message && (
                    <div className="flex items-start gap-3 text-sm">
                      <MessageSquare className="w-4 h-4 text-gold mt-1" />
                      <p className="text-navy-light italic line-clamp-3">{booking.message}</p>
                    </div>
                  )}

                  <div className="flex items-center gap-3 text-xs text-navy-lightest pt-2 border-t border-pink-lightest">
                    <Clock className="w-3 h-3" />
                    <span>Received: {formatDate(booking.createdAt)}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
