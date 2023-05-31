let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 1000);
let clicks = 0;
btn.onclick = function () {

  clicks += 1;
  if(clicks == 1 ){
	container.style.transform = "rotate(" + number + "deg)";
	number += Math.ceil(Math.random() * 1000);  
  }
}


  function activateAudio() {
    var audio = new Audio();
    audio.src = '../assets/mixkit-arcade-retro-game-over-213.wav';
    audio.play();
  }
  
  setTimeout(activateAudio, 7000);
// Codigo modo nocturno

function toggleTheme() {
    const body = document.body;
    const sunIcon = document.querySelector(".icon-sun");
    const moonIcon = document.querySelector(".icon-moon");

    body.classList.toggle("light-theme");
    body.classList.toggle("dark-theme");

    if (body.classList.contains("light-theme")) {
        sunIcon.style.display = "inline";
        moonIcon.style.display = "none";
    } else {
        sunIcon.style.display = "none";
        moonIcon.style.display = "inline";
    }
}