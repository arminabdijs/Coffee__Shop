const html = document.documentElement;
const themeToggles = document.querySelectorAll(".theme-toggle");
const submenu = document.querySelector(".submenu");
const submenuOpenBtn = document.querySelector(".submenu-open-btn");
const submenuItems = document.querySelectorAll(".submenu a");
const nav = document.querySelector(".nav");
const cart = document.querySelector(".cart");
const overlay = document.querySelector(".overlay");
const navOpenBtn = document.querySelector(".nav-open-icon");
const navCloseBtn = document.querySelector(".nav-close-icon");
const cartOpenBtn = document.querySelector(".cart-open-btn");
const cartCloseBtn = document.querySelector(".cart-close-icon");

/* -------------------------------------
              Functions
------------------------------------- */

function toggleTheme() {
  html.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    html.classList.contains("dark") ? "dark" : "light"
  );
}

function toggleSubmenu() {
  submenu.classList.toggle("submenu--open");
  submenuOpenBtn.classList.toggle("rotate-180");
  submenuOpenBtn.parentElement.classList.toggle("text-orange-300");
}

function setActiveSubmenuItem(e) {
  e.preventDefault();
  submenuItems.forEach((item) =>
    item.classList.remove("submenu__item--active")
  );
  e.currentTarget.classList.add("submenu__item--active");
}

function openPanel(panel, side) {
  if (side === "right") {
    panel.classList.remove("-right-64");
    panel.classList.add("right-0");
  } else {
    panel.classList.remove("-left-64");
    panel.classList.add("left-0");
  }
  overlay.classList.add("overlay--visible");
}

function closePanel(panel, side) {
  if (side === "right") {
    panel.classList.remove("right-0");
    panel.classList.add("-right-64");
  } else {
    panel.classList.remove("left-0");
    panel.classList.add("-left-64");
  }
  const navIsOpen = nav.classList.contains("right-0");
  const cartIsOpen = cart.classList.contains("left-0");
  if (!navIsOpen && !cartIsOpen) {
    overlay.classList.remove("overlay--visible");
  }
}

function closeAllPanels() {
  closePanel(nav, "right");
  closePanel(cart, "left");
}

/* -------------------------------------
            Event Listeners
------------------------------------- */

themeToggles.forEach((button) =>
  button.addEventListener("click", toggleTheme)
);

submenuOpenBtn.addEventListener("click", toggleSubmenu);

submenuItems.forEach((item) =>
  item.addEventListener("click", setActiveSubmenuItem)
);

navOpenBtn.addEventListener("click", () =>
  openPanel(nav, "right")
);

navCloseBtn.addEventListener("click", () =>
  closePanel(nav, "right")
);

cartOpenBtn.addEventListener("click", () =>
  openPanel(cart, "left")
);

cartCloseBtn.addEventListener("click", () =>
  closePanel(cart, "left")
);

overlay.addEventListener("click", closeAllPanels);