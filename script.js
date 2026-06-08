const PACKAGE_BASE = 500;
const PACKAGE_PRICES = {
  S: 0,
  M: 150,
  L: 300
};

function handlePricing() {
  document.querySelectorAll('.project-card').forEach(card => {
    const select = card.querySelector('.package-select');
    const priceElem = card.querySelector('.project-price');

    const updatePrice = () => {
      const tier = select.value;
      const total = PACKAGE_BASE + PACKAGE_PRICES[tier];
      priceElem.textContent = `Starting at ₹${total}`;
    };

    select.addEventListener('change', updatePrice);
    updatePrice();
  });
}

function handleNavigation() {
  const nav = document.querySelector('.site-nav');
  const toggle = document.querySelector('.menu-toggle');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  document.querySelectorAll('.site-nav a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });

  const sections = document.querySelectorAll('main section, header');
  const links = Array.from(document.querySelectorAll('.site-nav a'));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id || 'home';
      links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${id}`));
    });
  }, {
    rootMargin: '-35% 0px -55% 0px',
    threshold: 0
  });

  sections.forEach(section => observer.observe(section));
}

function init() {
  handlePricing();
  handleNavigation();
}

window.addEventListener('DOMContentLoaded', init);