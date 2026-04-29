// Gonsior Gebäudereinigung — small enhancements
// (no framework, no build step — just sprinkle.)

(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Sticky-header border once user scrolls past the top
  const header = document.querySelector('[data-header]');
  if (header) {
    const onScroll = () => {
      header.dataset.scrolled = window.scrollY > 12 ? 'true' : 'false';
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // 2. Auto-update the copyright year
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  // 3. Subtle reveal on scroll for sections
  if ('IntersectionObserver' in window && !reduced) {
    const targets = document.querySelectorAll(
      '.service, .step, .badges li, .kontakt-card, .hero-meta li, .districts li, .insta-tile'
    );
    targets.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(14px)';
      el.style.transition = 'opacity .7s cubic-bezier(.22,.61,.36,1), transform .7s cubic-bezier(.22,.61,.36,1)';
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => {
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0)';
          }, Math.min(i * 40, 240));
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    targets.forEach(el => io.observe(el));
  }

  // 4. Active section highlighting in primary nav
  const nav = document.querySelector('.primary-nav');
  if (nav && 'IntersectionObserver' in window) {
    const links = Array.from(nav.querySelectorAll('a'));
    const map = new Map();
    links.forEach(a => {
      const id = a.getAttribute('href')?.slice(1);
      const sec = id && document.getElementById(id);
      if (sec) map.set(sec, a);
    });
    const setActive = (link) => {
      links.forEach(a => a.removeAttribute('aria-current'));
      if (link) link.setAttribute('aria-current', 'true');
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(map.get(e.target));
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    map.forEach((_, sec) => io.observe(sec));
  }

  // 5. Mobile nav drawer
  const toggle = document.querySelector('[data-nav-toggle]');
  const dialog = document.getElementById('mobile-nav');
  const closeBtn = document.querySelector('[data-nav-close]');

  if (toggle && dialog) {
    const open = () => {
      if (typeof dialog.showModal === 'function') {
        try { dialog.showModal(); } catch { dialog.setAttribute('open', ''); }
      } else {
        dialog.setAttribute('open', '');
      }
      toggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('nav-open');
    };
    const close = () => {
      if (typeof dialog.close === 'function' && dialog.open) {
        try { dialog.close(); } catch { dialog.removeAttribute('open'); }
      } else {
        dialog.removeAttribute('open');
      }
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
    };

    toggle.addEventListener('click', () => dialog.open ? close() : open());
    closeBtn?.addEventListener('click', close);

    // Close when a nav link is clicked (so smooth-scroll works on the main page)
    dialog.querySelectorAll('[data-nav-link]').forEach(link => {
      link.addEventListener('click', () => {
        setTimeout(close, 60);
      });
    });

    // Close on backdrop click (clicking the dialog element itself, not children)
    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) close();
    });

    // Close if viewport grows past mobile breakpoint
    const mq = window.matchMedia('(min-width: 721px)');
    const onMQ = (e) => { if (e.matches) close(); };
    mq.addEventListener ? mq.addEventListener('change', onMQ) : mq.addListener(onMQ);
  }
})();
