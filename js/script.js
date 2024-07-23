document.addEventListener("DOMContentLoaded", () => {
	const initialScreen = document.querySelector(".initial");
	const startButton = document.querySelector(".initial__button");
	const mainContent = document.querySelector(".page__main");
	const transitionSound = document.getElementById("transition-sound");

	startButton.addEventListener("click", () => {
			startButton.classList.add("fullscreen");
			transitionSound.play();
			setTimeout(() => {
					const flash = document.createElement("div");
					flash.className = "flash";
					document.body.appendChild(flash);
					flash.classList.add("show");
					setTimeout(() => {
							initialScreen.style.display = "none";
							mainContent.classList.add("active");
							flash.classList.remove("show");
							setTimeout(() => {
									document.body.removeChild(flash);
							}, 500);
					}, 500);
			}, 500); 
	});
});
