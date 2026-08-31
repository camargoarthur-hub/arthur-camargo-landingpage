/**
 * script.js — Interatividade & Micro-animações Premium (Reflow-Free)
 * Arthur Camargo | Terapeuta Integrativo (CRTH-BR 17948) & Estrategista Somático
 */

document.addEventListener('DOMContentLoaded', () => {
  // Sinaliza que o JavaScript está ativo para as regras de estilo do CSS
  document.body.classList.add('js-active');

  /* =========================================
     1. NAVBAR DYNAMICS, SCROLL BLUR & PROGRESS BAR (ZERO REFLOW)
     ========================================= */
  const navbar = document.getElementById('navbar');
  const progressBar = document.getElementById('scrollProgress');

  let cachedMaxScroll = 0;
  function updateScrollLimits() {
    cachedMaxScroll = (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight;
  }
  updateScrollLimits();
  window.addEventListener('resize', updateScrollLimits, { passive: true });

  let ticked = false;
  window.addEventListener('scroll', () => {
    if (!ticked) {
      window.requestAnimationFrame(() => {
        const currentY = window.scrollY || window.pageYOffset;
        if (currentY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }

        if (progressBar && cachedMaxScroll > 0) {
          const scrolledPercent = Math.min(100, Math.max(0, (currentY / cachedMaxScroll) * 100));
          progressBar.style.width = scrolledPercent + '%';
        }
        ticked = false;
      });
      ticked = true;
    }
  }, { passive: true });

  /* =========================================
     2. FAQ ACCORDION INTERACTIVE
     ========================================= */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach((otherItem) => otherItem.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    }
  });

  /* =========================================
     3. INTERSECTION OBSERVER — SCROLL REVEALS
     ========================================= */
  const revealElements = document.querySelectorAll(
    '.pillar-card, .book-card, .step-item, .meridian-point, .banner-card, .about-card-profile, .stat-box, .section-header, .solution-card, .protocol-showcase-banner, .insight-card'
  );

  const revealOptions = {
    threshold: 0.01,
    rootMargin: '0px 0px -10px 0px'
  };

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);

  revealElements.forEach((el) => {
    el.classList.add('reveal-on-scroll');
    revealOnScroll.observe(el);
  });

  /* =========================================
     4. BUTTON RIPPLE & CLICK MICRO-INTERACTION (NO FORCED REFLOW)
     ========================================= */
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      const x = e.offsetX !== undefined ? e.offsetX : e.clientX - this.offsetLeft;
      const y = e.offsetY !== undefined ? e.offsetY : e.clientY - this.offsetTop;

      const ripples = document.createElement('span');
      ripples.className = 'btn-ripple';
      ripples.style.left = x + 'px';
      ripples.style.top = y + 'px';
      this.appendChild(ripples);

      setTimeout(() => ripples.remove(), 600);
    });
  });

  /* =========================================
     5. MOBILE MENU TOGGLE
     ========================================= */
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('nav-open');
      mobileToggle.innerHTML = isOpen ? '<i class="ph-bold ph-x"></i>' : '<i class="ph-bold ph-list"></i>';
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navLinks.classList.remove('nav-open');
          mobileToggle.innerHTML = '<i class="ph-bold ph-list"></i>';
        }
      });
    });
  }

  /* =========================================
     6. LGPD COOKIE CONSENT & ADSENSE DYNAMIC LOADING
     ========================================= */
  const cookieBanner = document.getElementById('cookieBanner');
  const acceptCookiesBtn = document.getElementById('acceptCookies');
  const rejectCookiesBtn = document.getElementById('rejectCookies');

  function loadGoogleAdSense() {
    if (document.getElementById('adsenseScript')) return;
    const script = document.createElement('script');
    script.id = 'adsenseScript';
    script.async = true;
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7380806581382195';
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);
  }

  const consent = localStorage.getItem('cookieConsent');
  if (!consent) {
    if (cookieBanner) cookieBanner.style.display = 'block';
  } else if (consent === 'accepted') {
    loadGoogleAdSense();
  }

  if (acceptCookiesBtn) {
    acceptCookiesBtn.addEventListener('click', () => {
      localStorage.setItem('cookieConsent', 'accepted');
      if (cookieBanner) cookieBanner.style.display = 'none';
      loadGoogleAdSense();
    });
  }

  if (rejectCookiesBtn) {
    rejectCookiesBtn.addEventListener('click', () => {
      localStorage.setItem('cookieConsent', 'rejected');
      if (cookieBanner) cookieBanner.style.display = 'none';
    });
  }
});

/* =========================================
   GLOBAL SLIDE SWITCHER (PRESENTATION 1)
   ========================================= */
function switchSlide(slideNum, btn) {
  const img = document.getElementById('presentationSlideImg');
  if (img) {
    img.style.opacity = '0.3';
    setTimeout(() => {
      img.src = `assets/presentation_slide_${slideNum}.webp`;
      img.onerror = function() { this.src = `assets/presentation_slide_${slideNum}.jpg`; };
      img.style.opacity = '1';
    }, 120);
  }
  document.querySelectorAll('.slide-dot').forEach(dot => dot.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

/* =========================================
   GLOBAL SCHOOL FLYER SWITCHER (FRENTE / VERSO)
   ========================================= */
function switchSchoolFlyer(side, btn) {
  const img = document.getElementById('schoolFlyerImg');
  if (img) {
    img.style.opacity = '0.3';
    setTimeout(() => {
      img.src = `assets/flayer_escolas_${side}.webp`;
      img.onerror = function() { this.src = `assets/flayer_escolas_${side}.jpg`; };
      img.style.opacity = '1';
    }, 120);
  }
  document.querySelectorAll('.folder-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}
