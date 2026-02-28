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
      <div className="min-h-screen bg-gradient-to-br from-[#FFF8F0] via-[#FFF0F5] to-[#FAF6F1] flex items-center justify-center">
        <div className="text-2xl text-[#1B2845]">Loading bookings...</div>
      </div>
    );
  }

  return (
    <div className=\"min-h-screen bg-gradient-to-br from-[#FFF8F0] via-[#FFF0F5] to-[#FAF6F1] py-12 px-6\">
      <div className=\"container mx-auto max-w-7xl\">
        {/* Header */}
        <div className=\"mb-12 text-center\">
          <h1
            className=\"text-5xl font-bold text-[#1B2845] mb-4\"
            style={{ fontFamily: \"'Playfair Display', serif\" }}
          >
            Booking Inquiries
          </h1>
          <p className=\"text-lg text-[#1B2845]/70\">
            Total Bookings: <span className=\"font-bold text-[#D4AF37]\">{bookings.length}</span>
          </p>
        </div>

        {error && (
          <div className=\"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6\">
            {error}
          </div>
        )}

        {/* Bookings Grid */}
        {bookings.length === 0 ? (
          <Card className=\"border-2 border-[#E8B4BC]/30 text-center py-12\">
            <CardContent>
              <p className=\"text-[#1B2845]/70 text-lg\">No bookings yet</p>
            </CardContent>
          </Card>
        ) : (
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6\">
            {bookings.map((booking) => (
              <Card
                key={booking.id}
                className=\"border-2 border-[#E8B4BC]/30 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-xl\"
              >
                <CardHeader>
                  <div className=\"flex justify-between items-start mb-2\">
                    <CardTitle
                      className=\"text-xl text-[#1B2845]\"
                      style={{ fontFamily: \"'Playfair Display', serif\" }}
                    >
                      {booking.name}
                    </CardTitle>
                    <Badge className={`${getStatusColor(booking.status)} text-white`}>
                      {booking.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className=\"space-y-4\">
                  {/* Email */}
                  <div className=\"flex items-center gap-3 text-sm\">
                    <Mail className=\"w-4 h-4 text-[#D4AF37]\" />
                    <a
                      href={`mailto:${booking.email}`}
                      className=\"text-[#1B2845]/80 hover:text-[#D4AF37] hover:underline\"
                    >
                      {booking.email}
                    </a>
                  </div>

                  {/* Service */}
                  <div className=\"flex items-center gap-3 text-sm\">
                    <User className=\"w-4 h-4 text-[#E8B4BC]\" />
                    <span className=\"text-[#1B2845]/80\">{getServiceName(booking.serviceRequired)}</span>
                  </div>

                  {/* Event Date */}
                  <div className=\"flex items-center gap-3 text-sm\">
                    <Calendar className=\"w-4 h-4 text-[#1B2845]\" />
                    <span className=\"text-[#1B2845]/80 font-medium\">{booking.eventDate}</span>
                  </div>

                  {/* Message */}
                  {booking.message && (
                    <div className=\"flex items-start gap-3 text-sm\">
                      <MessageSquare className=\"w-4 h-4 text-[#D4AF37] mt-1\" />
                      <p className=\"text-[#1B2845]/70 italic line-clamp-3\">{booking.message}</p>
                    </div>
                  )}

                  {/* Created At */}
                  <div className=\"flex items-center gap-3 text-xs text-[#1B2845]/50 pt-2 border-t border-[#E8B4BC]/20\">
                    <Clock className=\"w-3 h-3\" />
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
