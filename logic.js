const hamburger = document.getElementById('hamburger');
const siteNav = document.querySelector('.site-nav');

hamburger.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('is-open');
  hamburger.setAttribute('aria-expanded', isOpen);
});