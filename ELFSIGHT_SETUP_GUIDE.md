# 🌟 Elfsight Google Reviews Widget Setup Guide

## ✅ What's Been Prepared

Your website is now ready to display real Google reviews using Elfsight! I've added:

1. **Placeholder section** in the Testimonials area with instructions
2. **Comment placeholders** in the code where you'll add your widget
3. **Updated page title** to "Canine Beauty - Salon de Toilettage Premium à Casablanca"

---

## 📋 Step-by-Step Setup Instructions

### **Step 1: Create Your Elfsight Account**

1. Go to: https://elfsight.com/google-reviews-widget/
2. Click **"Add to website for free"**
3. Sign up with your email (free account available)

### **Step 2: Create Your Widget**

1. After signing in, click **"Create Widget"**
2. Select **"Google Reviews"**
3. Connect your Google Business account or enter your business details:
   - Business Name: **Canine Beauty salon de toilettage**
   - Location: **143 Rue 10, Casablanca 20250**
   - Google Place ID: (Elfsight will help you find this)

### **Step 3: Customize Your Widget**

Recommended settings to match your site design:

- **Layout**: Grid or Slider
- **Color scheme**: Purple (#7A1CFF) to match your brand
- **Number of reviews**: 6-9 reviews visible
- **Show rating**: Yes
- **Show date**: Yes
- **Language**: French

### **Step 4: Get Your Embed Code**

After customizing, Elfsight will give you two pieces of code:

```html
<!-- Script (goes in index.html) -->
<script src="https://apps.elfsight.com/p/platform.js" defer></script>

<!-- Widget (goes in App.tsx) -->
<div class="elfsight-app-xxxxx-xxxxx"></div>
```

---

## 🔧 How to Add the Code to Your Website

### **Part 1: Add the Script to index.html**

1. Open `index.html`
2. Find this line (around line 7):
   ```html
   <!-- <script src="https://apps.elfsight.com/p/platform.js" defer></script> -->
   ```
3. **Uncomment it** by removing `<!--` and `-->`:
   ```html
   <script src="https://apps.elfsight.com/p/platform.js" defer></script>
   ```

### **Part 2: Add the Widget to App.tsx**

1. Open `src/app/App.tsx`
2. Find the placeholder section (around line 410) that says:
   ```jsx
   {/* INSTRUCTIONS: ... */}
   <div className="bg-gradient-to-br from-purple-50...">
   ```
3. **Replace the entire placeholder div** with your Elfsight widget div:
   ```jsx
   <div className="elfsight-app-xxxxx-xxxxx"></div>
   ```
   (Use YOUR actual widget ID from Elfsight)

---

## 📝 Example: What Your Code Should Look Like

### **index.html (head section):**
```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Canine Beauty - Salon de Toilettage Premium à Casablanca</title>
  
  <!-- Elfsight Platform Script -->
  <script src="https://apps.elfsight.com/p/platform.js" defer></script>
  
  <style>
    ...
```

### **App.tsx (testimonials section):**
```jsx
{/* Elfsight Google Reviews Widget */}
<div className="mb-12">
  <div className="elfsight-app-12345-67890"></div>
</div>
```

---

## 🎨 Optional: Remove Fallback Testimonials

Once your Elfsight widget is working, you can remove the manual testimonials below it:

1. In `App.tsx`, find the comment:
   ```jsx
   {/* Fallback testimonials (can be removed once Elfsight widget is active) */}
   ```
2. Delete everything from that comment down to the closing `</div>` of the testimonials grid

---

## ✨ Benefits of Elfsight Widget

- ✅ **Auto-updates**: New Google reviews appear automatically
- ✅ **Real reviews**: Shows actual verified Google reviews
- ✅ **Trust building**: Displays 4.9★ rating and 4,936 reviews
- ✅ **Mobile responsive**: Works perfectly on all devices
- ✅ **Free tier**: Basic features available for free

---

## 🆘 Need Help?

If you get stuck or need me to add the code for you:

1. **Send me your Elfsight widget code** (both the script and the div)
2. I'll integrate it immediately

Or if you prefer a different review widget service, let me know and I can help with that too!

---

## 🔗 Useful Links

- Elfsight Google Reviews: https://elfsight.com/google-reviews-widget/
- Elfsight Dashboard: https://apps.elfsight.com/
- Google My Business: https://business.google.com/

---

**Ready to show off those 4,936 real reviews!** 🎉
