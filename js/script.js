"use strict";

function openInstagram() {
  window.open("https://www.instagram.com/adinath.yadav.2002/", "_blank");
}

function openLinkedin() {
  window.open("https://www.linkedin.com/in/adinath-yadav-50a294251/", "_blank");
}

function openGithub() {
  window.open("https://github.com/adinathyadav2002", "_blank");
}

let open = false;

const open_menu_window = () => {
  const nav_floation_window = document.getElementsByClassName("nav-ul")[0];
  if (open === false) nav_floation_window.classList.add("nav-ul-open");
  else nav_floation_window.classList.remove("nav-ul-open");
  open = !open;
};

// nav blur effect
const nav = document.querySelector(".nav-container");

nav.addEventListener("mouseover", function (e) {
  if (!e.target.closest(".nav-links")) return;

  Array.from(nav.children[0].children).forEach(function (item) {
    item.style.opacity = "1";
    if (item != e.target.closest(".nav-links")) {
      item.style.opacity = "0.5";
    }
  });
});

nav.addEventListener("mouseout", function (e) {
  if (!e.target.closest(".nav-links")) {
    return;
  }
  Array.from(nav.children[0].children).forEach(function (item) {
    item.style.opacity = "1";
  });
});

// REVELING ELEMENTS ON SCROLL

const projects = document.querySelectorAll(".projects");

const callbackFunction = function (entries, observer) {
  const [entry] = entries;
  // if(entry.is)
  if (!entry.isIntersecting) {
    return;
  }
  entry.target.classList.remove("projects--hidden");

  observer.unobserve(entry.target);
};

const observer = new IntersectionObserver(callbackFunction, {
  root: null,
  threshold: 0.2,
});

projects.forEach(function (item) {
  observer.observe(item);
  item.classList.add("projects--hidden");
});

// scroll animation in projects

document
  .querySelector(".hero-section__cards")
  .addEventListener("click", function (e) {
    if (e.target.classList.contains("visit-code-link")) {
      e.preventDefault();
      const id = e.target.getAttribute("href");
      const scroll_to = document.querySelector(id);

      scroll_to.scrollIntoView({ behavior: "smooth" });
    }
  });

// USING INTERSECTION API for sticky nav

const hero_section = document.querySelector(".hero-section");
const header = document.querySelector("header");
const obsCallback = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting == false) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

const heightNav = nav.getBoundingClientRect().height;

const obsOption = {
  root: null,
  // second intersecting section will be viewport
  threshold: 0,
  // or 10 % it is an array
  rootMargin: `-200px`,
};

const observer2 = new IntersectionObserver(obsCallback, obsOption);
observer2.observe(hero_section);
