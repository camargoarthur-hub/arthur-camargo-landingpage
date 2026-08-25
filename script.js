/**
 * script.js — Interatividade & Micro-animações Premium
 * Arthur Camargo | Terapeuta Integrativo (CRTH-BR 17948) & Estrategista Somático
 */

document.addEventListener('DOMContentLoaded', () => {
  // Sinaliza que o JavaScript está ativo para as regras de estilo do CSS
  document.body.classList.add('js-active');

  /* =========================================
     1. NAVBAR DYNAMICS, SCROLL BLUR & PROGRESS BAR
     ========================================= */
  const navbar = document.getElementById('navbar');
  const progressBar = document.getElementById('scrollProgress');
  let ticked = false;

  window.addEventListener('scroll', () => {
    if (!ticked) {
      window.requestAnimationFrame(() => {
        // Efeito da Barra de Navegação Rolar
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }

        // Atualização da Barra de Progresso de Rolagem
        if (progressBar) {
          const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
          const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrolledPercent = height > 0 ? (winScroll / height) * 100 : 0;
          progressBar.style.width = scrolledPercent + '%';
        }

        ticked = false;
      });
      ticked = true;
    }
  });

  /* =========================================
     2. FAQ ACCORDION INTERACTIVE
     ========================================= */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Fecha todos os outros antes de abrir o atual para manter elegância limpa
      faqItems.forEach((otherItem) => {
        otherItem.classList.remove('active');
      });

      if (!isActive) {
        item.classList.add('active');
      }
    });
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
     4. BUTTON RIPPLE & CLICK MICRO-INTERACTION
     ========================================= */
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      let x = e.clientX - e.target.getBoundingClientRect().left;
      let y = e.clientY - e.target.getBoundingClientRect().top;

      let ripples = document.createElement('span');
      ripples.style.left = x + 'px';
      ripples.style.top = y + 'px';
      ripples.style.position = 'absolute';
      ripples.style.background = 'rgba(255, 255, 255, 0.4)';
      ripples.style.width = '100px';
      ripples.style.height = '100px';
      ripples.style.borderRadius = '50%';
      ripples.style.transform = 'translate(-50%, -50%) scale(0)';
      ripples.style.animation = 'ripple-effect 0.6s linear';
      ripples.style.pointerEvents = 'none';

      this.appendChild(ripples);

      setTimeout(() => {
        ripples.remove();
      }, 600);
    });
  });

  // Estilo dinâmico para a animação do ripple
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes ripple-effect {
      0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
      100% { transform: translate(-50%, -50%) scale(3.5); opacity: 0; }
    }
  `;
  document.head.appendChild(style);

  /* =========================================
     5. MOBILE MENU TOGGLE
     ========================================= */
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navLinks.style.display === 'flex';
      if (isVisible) {
        navLinks.style.display = 'none';
        mobileToggle.innerHTML = '<i class="ph-bold ph-list"></i>';
      } else {
        navLinks.style.display = 'flex';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.flexDirection = 'column';
        navLinks.style.background = 'rgba(9, 32, 34, 0.98)';
        navLinks.style.padding = '2rem';
        navLinks.style.borderBottom = '1px solid var(--glass-dark-border)';
        mobileToggle.innerHTML = '<i class="ph-bold ph-x"></i>';
      }
    });

    // Fechar ao clicar num link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navLinks.style.display = 'none';
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
