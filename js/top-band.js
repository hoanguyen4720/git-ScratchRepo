/*
  top-band.js optimized version of AI

  Created on 04/28/2026
  
*/

function updateClock() {
  const now = new Date();

  const dateString = now.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  const timeString = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });

  const clockElement = document.getElementById("live-clock");
  if (clockElement) {
    clockElement.textContent = `${dateString} — ${timeString}`;
  }
}

updateClock();
setInterval(updateClock, 1000);
