# Engineering Portfolio Website

A clean, minimal portfolio site for showcasing AI systems, backend engineering, and full-stack projects.

## 📁 File Structure

```
portfolio/
├── index.html              # Main HTML file with all page sections
├── css/
│   └── styles.css         # Complete styling
├── js/
│   ├── navigation.js      # Page navigation and routing logic
│   └── projects-data.js   # Project information in JSON format
├── assets/
│   ├── diagrams/          # Architecture diagrams (add your SVG/PNG files here)
│   └── resume/
│       └── resume.pdf     # Your resume PDF file
└── README.md              # This file
```

## 🚀 Quick Start

1. **Clone or download** all files maintaining the folder structure above

2. **Add your resume PDF**:

   - Place your resume PDF in `assets/resume/resume.pdf`

3. **Add project diagrams** (optional):

   - Place architecture diagrams in `assets/diagrams/`
   - Update project data to reference these images

4. **Open in browser**:
   - Simply open `index.html` in any modern web browser
   - No build process or server required (static site)

## 📝 File Descriptions

### **index.html**

The main HTML file containing all page sections:

- Home page with skills grid and featured projects
- Projects listing page
- AI Systems page with workflow diagrams
- Timeline page showing academic and professional journey
- About page with detailed skills
- Contact page with form
- Dynamic case study container for project details

### **css/styles.css**

All styling including:

- Responsive design (mobile, tablet, desktop)
- Navigation styling
- Project cards
- Case study pages
- Contact form
- Timeline visualization
- Color scheme and typography

### **js/projects-data.js**

Contains all project information in structured JSON format:

- Project metadata (title, category, tech stack)
- Case study details (problem, solution, architecture)
- Technical breakdowns
- Engineering decisions
- Limitations and improvements

**To add new projects**: Edit this file and add new project objects following the existing structure.

### **js/navigation.js**

Handles all page interactions:

- Page switching and routing
- URL hash management (back/forward buttons work)
- Dynamic project card generation
- Case study page rendering
- Contact form validation

## ✏️ Customization Guide

### Adding New Projects

1. Open `js/projects-data.js`
2. Add a new project object to the `projectsData` array:

```javascript
{
    id: 'your-project',
    title: 'Your Project Name',
    category: 'AI Systems', // or 'Backend', 'Full-Stack AI', etc.
    summary: 'Brief description (max 12 words)',
    techStack: ['Python', 'FastAPI', 'etc'],
    featured: true, // Shows on home page
    github: 'https://github.com/yourrepo',
    demo: 'https://your-demo-link',
    caseStudy: {
        problem: 'The problem statement...',
        whyMatters: 'Why this matters...',
        solution: 'Your solution overview...',
        architecture: [
            'Component 1',
            'Component 2',
            // etc.
        ],
        technical: {
            backend: 'Backend details...',
            ml: 'ML details...',
            database: 'Database details...'
        },
        decisions: [
            {
                title: 'Decision title',
                reason: 'Why you made this choice'
            }
        ],
        limitations: 'Honest limitations...',
        improvements: [
            'Improvement 1',
            'Improvement 2'
        ]
    }
}
```

### Updating Contact Information

Edit `index.html` and find the contact section:

- Update email address
- Update phone number
- Update LinkedIn URL
- Update GitHub URL

### Changing Colors

Edit `css/styles.css` and modify the CSS variables:

```css
:root {
  --primary-bg: #ffffff;
  --secondary-bg: #f8f8f8;
  --text-primary: #111111;
  --text-secondary: #666666;
  --accent: #2563eb; /* Change this for different accent color */
  --border: #e5e5e5;
}
```

### Updating Timeline

Edit `index.html` and find the timeline section. Add new timeline items:

```html
<div class="timeline-item">
  <div class="timeline-year">2026</div>
  <div class="timeline-content">
    <h3>Your milestone</h3>
    <p>Description</p>
  </div>
</div>
```

## 🌐 Deployment Options

### Option 1: GitHub Pages (Free)

1. Create a GitHub repository
2. Upload all files
3. Go to Settings → Pages
4. Select main branch
5. Your site will be live at `https://yourusername.github.io/repo-name`

### Option 2: Netlify (Free)

1. Sign up at netlify.com
2. Drag and drop your portfolio folder
3. Site goes live instantly
4. Custom domain support available

### Option 3: Vercel (Free)

1. Sign up at vercel.com
2. Import your GitHub repository
3. Automatic deployments on every commit

### Option 4: Traditional Hosting

Upload all files via FTP to any web hosting provider.

## 📱 Browser Support

Works on all modern browsers:

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Contact Form Setup

The contact form currently shows a success message without sending emails. To make it functional:

1. **Option A - Use a service like Formspree**:

   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST"></form>
   ```

2. **Option B - Build a backend**:

   - Create a simple API endpoint (Node.js, Python, etc.)
   - Update the form submission in `js/navigation.js`
   - Deploy the backend separately

3. **Option C - Use mailto (simple but opens email client)**:
   ```html
   <form
     action="mailto:your@email.com"
     method="post"
     enctype="text/plain"
   ></form>
   ```

## 📊 Performance

- Fast loading (< 1.5 seconds)
- Minimal dependencies (no frameworks required)
- Optimized for mobile
- SEO-friendly structure

## 🎨 Design Principles

This portfolio follows your specifications:

- ✅ Clean, minimal, engineering-focused
- ✅ No animations or fancy transitions
- ✅ Clarity over decoration
- ✅ Architecture over aesthetics
- ✅ Mobile responsive
- ✅ Fast loading
- ✅ Easy to maintain

## 📄 License

This portfolio template is yours to use freely. Customize it however you want!

## 🆘 Troubleshooting

**Projects not showing?**

- Check browser console for errors
- Ensure `projects-data.js` loads before `navigation.js`

**Navigation not working?**

- Clear browser cache
- Check that all JavaScript files are properly linked

**Styling issues?**

- Verify `styles.css` is in the correct location
- Check browser developer tools for CSS errors

**Contact form not working?**

- This is expected - see "Contact Form Setup" section above
- The form validates but doesn't send emails by default

## 📞 Support

For questions or issues:

- Email: saimonemon46@gmail.com
- Check browser console for error messages
- Verify all files are in correct folders

---

Built with clean HTML, CSS, and JavaScript. No frameworks, no build process, just pure web development.
