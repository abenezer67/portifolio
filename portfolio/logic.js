// I used this inorder to control what happens when the hamburger sign is clicked.
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const siteNav = document.querySelector(".site-nav");

  if (hamburger && siteNav) {
    hamburger.addEventListener("click", () => {
      const isOpen = siteNav.classList.toggle("is-open");
      hamburger.setAttribute("aria-expanded", isOpen);
    });

    const navLinks = siteNav.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        siteNav.classList.remove("is-open");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });
  }
});

//I used this inorder to control light and dark mode

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector(".theme-icon");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light-mode");
  themeIcon.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  const isLight = document.body.classList.contains("light-mode");
  themeIcon.textContent = isLight ? "☀️" : "🌙";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});
