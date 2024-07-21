document.addEventListener("DOMContentLoaded", () => {
	const initialScreen = document.querySelector(".initial");
	const startButton = document.querySelector(".initial__button");
	const muteButton = document.querySelector(".initital__mute");
	const muteSpan = muteButton.querySelector("span");
	const mainContent = document.querySelector(".page__main");
	const transitionSound = document.getElementById("transition-sound");
	const introSong = document.getElementById("intro-song");
	const backgroundSong = document.getElementById("background-song");
	const black = "#000";
	const white = "#fff"

	startButton.addEventListener("click", () => {
			startButton.classList.add("fullscreen");
			transitionSound.play();
			setTimeout(() => {
					const flash = document.createElement("div");
					flash.className = "flash";
					document.body.appendChild(flash);
					flash.classList.add("show");
					introSong.pause();
					setTimeout(() => {
							initialScreen.style.display = "none";
							mainContent.classList.add("active");
							flash.classList.remove("show");
							backgroundSong.play();
							document.querySelector(".page").style.backgroundColor = black;
							setTimeout(() => {
									document.body.removeChild(flash);
							}, 500);
					}, 500);
			}, 500); 
	});

	muteButton.addEventListener("click", () => {
		if (!muteSpan.classList.contains("mute-t")) {
      muteSpan.classList.add("mute-t");
			introSong.play();
			introSong.muted = false; 
    } else {
      muteSpan.classList.remove("mute-t");
			introSong.muted = true;
    }
	});
});
