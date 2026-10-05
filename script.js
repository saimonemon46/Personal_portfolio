/**
 * SAIMON.SYSTEMS - Interactive Architectural Engine & UI Logic
 * Handles Concurrency Simulators, Telemetry, Radar Filters, Theme Toggling & Live Dhaka Time
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initDhakaClock();
  initScrollReveals();
  initHeroParticles();
  initHeroTrafficSimulator();
  initImageGalleries();
  initLightbox();
  initPatternFilters();
  initResumeModal();
  initScrollSpy();
});

/* ==========================================================================
   1. THEME TOGGLE (Editorial Paper <-> Night Shift Terminal)
   ========================================================================== */
function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const themeLabel = document.getElementById('themeLabel');
  
  const savedTheme = localStorage.getItem('saimon-systems-theme') || 'paper';
  setTheme(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') === 'night' ? 'paper' : 'night';
      setTheme(currentTheme);
    });
  }

  function setTheme(theme) {
    if (theme === 'night') {
      document.documentElement.setAttribute('data-theme', 'night');
      if (themeIcon) themeIcon.textContent = '☀️';
      if (toggleBtn) {
        toggleBtn.setAttribute('title', 'Switch to Day Mode');
        toggleBtn.setAttribute('aria-label', 'Switch to Day Mode');
      }
      if (themeLabel) themeLabel.textContent = 'Day Mode';
      localStorage.setItem('saimon-systems-theme', 'night');
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (themeIcon) themeIcon.textContent = '🌙';
      if (toggleBtn) {
        toggleBtn.setAttribute('title', 'Switch to Night Mode');
        toggleBtn.setAttribute('aria-label', 'Switch to Night Mode');
      }
      if (themeLabel) themeLabel.textContent = 'Night Shift';
      localStorage.setItem('saimon-systems-theme', 'paper');
    }
  }
}

/* ==========================================================================
   2. LIVE DHAKA CLOCK & TIMEZONE CONTEXT
   ========================================================================== */
function initDhakaClock() {
  const clockElement = document.getElementById('liveDhakaClock');
  if (!clockElement) return;

  function updateTime() {
    const options = {
      timeZone: 'Asia/Dhaka',
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    const now = new Date();
    clockElement.textContent = now.toLocaleTimeString('en-US', options) + ' BST';
  }

  updateTime();
  setInterval(updateTime, 1000);
}

/* ==========================================================================
   3. SCROLL REVEAL OBSERVER
   ========================================================================== */
function initScrollReveals() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach((el) => observer.observe(el));
}

/* ==========================================================================
   4. GLOBAL NETWORK PARTICLE BACKGROUND CANVAS (ALL OVER THE SITE)
   ========================================================================== */
function initHeroParticles() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const count = Math.min(Math.max(Math.floor((width * height) / 26000), 24), 45);
  const particles = [];
  let mouse = { x: -1000, y: -1000 };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.42,
      vy: (Math.random() - 0.5) * 0.42,
      radius: Math.random() * 1.8 + 0.9,
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);
    const isNight = document.documentElement.getAttribute('data-theme') === 'night';

    // Restored previous subtle, gentle opacity values (not eye-catchy / calm)
    const nodeColor = isNight ? 'rgba(96, 165, 250, 0.45)' : 'rgba(22, 62, 145, 0.35)';
    const linkColor = isNight ? 'rgba(96, 165, 250,' : 'rgba(22, 62, 145,';

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = nodeColor;
      ctx.fill();

      // Inter-particle links (subtle, delicate, non-distracting)
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `${linkColor} ${0.15 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }

      // Gentle mouse proximity interaction
      const mdx = p.x - mouse.x;
      const mdy = p.y - mouse.y;
      const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mdist < 140) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = `${linkColor} ${0.28 * (1 - mdist / 140)})`;
        ctx.lineWidth = 0.9;
        ctx.stroke();
      }
    }

    requestAnimationFrame(render);
  }

  render();
}

/* ==========================================================================
   5. HERO BURST TRAFFIC SIMULATOR
   ========================================================================== */
function initHeroTrafficSimulator() {
  const triggerBtn = document.getElementById('triggerBurstTraffic');
  const qpsVal = document.getElementById('telemetryQps');
  const p95Val = document.getElementById('telemetryP95');
  const cacheVal = document.getElementById('telemetryCache');
  const dropVal = document.getElementById('telemetryDrops');
  const statusLog = document.getElementById('heroSimStatus');
  const pulseLines = document.querySelectorAll('.hero-flow-path');

  if (!triggerBtn) return;

  let isBursting = false;

  triggerBtn.addEventListener('click', () => {
    if (isBursting) return;
    isBursting = true;

    triggerBtn.disabled = true;
    triggerBtn.textContent = 'Simulating 1,200 QPS Load...';
    triggerBtn.style.opacity = '0.7';

    pulseLines.forEach((line) => {
      line.style.animation = 'pulseDash 0.8s linear infinite';
      line.setAttribute('stroke', '#10b981');
    });

    if (statusLog) statusLog.textContent = 'Burst traffic initiated via Locust engine (1,200 workers active)...';

    // Step 1: Spike QPS
    animateValue(qpsVal, 140, 1248, 1200, ' qps');
    animateValue(p95Val, 48, 18, 1200, ' ms');
    animateValue(cacheVal, 82.4, 98.6, 1200, '%', 1);

    setTimeout(() => {
      if (statusLog) statusLog.textContent = 'Redis Cache-Aside hit ratio at 98.6%. Postgres replica load steady.';
    }, 1500);

    setTimeout(() => {
      if (statusLog) statusLog.textContent = 'P95 latency stabilized at 18ms. 0 dropped packets. ACID intact.';
    }, 2800);

    setTimeout(() => {
      pulseLines.forEach((line) => {
        line.style.animation = 'pulseDash 3s linear infinite';
        line.setAttribute('stroke', 'var(--accent-blue)');
      });
      triggerBtn.disabled = false;
      triggerBtn.textContent = 'Simulate Burst Traffic (1.2k QPS)';
      triggerBtn.style.opacity = '1';
      isBursting = false;
    }, 4500);
  });

  function animateValue(elem, start, end, duration, suffix = '', decimals = 0) {
    if (!elem) return;
    const startTime = performance.now();

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = start + (end - start) * progress;
      elem.textContent = current.toFixed(decimals) + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }
}

/* ==========================================================================
   6. INTERACTIVE SCREENSHOT GALLERIES & LIGHTBOX MODAL
   ========================================================================== */
function initImageGalleries() {
  const galleries = document.querySelectorAll('[data-gallery]');
  galleries.forEach((gallery) => {
    const heroImg = gallery.querySelector('[data-hero-image]');
    const thumbs = gallery.querySelectorAll('[data-thumb]');
    const stage = gallery.querySelector('.image-stage');

    thumbs.forEach((thumb) => {
      thumb.addEventListener('click', () => {
        const targetSrc = thumb.getAttribute('data-thumb');
        if (!targetSrc || !heroImg) return;
        heroImg.src = targetSrc;
        if (stage) stage.scrollTop = 0;
        thumbs.forEach((t) => t.setAttribute('aria-pressed', 'false'));
        thumb.setAttribute('aria-pressed', 'true');
      });
    });
  });
}

function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxClose = document.getElementById('lightboxClose');

  if (!lightbox || !lightboxImage) return;

  const triggers = document.querySelectorAll('[data-lightbox-trigger]');
  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const img = trigger.querySelector('img');
      if (!img) return;
      lightboxImage.src = img.src;
      lightboxImage.alt = img.alt || 'Expanded system screenshot';
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImage.src = '';
    document.body.style.overflow = '';
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) {
      closeLightbox();
    }
  });
}

/* ==========================================================================
   7. PATTERN RADAR FILTERING
   ========================================================================== */
function initPatternFilters() {
  const filterBtns = document.querySelectorAll('.pattern-filter-btn');
  const cards = document.querySelectorAll('.pattern-item-card');

  if (!filterBtns.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      cards.forEach((card) => {
        if (filter === 'all' || card.dataset.category.includes(filter)) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* ==========================================================================
   8. ATS RESUME MODAL & PRINT/COPY LOGIC
   ========================================================================== */
function initResumeModal() {
  const openBtns = document.querySelectorAll('.open-resume-modal-btn');
  const modal = document.getElementById('resumeModal');
  const closeBtn = document.getElementById('closeResumeModal');
  const copyBtn = document.getElementById('copyResumeMarkdown');
  const printBtn = document.getElementById('printResumeBtn');

  if (!modal) return;

  openBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const rawText = document.getElementById('rawResumeMarkdown')?.textContent || '';
      navigator.clipboard.writeText(rawText).then(() => {
        const orig = copyBtn.textContent;
        copyBtn.textContent = 'Copied to Clipboard!';
        setTimeout(() => {
          copyBtn.textContent = orig;
        }, 2000);
      });
    });
  }
}

/* ==========================================================================
   10. NAVIGATION SCROLL SPY (ACTIVE STATE HIGHLIGHTING)
   ========================================================================== */
function initScrollSpy() {
  const navLinks = document.querySelectorAll('.nav-link');
  if (!navLinks.length) return;

  const sectionIds = ['story', 'experience', 'systems', 'algorithms', 'invariants', 'behind-terminal', 'contact'];
  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  function onScroll() {
    const scrollPos = window.scrollY + 180;
    let currentId = '';

    for (let i = 0; i < sections.length; i++) {
      const sec = sections[i];
      if (sec.offsetTop <= scrollPos) {
        currentId = sec.id;
      }
    }

    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href === `#${currentId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
