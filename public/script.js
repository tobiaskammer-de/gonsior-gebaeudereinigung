// Gonsior Gebäudereinigung — small enhancements
// (no framework, no build step — just sprinkle.)

(() => {
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
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const targets = document.querySelectorAll(
      '.service, .step, .badges li, .kontakt-card, .hero-meta li, .districts li'
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
})();
