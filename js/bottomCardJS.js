/*
  bottomCardJS.js polished version of AI

  This will automatically rotate the images in the bottom grid AND update the top featured image.

  Created on 04/23/2026

*/

document.addEventListener("DOMContentLoaded", () => {
  const featured = document.querySelector(".programs-featured-img");
  const items = Array.from(document.querySelectorAll(".program-item img"));

  let index = 0;

  // Set initial featured image
  featured.src = items[0].src;

  setInterval(() => {
    // Fade out
    featured.classList.add("fade");

    setTimeout(() => {
      // Advance index
      index = (index + 1) % items.length;

      // Update featured image
      featured.src = items[index].src;

      // Fade in
      featured.classList.remove("fade");
    }, 500); // fade-out duration

  }, 5000);
});

/* All of the following ones have images rotating sequentially and each of image shown above accordingly */
/* 
document.addEventListener("DOMContentLoaded", () => {
  const featured = document.querySelector(".programs-featured-img");
  const container = document.querySelector(".programs-bottom");
  const items = Array.from(container.querySelectorAll(".program-item img"));

  let index = 0;

  // Set initial featured image
  featured.src = items[0].src;

  setInterval(() => {
    // Advance index
    index = (index + 1) % items.length;

    // Update featured image
    featured.src = items[index].src;

    // Rotate bottom images by moving the first element to the end
    const firstItem = container.firstElementChild;
    container.appendChild(firstItem);

  }, 3200);
});

featured.classList.add("fade");
setTimeout(() => {
  featured.src = items[index].src;
  featured.classList.remove("fade");
}, 100);
*/


/* document.addEventListener("DOMContentLoaded", () => {
  const featured = document.querySelector(".programs-featured-img");
  const items = Array.from(document.querySelectorAll(".program-item img"));

  let index = 0;

setInterval(() => {
  const first = items.shift();
  items.push(first);

  featured.src = items[0].src;

  const container = document.querySelector(".programs-bottom");
  container.innerHTML = "";
  items.forEach(img => {
    const wrapper = document.createElement("div");
    wrapper.className = "program-item";
    wrapper.appendChild(img.cloneNode(true));
    container.appendChild(wrapper);
  });

}, 3000); */


/* setInterval(() => {
  index = (index + 1) % items.length;

  featured.src = items[index].src;

  const container = document.querySelector(".programs-bottom");
  const first = container.firstElementChild;
  container.appendChild(first);

}, 3000); */

  /* setInterval(() => {
    index = (index + 1) % items.length;

    // Update top image
    featured.src = items[index].src;

    // Rotate bottom images visually
    const first = items.shift();
    items.push(first);

    // Re-render bottom images
    const container = document.querySelector(".programs-bottom");
    container.innerHTML = "";
    items.forEach(img => {
      const wrapper = document.createElement("div");
      wrapper.className = "program-item";
      wrapper.appendChild(img.cloneNode(true));
      container.appendChild(wrapper);
    });

  }, 3000); // every 3 seconds
  */
/* }); */
