// const sounds = {
//   kickBtn: new Audio("/sounds/kick.wav"),
//   snareBtn: new Audio("/sounds/snare.wav"),
//   hiHatBtn: new Audio("/sounds/hiHatClose.wav"),
// };

// console.log(sounds);

const drumBtns = document.querySelectorAll(".drumSet");

const soundPlay = (click) => {
  const idKey = click.target.id;
  new Audio("../sounds/" + idKey + ".wav").play();
};

for (const drumBtn of drumBtns) {
  drumBtn.addEventListener("click", soundPlay);
}

// Recorre los sonidos
drumBtns.forEach((button) => {
  const soundName = button.dataset.sound;

  button.addEventListener("click", () => {
    playSound(drumBtns[soundName]);
  });
});

// playSound
function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

// Array vacío con la secuencia sobra la que debería grabarse
const sequence = [];

function recordSequence(soundName) {
  const time = Date.now();

  sequence.push({ sound: soundName, time: time });
  console.log(soundName);
  console.log(time);
  console.log(sequence);
}

recordSequence();

// closeHiHatButton.addEventListener("click", (event) => {
//     console.log(event);
//     audioElementCloseHiHat.play();
//     console.log("Click en Hi-hat CLOSE");
//   });
