# Content Addition Guide

This guide explains how to add your actual project videos, GitHub links, and customize content.

## 📹 Adding Project Demo Videos

You have several options for hosting project demo videos:

### Option 1: YouTube (Recommended)

1. Upload your project demo to YouTube
2. Get the video URL (e.g., `https://www.youtube.com/watch?v=VIDEO_ID`)
3. Update `js/projects-data.js`:
   ```javascript
   demo: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID";
   ```

### Option 2: Direct Video Files

1. Create `assets/videos/` folder
2. Add your video files (MP4 format recommended)
3. Update project data:
   ```javascript
   demo: "assets/videos/predictwise-demo.mp4";
   ```
4. Optionally, modify case study template to embed video player

### Option 3: Google Drive

1. Upload video to Google Drive
2. Right-click → Get link → Set to "Anyone with the link"
3. Use the shareable link in project data

### Option 4: Loom/Vimeo

Similar to YouTube, upload and use the share URL.

## 🔗 Adding GitHub Repository Links

1. Open `js/projects-data.js`
2. Find each project object
3. Update the `github` field:
   ```javascript
   {
       id: 'predictwise',
       title: 'PredictWise App',
       github: 'https://github.com/yourusername/predictwise',  // Update this
       demo: 'your-demo-link',
       // ... rest of project data
   }
   ```

## 🖼️ Adding Architecture Diagrams

### Creating Diagrams

**Tools you can use:**

- **Draw.io (diagrams.net)** - Free, browser-based
- **Excalidraw** - Simple sketching tool
- **Figma** - Professional design tool
- **Lucidchart** - Flowchart specialist
- **Microsoft Visio** - Enterprise option

### Diagram Guidelines

Based on your documentation, each project needs:

1. **System Architecture Diagram** showing:

   - User interface layer
   - API/Backend layer
   - Database layer
   - External services
   - Data flow arrows

2. **For AI Projects, also show**:
   - LLM pipeline flow
   - RAG architecture (if applicable)
   - Agent workflow (if applicable)

### Adding Diagrams to Your Site

**Option A: Inline SVG** (Recommended for simple diagrams)

```html
<!-- In case study section -->
<div class="architecture-diagram">
  <svg width="600" height="400">
    <!-- Your SVG content -->
  </svg>
</div>
```

**Option B: Image Files**

1. Export diagram as PNG or SVG
2. Save to `assets/diagrams/`
3. Update case study template in `navigation.js`:
   ```javascript
   <div class="case-study-section">
       <h3>System Architecture</h3>
       <img src="assets/diagrams/predictwise-architecture.png"
            alt="PredictWise Architecture"
            style="max-width: 100%; border-radius: 8px;">
   </div>
   ```

**Option C: Use Existing Text-Based Diagrams**
The current implementation uses text boxes and arrows. You can enhance these:

```javascript
architecture: [
  "User Interface (Web Frontend)",
  "FastAPI Backend - Authentication • Routing • Validation",
  "ML Models (.pkl) - Car Price • Laptop Price",
  // etc.
];
```

## 📝 Updating Personal Information

### Update About Page

Edit `index.html`, find the About section:

```html
<div class="about-section">
  <h3>Professional Summary</h3>
  <p>Your updated professional summary here...</p>
</div>
```

### Update Skills

In `index.html`, update the skills grid on the home page:

```html
<div class="skill-card">
  <h3>Your Skill Category</h3>
  <p>List of technologies, frameworks, tools</p>
</div>
```

### Update Timeline

Add or modify timeline entries in `index.html`:

```html
<div class="timeline-item">
  <div class="timeline-year">2026</div>
  <div class="timeline-content">
    <h3>New Achievement</h3>
    <p>Description of what you accomplished</p>
  </div>
</div>
```

## 🎓 Adding Your Resume

1. Export your resume as PDF
2. Name it `resume.pdf` (or update links if different name)
3. Place in `assets/resume/` folder
4. Verify the link in `index.html`:
   ```html
   <a href="assets/resume/resume.pdf" class="btn" download
     >Download Resume (PDF)</a
   >
   ```

## 🔗 Social Media Links

Update all social links in `index.html`:

### In Navigation/Footer

```html
<a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank">LinkedIn</a>
<a href="https://github.com/YOUR_USERNAME" target="_blank">GitHub</a>
```

### In Contact Page

```html
<div class="contact-item">
  <strong>LinkedIn</strong>
  <a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank"
    >Your LinkedIn Profile</a
  >
</div>
```

## 📊 SEO Optimization

### Update Meta Tags

In `index.html` `<head>` section:

```html
<title>Your Name - AI & Backend Engineer</title>
<meta name="description" content="Your custom description here" />
<meta
  name="keywords"
  content="AI, Machine Learning, Backend, FastAPI, Python"
/>
<meta name="author" content="Your Name" />

<!-- Open Graph for social sharing -->
<meta property="og:title" content="Your Name - Portfolio" />
<meta property="og:description" content="Your description" />
<meta property="og:image" content="URL to your profile image" />
<meta property="og:url" content="Your portfolio URL" />
```

## 🎨 Customizing Design

### Change Accent Color

In `css/styles.css`:

```css
:root {
  --accent: #2563eb; /* Change to any color you want */
}
```

Popular options:

- Blue: `#2563eb` (current)
- Green: `#059669`
- Purple: `#7c3aed`
- Orange: `#ea580c`

### Change Font

Add Google Fonts in `index.html` `<head>`:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

Then update in `css/styles.css`:

```css
body {
  font-family: "Poppins", sans-serif;
}
```

## 📧 Setting Up Contact Form (Production)

### Using Formspree (Easiest)

1. Go to [formspree.io](https://formspree.io)
2. Sign up and create a form
3. Get your form endpoint
4. Update in `index.html`:
   ```html
   <form
     id="contact-form"
     action="https://formspree.io/f/YOUR_FORM_ID"
     method="POST"
   ></form>
   ```
5. Remove JavaScript form handling or keep for validation

### Using Netlify Forms (If hosted on Netlify)

1. Add `netlify` attribute to form:
   ```html
   <form name="contact" method="POST" data-netlify="true"></form>
   ```
2. Netlify automatically handles submissions

### Using EmailJS (Free tier available)

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Set up email service
3. Add EmailJS SDK to `index.html`:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   ```
4. Update form submission in `js/navigation.js`

## 🚀 Pre-Launch Checklist

Before deploying your portfolio:

- [ ] All project GitHub links updated
- [ ] All demo video links added
- [ ] Resume PDF uploaded and linked
- [ ] LinkedIn URL updated
- [ ] GitHub URL updated
- [ ] Email address verified
- [ ] Phone number updated (if you want it public)
- [ ] All social media links tested
- [ ] Test on mobile device
- [ ] Test on different browsers
- [ ] Check all page navigation works
- [ ] Verify contact form (if implemented)
- [ ] Check spelling and grammar
- [ ] Verify all case studies have complete content
- [ ] Test download resume button

## 📱 Testing on Mobile

1. Open Chrome DevTools (F12)
2. Click device toolbar icon (Ctrl+Shift+M)
3. Test these screen sizes:
   - iPhone SE (375px)
   - iPhone 12 Pro (390px)
   - iPad (768px)
   - iPad Pro (1024px)
4. Check:
   - Navigation menu readable
   - Cards stack properly
   - Text is readable
   - Buttons are tappable

## 🔍 Final Quality Checks

### Content Quality

- No lorem ipsum text
- No placeholder links (#)
- All images load correctly
- No broken links
- Professional tone throughout

### Technical Quality

- No console errors (F12 → Console)
- Pages load quickly
- Navigation smooth
- Forms work
- Mobile responsive

### Professional Polish

- Consistent capitalization
- Proper grammar
- Technical terms spelled correctly
- Dates formatted consistently
- Professional email address

## 💡 Tips for Success

1. **Start Simple**: Get basic content up first, then enhance
2. **Real Projects Only**: Only showcase projects you can explain in detail
3. **Keep Updated**: Update as you complete new projects
4. **Test Thoroughly**: Have friends test on their devices
5. **Analytics**: Consider adding Google Analytics to track visitors
6. **Performance**: Optimize images before uploading
7. **Backups**: Keep a backup of your portfolio files

## 🆘 Common Issues

**Videos won't play?**

- Use YouTube or proper video hosting
- Direct video files should be MP4 format
- Check file size (keep under 50MB)

**Images too large?**

- Compress images using TinyPNG or similar
- Recommended: 1200px width max for diagrams

**Links not working?**

- Use full URLs with `https://`
- Test in private/incognito mode
- Check for typos in URLs

**Mobile layout broken?**

- Clear browser cache
- Test in actual device, not just DevTools
- Check CSS media queries

---

## Need Help?

If you run into issues:

1. Check browser console for errors (F12)
2. Verify all file paths are correct
3. Test in different browser
4. Review this guide again
5. Check README.md for setup instructions

Remember: This is YOUR portfolio. Make it reflect your skills and personality while maintaining professionalism!
