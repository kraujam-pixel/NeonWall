const langBtn = document.getElementById("langBtn");
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

let currentLang = "lv";

langBtn.addEventListener("click", () => {
  const elements = document.querySelectorAll("[data-lv]");

  if (currentLang === "lv") {
    elements.forEach(el => {
      el.textContent = el.getAttribute("data-en");
    });
    currentLang = "en";
    langBtn.textContent = "LV";
    document.documentElement.lang = "en";
  } else {
    elements.forEach(el => {
      el.textContent = el.getAttribute("data-lv");
    });
    currentLang = "lv";
    langBtn.textContent = "EN";
    document.documentElement.lang = "lv";
  }
});

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});