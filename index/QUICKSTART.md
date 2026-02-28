# 🚀 QUICK START GUIDE - Blush with Mitali Website

## ✅ What You Have

A complete, ready-to-use makeup artist portfolio website with:
- **Email form** that sends bookings directly to mitaliverma8853@gmail.com
- **No third-party services** needed
- **Pure HTML/CSS/PHP** - simple and reliable

---

## 📤 How to Deploy (3 Easy Steps)

### **Method 1: Any PHP Web Hosting (Recommended)**

**Works with:** Hostinger, Bluehost, GoDaddy, SiteGround, A2 Hosting, etc.

1. **Upload Files**
   - Login to your hosting control panel (cPanel)
   - Go to File Manager
   - Upload ALL files from the `index` folder to `public_html` or `www` folder

2. **Done!**
   - Your website is live at: `yourdomain.com`
   - Contact form automatically sends emails to: mitaliverma8853@gmail.com

3. **Test It**
   - Fill out the contact form
   - Check mitaliverma8853@gmail.com inbox
   - You should receive the booking details!

---

### **Method 2: Free Hosting with PHP**

**Free Options:**
- **InfinityFree** (infinityfree.net) - 100% free with PHP
- **000webhost** (000webhost.com) - Free with PHP support
- **Byet Host** (byet.host) - Free PHP hosting

**Steps:**
1. Sign up for free hosting
2. Upload the files via File Manager or FTP
3. Your site is live!

---

### **Method 3: Netlify (with Netlify Forms)**

Netlify doesn't support PHP, but has built-in form handling:

1. **Update the form in index.html:**
   Change line 608 from:
   ```html
   <form class="contact-form" action="send-email.php" method="POST" id="contactForm">
   ```
   To:
   ```html
   <form class="contact-form" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
   ```

2. **Deploy to Netlify:**
   - Go to netlify.com
   - Drag and drop the `index` folder
   - Done!

3. **Configure Email Notifications:**
   - Go to Site Settings → Forms → Form Notifications
   - Add email notification to: mitaliverma8853@gmail.com

---

## 📧 What Happens When Someone Books?

1. Client fills the form with:
   - Name
   - Email
   - Event Date
   - Service Type (Bridal/Engagement/etc.)
   - Message

2. Email is sent instantly to: **mitaliverma8853@gmail.com**

3. Email contains all booking details (see EMAIL_EXAMPLE.txt)

4. You can reply directly to the client's email

5. Client sees success message on website

---

## 🔧 Customization

### **Change Your Email Address:**
Edit `send-email.php`, line 7:
```php
$to_email = "your-new-email@gmail.com";
```

### **Change Colors:**
Edit `style.css`, lines 9-14:
```css
:root {
    --navy: #1B2845;
    --gold: #D4AF37;
    --pink: #E8B4BC;
    --cream: #FFF8F0;
    --beige: #FAF6F1;
    --black: #0F0F0F;
}
```

### **Add/Remove Gallery Photos:**
Edit `index.html`, starting around line 380

### **Update Services/Pricing:**
Edit `index.html`, starting around line 70

---

## ⚠️ Troubleshooting

### **"Email not sending"**
- Make sure your hosting supports PHP
- Check spam/junk folder in mitaliverma8853@gmail.com
- Some hosts require email verification first (check hosting docs)

### **"Form not working"**
- Verify `send-email.php` is in the same folder as `index.html`
- Check if PHP is enabled on your hosting

### **"Page not loading"**
- Make sure you uploaded all 4 files (index.html, style.css, script.js, send-email.php)
- Check file permissions (should be 644 for files, 755 for folders)

---

## 📱 Features Included

✅ Fully responsive (mobile, tablet, desktop)
✅ 14 gallery images
✅ 5 service categories with pricing
✅ 4 client testimonials
✅ Email contact form (no third-party)
✅ Instagram floating button
✅ Smooth scrolling
✅ Mobile menu

---

## 🎯 Next Steps

1. **Upload to hosting** (choose method above)
2. **Test the contact form** (send yourself a test booking)
3. **Share your website** with clients!

---

## 💡 Pro Tips

- Check mitaliverma8853@gmail.com regularly for bookings
- Add the email to your phone for instant notifications
- Consider setting up email forwarding if needed
- Keep the website URL simple and memorable

---

## 📞 Contact Info on Website

- **Email:** mitaliverma8853@gmail.com
- **Instagram:** @blush_with_mitali
- **Service Area:** Available for bookings across India

---

**Need Help?** The website is ready to go! Just upload to any PHP hosting and you're done! 🎉
