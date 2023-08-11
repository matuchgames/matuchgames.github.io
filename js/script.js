let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
    navbar.classList.toggle("active");
    if (navbar.classList.contains("active")) {
        menu.classList.remove("bx-menu");
        menu.classList.add("bx-x");
    } else {
        menu.classList.remove("bx-x");
        menu.classList.add("bx-menu");
    }
});

window.onscroll = () => {
    navbar.classList.remove("active");
};
