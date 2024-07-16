document.addEventListener("DOMContentLoaded", () => {
    const initialScreen = document.querySelector(".initial");
    const startButton = document.querySelector(".initial__button");
    const mainContent = document.querySelector(".page__main");
    const backgroundMusic = document.getElementById("background-music");

    startButton.addEventListener("click", () => {
        initialScreen.style.display = "none";  // Hide initial screen
        mainContent.classList.add("active");   // Show main content
        backgroundMusic.play();                // Play background music
    });
});
