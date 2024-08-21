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
console.log(nav);

nav.addEventListener("mouseover", function (e) {
  if (!e.target.closest(".nav-links"))return;

  Array.from(nav.children[0].children).forEach(function (item) {
    item.style.opacity = "1";
    if (item != e.target.closest('.nav-links')) {
      item.style.opacity = "0.5";
    }
  });
});

nav.addEventListener("mouseout", function (e) {
  if (!e.target.closest('.nav-links')) {
    return;
  }
  Array.from(nav.children[0].children).forEach(function (item) {
    item.style.opacity = "1";
  });
});



// REVELING ELEMENTS ON SCROLL

const projects = document.querySelectorAll('.projects');
projects.forEach(function(item){
    // item.style.opacity = '0';
    // item.style.transform = 'translateY(100px)'
})

const callbackFunction = function(entries, observer){
    const [entry] = entries;
    // if(entry.is)
    if(entry.isIntersecting){
        console.log(entry.target);
    };
}

const observer = new IntersectionObserver(callbackFunction, {
    root:null,
    threshold:0.15,
})

projects.forEach(function(item){
    observer.observe(item);
})


