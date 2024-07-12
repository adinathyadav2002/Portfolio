function openInstagram( ){
    window.open("https://www.instagram.com/adinath.yadav.2002/", "_blank")
}

function openLinkedin( ){
    window.open("https://www.linkedin.com/in/adinath-yadav-50a294251/", "_blank")
}

function openGithub( ){
    window.open("https://github.com/adinathyadav2002", "_blank")
}

let open = false;

const open_menu_window = () =>{
    const nav_floation_window = document.getElementsByClassName("nav-ul")[0];
    if(open===false) nav_floation_window.classList.add("nav-ul-open");
    else nav_floation_window.classList.remove("nav-ul-open");
    open = (!open);
}