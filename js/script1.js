const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");

hamburger.addEventListener("click", () => {
  navList.style.display =
    navList.style.display === "flex" ? "none" : "flex";
});