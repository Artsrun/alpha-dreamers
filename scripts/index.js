const burger = document.querySelector(".dg_burger");
const header = document.querySelector(".dg_header");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  header.classList.toggle("nav_opened");
});
