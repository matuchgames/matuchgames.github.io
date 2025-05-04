document.addEventListener("DOMContentLoaded", function () {
    const headerHTML = `
        <header>
            <a href="/./" class="logo"><img src="/img/logo/mg_240x40.png"></a>
            <div class="bx bx-menu" id="menu-icon"></div>

            <ul class="navbar">
                <li><a href="/games" data-after="Games">Games</a></li>
                <li><a href="/news" data-after="News">News</a></li>
                <li><a href="/support" data-after="Support">Support</a></li>
            </ul>
        </header>
    `;

    // Znajdź miejsce, w którym chcesz umieścić nagłówek (np. div o id "header")
    const headerContainer = document.getElementById('header');
    if (headerContainer) {
        headerContainer.innerHTML = headerHTML;
    }
});
