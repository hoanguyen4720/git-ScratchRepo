/*
  heroJS.js polished version of AI

  ⭐ What this package gives you
  ✔ A standalone hero section

  Perfect for testing, prototyping, or dropping into a larger site.
  ✔ Clean separation of concerns

      HTML = structure

      CSS = design

      JS = behavior

  ✔ Easy to integrate

  You can plug this into any project (React, static site, WordPress, etc.).
  ✔ Fully customizable

  Swap the background image, text, colors, or animation.

  Created on 04/23/2026

*/

document.addEventListener("DOMContentLoaded", () => {
  const heroContent = document.querySelector(".hero-content");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          heroContent.style.opacity = "1";
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(heroContent);
});
