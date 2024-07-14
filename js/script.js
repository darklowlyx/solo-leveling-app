document.addEventListener("DOMContentLoaded", () => {
    const initialScreen = document.querySelector(".page__initial");
    const startButton = document.querySelector(".page__start-button");
    const mainContent = document.querySelector(".page__main");
    const backgroundMusic = document.getElementById("background-music");

    startButton.addEventListener("click", () => {
        initialScreen.style.display = "none";  // Hide initial screen
        mainContent.classList.add("active");   // Show main content
        backgroundMusic.play();                // Play background music
    });
});
