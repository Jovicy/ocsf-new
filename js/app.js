/* ========================
   MOBILE NAV TOGGLE
======================== */
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ========================
   STICKY NAV SHADOW
======================== */
const nav = document.querySelector('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  });
}

/* ========================
   ACTIVE NAV LINK
======================== */
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href && (href === currentPath || (currentPath === '' && href === 'index.html'))) {
    link.classList.add('active');
  }
});

/* ========================
   FOOTER YEAR
======================== */
const yearEl = document.getElementById('currentYear');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ========================
   SCROLL ANIMATIONS
======================== */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

/* ========================
   TABS
======================== */
function openTab(id) {
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  const pane = document.getElementById(id);
  if (pane) pane.classList.add('active');
  const btn = document.querySelector(`[data-tab="${id}"]`);
  if (btn) btn.classList.add('active');
}

/* ========================
   NEWSLETTER FORM
======================== */
const newsletter = document.querySelector('.newsletter-form');
if (newsletter) {
  newsletter.addEventListener('submit', e => {
    e.preventDefault();
    const input = newsletter.querySelector('input');
    if (input && input.value) {
      input.value = '';
      const btn = newsletter.querySelector('button');
      const orig = btn.textContent;
      btn.textContent = 'Subscribed!';
      btn.style.background = '#2e8b5a';
      setTimeout(() => { btn.textContent = orig; btn.style.background = ''; }, 3000);
    }
  });
}