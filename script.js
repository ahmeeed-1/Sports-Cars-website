const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const themeToggle = document.querySelector('.theme-toggle');
const carForm = document.querySelector('#car-form');
const result = document.querySelector('#result');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  themeToggle.textContent = document.body.classList.contains('light') ? '☾' : '☼';
  themeToggle.setAttribute('aria-label', document.body.classList.contains('light') ? 'Toggle dark mode' : 'Toggle light mode');
});

carForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const budget = Number(document.querySelector('#budget').value);
  if (!Number.isFinite(budget) || budget < 0) {
    result.textContent = 'Please enter a valid positive budget.';
    return;
  }
  if (budget < 120000) result.textContent = 'Start with a Porsche 718 Cayman — focused, fast, and within reach.';
  else if (budget < 250000) result.textContent = 'Your match: Porsche 911 GT3 RS — precision with a racing heartbeat.';
  else if (budget < 400000) result.textContent = 'Your match: Ferrari 296 GTB — hybrid power with unmistakable Italian drama.';
  else result.textContent = 'Your match: a McLaren 750S — lightweight, wild, and built for the perfect road.';
});
