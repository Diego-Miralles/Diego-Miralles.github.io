document.documentElement.classList.add('js');

const menuButton = document.querySelector('[data-menu-button]');
const mobileNav = document.querySelector('[data-mobile-nav]');

const closeMenu = () => {
  if (!menuButton || !mobileNav) return;
  menuButton.setAttribute('aria-expanded', 'false');
  mobileNav.hidden = true;
  document.body.classList.remove('menu-open');
};

if (menuButton && mobileNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    mobileNav.hidden = isOpen;
    document.body.classList.toggle('menu-open', !isOpen);
  });

  mobileNav.querySelectorAll('[data-menu-link]').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuButton.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1080) closeMenu();
  });
}

document.querySelectorAll('[data-gallery]').forEach((gallery) => {
  const track = gallery.querySelector('[data-gallery-track]');
  const slides = Array.from(track?.children || []);
  const previous = gallery.querySelector('[data-gallery-prev]');
  const next = gallery.querySelector('[data-gallery-next]');
  const dots = gallery.querySelector('[data-gallery-dots]');
  if (!track || slides.length < 2 || !previous || !next || !dots) return;

  let active = 0;
  let touchStart = null;
  const isSpanish = document.documentElement.lang.toLowerCase().startsWith('es');

  const dotButtons = slides.map((_, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.setAttribute('aria-label', isSpanish
      ? `Vista ${index + 1} de ${slides.length}`
      : `View ${index + 1} of ${slides.length}`);
    dot.addEventListener('click', () => show(index));
    dots.appendChild(dot);
    return dot;
  });

  const show = (index) => {
    active = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${active * 100}%)`;
    slides.forEach((slide, slideIndex) => {
      const inactive = slideIndex !== active;
      slide.setAttribute('aria-hidden', String(inactive));
      slide.inert = inactive;
    });
    dotButtons.forEach((dot, dotIndex) => {
      if (dotIndex === active) dot.setAttribute('aria-current', 'true');
      else dot.removeAttribute('aria-current');
    });
  };

  previous.addEventListener('click', () => show(active - 1));
  next.addEventListener('click', () => show(active + 1));
  gallery.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') show(active - 1);
    if (event.key === 'ArrowRight') show(active + 1);
  });
  gallery.addEventListener('touchstart', (event) => {
    touchStart = event.changedTouches[0]?.clientX ?? null;
  }, { passive: true });
  gallery.addEventListener('touchend', (event) => {
    if (touchStart === null) return;
    const distance = (event.changedTouches[0]?.clientX ?? touchStart) - touchStart;
    if (Math.abs(distance) > 45) show(active + (distance < 0 ? 1 : -1));
    touchStart = null;
  }, { passive: true });
  show(0);
});
