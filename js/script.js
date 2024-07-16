document.addEventListener("DOMContentLoaded", () => {
	const initialScreen = document.querySelector(".initial");
	const startButton = document.querySelector(".initial__button");
	const mainContent = document.querySelector(".page__main");
	const backgroundMusic = document.getElementById("background-music");
	const transitionSound = document.getElementById("transition-sound")

	startButton.addEventListener("click", () => {
			startButton.classList.add("fullscreen");
			transitionSound.play();
			setTimeout(() => {
					const flash = document.createElement("div");
					flash.className = "flash";
					document.body.appendChild(flash);
					flash.classList.add("show");

					setTimeout(() => {
							initialScreen.style.display = "none"; // Hide initial screen
							mainContent.classList.add("active");  // Show main content
							flash.classList.remove("show");

							setTimeout(() => {
									document.body.removeChild(flash);
							}, 500);

							backgroundMusic.play();               // Play background music
					}, 500); // Wait for the button to expand
			}, 500); // Wait for the button to expand
	});
});
