const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
let originalLinkColor = null;

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        main.style.background = "rgb(0, 0, 0)";
        main.style.color = "rgb(255, 255, 255)";
        main.querySelectorAll("a").forEach(link => {
            if (!originalLinkColor) {
                originalLinkColor = getComputedStyle(link).color;
            }
            link.style.color = "rgb(255, 255, 255)";
        });
        modeButton.textContent = "👓";
    } else {
        main.style.background = "rgb(255, 255, 255)";
        main.style.color = "rgb(0, 0, 0)";
        main.querySelectorAll("a").forEach(link => {
            link.style.color = originalLinkColor;
        });
        modeButton.textContent = "🕶️";
    }
});