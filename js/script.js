// Mobile menu toggle

// Optional: Contact form handler
document.querySelector(".contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Your message has been sent!");
});


// Hamburger stuffs when screen size shrinked down to mobile's screen size - 04/29/2026
function initHamburger() {
  const menuBtn = document.getElementById("menuID-btn");
  const navLinks = document.querySelector(".nav-links");

  if (!menuBtn || !navLinks) return;

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open"); /* open nav bar content for selection */
    menuBtn.classList.toggle("open"); // <-- add this line to open a X icon
  });
}
/* Not utilized the following - 05/03/2026
/*
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.style.display =
    navLinks.style.display === "flex" ? "none" : "flex";
});
*/