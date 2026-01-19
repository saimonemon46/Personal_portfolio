// Navigation and page management
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    loadProjects();
    setupContactForm();
    
    // Handle initial page load from URL hash
    const initialHash = window.location.hash.slice(1) || 'home';
    showPage(initialHash);
});

// Initialize navigation click handlers
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
            updateActiveNav(this);
            window.location.hash = pageId;
        });
    });

    // Handle browser back/forward buttons
    window.addEventListener('hashchange', function() {
        const pageId = window.location.hash.slice(1) || 'home';
        showPage(pageId);
    });
}

// Show specific page and hide others
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show requested page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        window.scrollTo(0, 0);
        updateActiveNav(null, pageId);
    } else if (pageId.startsWith('project-')) {
        // Handle case study pages
        showCaseStudy(pageId.replace('project-', ''));
    } else {
        // Fallback to home
        document.getElementById('home').classList.add('active');
    }
}

// Update active navigation link
function updateActiveNav(clickedLink, pageId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    
    if (clickedLink) {
        clickedLink.classList.add('active');
    } else if (pageId) {
        navLinks.forEach(link => {
            if (link.getAttribute('data-page') === pageId) {
                link.classList.add('active');
            }
        });
    }
}

// Load projects into grids
function loadProjects() {
    const featuredGrid = document.getElementById('featured-projects');
    const allProjectsGrid = document.getElementById('all-projects');
    
    if (!window.projectsData) {
        console.error('Projects data not loaded');
        return;
    }
    
    // Load featured projects
    const featuredProjects = window.projectsData.filter(p => p.featured);
    if (featuredGrid) {
        featuredGrid.innerHTML = featuredProjects.map(createProjectCard).join('');
    }
    
    // Load all projects
    if (allProjectsGrid) {
        allProjectsGrid.innerHTML = window.projectsData.map(createProjectCard).join('');
    }
    
    // Add click handlers to case study buttons
    setTimeout(() => {
        const caseStudyButtons = document.querySelectorAll('[data-project-id]');
        caseStudyButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const projectId = this.getAttribute('data-project-id');
                showCaseStudy(projectId);
                window.location.hash = 'project-' + projectId;
            });
        });
    }, 100);
}

// Create project card HTML
function createProjectCard(project) {
    return `
        <div class="project-card">
            <div class="project-content">
                <div class="project-category">${project.category}</div>
                <h3>${project.title}</h3>
                <p>${project.summary}</p>
                <div class="tech-stack">
                    ${project.techStack.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                </div>
                <a href="#project-${project.id}" class="btn" data-project-id="${project.id}">View Case Study</a>
            </div>
        </div>
    `;
}

// Show case study page
function showCaseStudy(projectId) {
    const project = window.projectsData.find(p => p.id === projectId);
    
    if (!project) {
        console.error('Project not found:', projectId);
        showPage('projects');
        return;
    }
    
    // Hide all regular pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Create and show case study
    const container = document.getElementById('case-study-container');
    container.innerHTML = createCaseStudyHTML(project);
    container.classList.add('page', 'active');
    window.scrollTo(0, 0);
    
    // Add back button handler
    const backButton = container.querySelector('.back-button');
    if (backButton) {
        backButton.addEventListener('click', function(e) {
            e.preventDefault();
            container.classList.remove('active');
            container.innerHTML = '';
            showPage('projects');
            window.location.hash = 'projects';
        });
    }
}

// Create case study HTML
function createCaseStudyHTML(project) {
    const cs = project.caseStudy;
    
    return `
        <div class="case-study-header">
            <div class="container">
                <a href="#projects" class="btn-secondary btn back-button">← Back to Projects</a>
                <div class="project-category" style="margin-top: 24px;">${project.category}</div>
                <h1>${project.title}</h1>
                <div class="case-study-meta">
                    <div class="tech-stack">
                        ${project.techStack.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                    </div>
                </div>
            </div>
        </div>

        <section class="container">
            <div class="case-study-section">
                <h3>Problem Statement</h3>
                <p>${cs.problem}</p>
            </div>

            <div class="case-study-section">
                <h3>Why It Matters</h3>
                <p>${cs.whyMatters}</p>
            </div>

            <div class="case-study-section">
                <h3>Solution Overview</h3>
                <p>${cs.solution}</p>
            </div>

            <div class="case-study-section">
                <h3>System Architecture</h3>
                <div class="architecture-diagram">
                    ${cs.architecture.map((item, i) => `
                        <div class="diagram-box">${item}</div>
                        ${i < cs.architecture.length - 1 ? '<div class="arrow">↓</div>' : ''}
                    `).join('')}
                </div>
            </div>

            <div class="case-study-section">
                <h3>Technical Breakdown</h3>
                ${cs.technical.backend ? `<p><strong>Backend:</strong> ${cs.technical.backend}</p>` : ''}
                ${cs.technical.ml ? `<p><strong>ML Component:</strong> ${cs.technical.ml}</p>` : ''}
                ${cs.technical.database ? `<p><strong>Database:</strong> ${cs.technical.database}</p>` : ''}
                ${cs.technical.security ? `<p><strong>Security:</strong> ${cs.technical.security}</p>` : ''}
            </div>

            <div class="case-study-section">
                <h3>Engineering Decisions</h3>
                <div class="decision-list">
                    <ul>
                        ${cs.decisions.map(d => `
                            <li><strong>${d.title}:</strong> ${d.reason}</li>
                        `).join('')}
                    </ul>
                </div>
            </div>

            <div class="case-study-section">
                <h3>Limitations</h3>
                <p>${cs.limitations}</p>
            </div>

            <div class="case-study-section">
                <h3>Future Improvements</h3>
                <div class="decision-list">
                    <ul>
                        ${cs.improvements.map(imp => `<li>${imp}</li>`).join('')}
                    </ul>
                </div>
            </div>

            <div class="case-study-section">
                <h3>Demo & Repository</h3>
                <p>Video demo and source code available below:</p>
                <a href="${project.demo}" class="btn" style="margin-right: 16px;">View Demo Video</a>
                <a href="${project.github}" class="btn btn-secondary">GitHub Repository</a>
            </div>
        </section>
    `;
}

// Setup contact form
function setupContactForm() {
    const form = document.getElementById('contact-form');
    const messageDiv = document.getElementById('form-message');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Check honeypot
            const honeypot = form.querySelector('input[name="honeypot"]');
            if (honeypot && honeypot.value !== '') {
                return; // Bot detected
            }
            
            // Get form data
            const formData = new FormData(form);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message')
            };
            
            // Simple validation
            if (!data.name || !data.email || !data.message) {
                showFormMessage('Please fill in all required fields.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                showFormMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // In a real application, you would send this to a backend
            // For now, we'll just show a success message
            console.log('Form data:', data);
            
            showFormMessage('Thank you for your message! I will get back to you soon.', 'success');
            form.reset();
            
            // In production, you would do:
            // fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(data)
            // })
            // .then(response => response.json())
            // .then(result => {
            //     showFormMessage('Message sent successfully!', 'success');
            //     form.reset();
            // })
            // .catch(error => {
            //     showFormMessage('Error sending message. Please try again.', 'error');
            // });
        });
    }
}

// Show form message
function showFormMessage(message, type) {
    const messageDiv = document.getElementById('form-message');
    if (messageDiv) {
        messageDiv.textContent = message;
        messageDiv.className = type;
        messageDiv.style.display = 'block';
        
        // Hide after 5 seconds
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
    }
}