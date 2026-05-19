// Buzz Captions — minimal site JS

// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
      mobileNav.classList.remove('open');
    }
  });
}

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// Language filter + search
const filterBtns = document.querySelectorAll('.lang-filter-btn');
const langCards = document.querySelectorAll('.lang-card');
const langSearch = document.getElementById('langSearch');
let activeFilter = 'all';

function applyFilter() {
  const q = langSearch ? langSearch.value.toLowerCase() : '';
  langCards.forEach(card => {
    const matchFilter = activeFilter === 'all' || card.dataset.provider === activeFilter;
    const matchSearch = !q || card.dataset.name.toLowerCase().includes(q);
    card.classList.toggle('hidden', !(matchFilter && matchSearch));
  });
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    applyFilter();
  });
});

if (langSearch) {
  langSearch.addEventListener('input', applyFilter);
}

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
if (reveals.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));
}
