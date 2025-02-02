const menuBtn = document.getElementById("menu-btn");
const navlinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) =>{
    navlinks.classList.toggle("open");

    const isOpen = navlinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navlinks.addEventListener("click", (e) =>{
    navlinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line")
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};


ScrollReveal().reveal(".about__container .section__header",{ 
    ...scrollRevealOption, 
});

ScrollReveal().reveal(".about__container .section__description",{
    ...scrollRevealOption,
    delay: 500,
    interval: 500,
})

ScrollReveal().reveal(".about__container img",{
    ...scrollRevealOption,
    delay: 750,
    
})

ScrollReveal().reveal(".nav__header .nav__logo img",{ 
    ...scrollRevealOption, origin: "top"
});

ScrollReveal().reveal(".nav__links .nav__logo img",{ 
    ...scrollRevealOption, origin: "top"
});

ScrollReveal().reveal(".header", {
    // ...scrollRevealOption,
    // origin: "top",
    beforeReveal: function (el) {
        el.classList.add("reveal-bg"); // Add the class when the section is revealed
    }
});