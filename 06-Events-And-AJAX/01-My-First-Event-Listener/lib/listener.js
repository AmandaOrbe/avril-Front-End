// TODO: React to a click on the button!
const button = document.getElementById("clickme");
const audio = new Audio('sound.mp3');
const addDisabled = (event) => {
  if (event.target.innerText = "Click me!") {
    event.target.innerText = "Bingo!";
  } else {
    event.target.innerText = "Click me";
  }
  event.target.classList.toggle("disabled");
  audio.play();
};
button.addEventListener("click", addDisabled);
