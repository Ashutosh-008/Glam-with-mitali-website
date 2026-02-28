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

## 📧 Setting Up Email Form

The contact form currently uses Formspree (free service) to send emails directly to your inbox.

### **Option 1: Formspree (Recommended - Easy & Free)**

1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form
4. Copy your form endpoint (looks like: `https://formspree.io/f/xyzabc123`)
5. In `index.html`, find this line (around line 610):
   ```html
   <form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
6. Replace `YOUR_FORM_ID` with your actual Formspree form ID

**How it works:**
- When someone fills the form, Formspree sends the details to your email (mitaliverma8853@gmail.com)
- You'll receive notifications for every submission
- Free tier includes 50 submissions/month

### **Option 2: Direct Email (mailto:)**

If you prefer a simpler approach:

1. In `index.html`, replace the form's action attribute with:
   ```html
   <form class="contact-form" action="mailto:mitaliverma8853@gmail.com" method="POST" enctype="text/plain">
   ```

**Note:** This opens the user's email client. Less convenient but requires no setup.

### **Option 3: Google Forms**

1. Create a Google Form with the same fields
2. Get the form's embed link or action URL
3. Replace the form action in `index.html`

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
