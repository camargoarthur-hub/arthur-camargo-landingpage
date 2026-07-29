/**
 * script.js — Interatividade & Micro-animações Premium
 * Arthur Camargo | Terapeuta Integrativo (CRTH-BR 17948) & Estrategista Somático
 */

document.addEventListener('DOMContentLoaded', () => {
  /* =========================================
     1. NAVBAR DYNAMICS & SCROLL BLUR
     ========================================= */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
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
    '.pillar-card, .book-card, .step-item, .meridian-point, .banner-card, .about-card-profile, .stat-box'
  );

  const revealOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Adiciona um pequeno atraso escalonado com base na posição
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0) scale(1)';
        }, (index % 4) * 100);

        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);

  revealElements.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px) scale(0.98)';
    el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
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
});
