# Blush with Mitali - Makeup Artist Portfolio Website

A beautiful, static HTML/CSS landing page for professional makeup artist Mitali Verma.

## 📁 Files Included

- `index.html` - Main HTML file with all content
- `style.css` - Complete styling with navy, gold, pink & cream color scheme
- `script.js` - JavaScript for mobile menu, tabs, and smooth scrolling

## 🚀 How to Use

1. Open the `index` folder
2. Double-click `index.html` to view in your browser
3. Or upload all files to any web hosting service

## 📧 Email Setup - Simple PHP Solution

The contact form uses a simple PHP script to send emails **directly to mitaliverma8853@gmail.com** - no third-party services needed!

### **How It Works:**

1. User fills the contact form
2. Form submits to `send-email.php`
3. PHP sends email to: **mitaliverma8853@gmail.com**
4. User sees success message

### **Requirements:**

✅ Web hosting with PHP support (most hosts have this)
✅ That's it! No signup, no API keys, no third-party services

### **Works On:**

- **Shared Hosting** (Hostinger, Bluehost, GoDaddy, etc.) ✅
- **cPanel Hosting** ✅
- **Most Web Hosts** ✅

### **Does NOT Work On:**

- ❌ GitHub Pages (no PHP support)
- ❌ Netlify/Vercel (static only, but they have form handling features)

### **For Netlify/Vercel (Alternative):**

If using Netlify or Vercel, simply add this to your form tag:
```html
<form ... data-netlify="true" netlify-honeypot="bot-field">
```

Netlify will automatically handle form submissions and email you!

### **Testing Locally:**

You need a local PHP server:
```bash
php -S localhost:8000
```

Then open: `http://localhost:8000`

## 🎨 Color Scheme

- **Navy Blue**: #1B2845
- **Gold**: #D4AF37
- **Pink**: #E8B4BC
- **Cream**: #FFF8F0
- **Black**: #0F0F0F

## 📱 Features

✅ Fully responsive (mobile, tablet, desktop)
✅ 14 gallery images showcasing makeup work
✅ Service packages with detailed pricing tiers
✅ Client testimonials
✅ Contact form with email integration
✅ Instagram floating button
✅ Smooth scrolling navigation
✅ Mobile-friendly menu
✅ No backend required

## 🌐 Deployment Options

### **Deploy to Netlify (Free)**
1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop the entire `index` folder
3. Your site will be live instantly!

### **Deploy to GitHub Pages (Free)**
1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in settings
4. Access at: `username.github.io/repository-name`

### **Deploy to Vercel (Free)**
1. Create account at [vercel.com](https://vercel.com)
2. Import your project
3. Deploy with one click

## 📞 Contact Information

All contact forms and links are set to:
- **Email**: mitaliverma8853@gmail.com
- **Instagram**: @blush_with_mitali

## 🔧 Customization

### **To Change Colors:**
Edit the `:root` variables in `style.css` (lines 9-14)

### **To Add/Remove Gallery Images:**
Edit the gallery section in `index.html` (around line 380)

### **To Modify Services:**
Edit the service cards in `index.html` (around line 70)

## ⚡ Performance

- Pure HTML/CSS/JS - loads instantly
- No frameworks or dependencies
- Optimized images from CDN
- Mobile-first responsive design

## 📄 Browser Support

✅ Chrome, Firefox, Safari, Edge
✅ Mobile browsers (iOS Safari, Chrome Mobile)
✅ Works on all modern devices

---

**Need help?** The website is ready to use as-is! Just set up your Formspree account and you're good to go.

**Live Demo:** Open `index.html` in any browser to see it in action.
