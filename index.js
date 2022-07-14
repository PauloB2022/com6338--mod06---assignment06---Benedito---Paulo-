const hamburgerButton = document.querySelector("button.hamburger-btn");
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerButton.addEventListener("click", (e) => {
  e.stopPropagation();
  hamburgerMenu.classList.toggle("show-menu");
  if (hamburgerMenu.classList.contains("show-menu")) {
    hamburgerButton.setAttribute("aria-expanded", "true");
  } else {
    hamburgerButton.setAttribute("aria-expanded", "false");
  }
})

hamburgerMenu.addEventListener("click", (e) => {
  e.stopPropagation();
})

document.addEventListener("click", () => {
  hamburgerMenu.classList.remove("show-menu");
  hamburgerButton.setAttribute("aria-expanded", "false");
})

document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    hamburgerMenu.classList.remove("show-menu");
    hamburgerButton.setAttribute("aria-expanded", "false");
    hamburgerButton.focus();
  }
})