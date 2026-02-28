# 📋 How to Receive and Manage Booking Inquiries

## ✅ What Happens When Someone Fills the Form?

When a potential client fills out the booking form on your website, here's what happens:

### 1. **Form Submission**
   - Client fills in: Name, Email, Event Date, Service Type, and Message
   - Data is submitted to your backend server
   - Data is stored in MongoDB database

### 2. **Where the Data is Stored**
   - All bookings are saved in MongoDB under the `bookings` collection
   - Each booking includes:
     - Client's name and email
     - Event date
     - Service requested (Bridal, Engagement, Reception, Haldi/Mehendi, Party)
     - Optional message
     - Submission timestamp
     - Status (pending, contacted, booked, cancelled)

---

## 📧 How Will You Know About New Bookings?

### Option 1: **Admin Dashboard** (Currently Implemented)
Visit: **`your-website-url.com/admin`**

This page shows:
- All booking inquiries in beautiful cards
- Client details (name, email, event date, service type, message)
- Status of each booking (pending, contacted, booked, cancelled)
- When the inquiry was received

**Bookmarks this URL and check it regularly!**

### Option 2: **Direct Email Access**
Clients can also click "Inquire via Email" button which opens:
- **mitaliverma8853@gmail.com**
- This sends the inquiry directly to your Gmail

---

## 🔄 Current Setup (What's Working)

✅ Form submissions save to database  
✅ Admin page to view all bookings  
✅ Email button for direct contact  
✅ All inquiries stored permanently  

---

## 📱 Future Enhancements (Optional)

If you want automatic email notifications when someone fills the form, you would need to:

1. **Set up email service** (like SendGrid, Gmail SMTP, or AWS SES)
2. **Add email credentials** to backend
3. **Backend will automatically send you an email** when form is submitted

This requires:
- Email service API key
- Additional backend configuration
- SMTP credentials

**Would you like me to add automatic email notifications?**

---

## 🎯 Quick Access URLs

- **Main Website**: your-deployed-url.com
- **Admin Dashboard**: your-deployed-url.com/admin
- **Your Email**: mitaliverma8853@gmail.com

---

## 💡 Recommended Workflow

1. **Check admin dashboard daily** (bookmark it!)
2. **Review new bookings** marked as "pending"
3. **Contact clients** via their email
4. **Update status** manually in database (future: add buttons in admin panel)

---

## 🛠️ Technical Details (For Reference)

- **Backend API**: `POST /api/bookings` - Creates new booking
- **Backend API**: `GET /api/bookings` - Retrieves all bookings
- **Database**: MongoDB collection named `bookings`
- **Email**: mitaliverma8853@gmail.com (updated everywhere)

---

**Need Help?** The admin dashboard is the easiest way to see all your bookings!
