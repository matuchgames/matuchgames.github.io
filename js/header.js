document.addEventListener("DOMContentLoaded", function () {
    const headerHTML = `
        <header>
            <a href="/./" class="logo"><img src="/img/logo/mg_240x40.png"></a>
            <div class="bx bx-menu" id="menu-icon"></div>

            <ul class="navbar">
                <li><a href="/games" data-after="Games">Games</a></li>
                <li><a href="/news" data-after="News">News</a></li>
                <li><a href="/support" data-after="Support">Support</a></li>
                <li><a href="/support" data-after="Support">Test</a></li>
            </ul>
        </header>
    `;

    const headerContainer = document.getElementById('header');
    if (headerContainer) {
        headerContainer.innerHTML = headerHTML;

        // Dodaj event listener do menu po załadowaniu nagłówka
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

        // Ukryj menu przy przewijaniu
        window.onscroll = () => {
            navbar.classList.remove("active");
        };
    }
});
