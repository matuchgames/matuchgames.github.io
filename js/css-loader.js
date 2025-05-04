const version = "1.0.3"; // Zmieniasz tylko tutaj po aktualizacji CSS
const css = document.createElement("link");
css.rel = "stylesheet";
css.href = "/css/style.css?v=" + version;
document.head.appendChild(css);
