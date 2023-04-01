"use strict";

// query para los distintos tipos de botones
const drumBtns = document.querySelectorAll(".drumSet"); // Botones de sonido
const recordBtn = document.querySelector("#recordButton"); // Botón de grabar
// Objeto con los sonidos
const sounds = {
  kickBtn: new Audio("/sounds/kick.wav"), // Node cannot be found in the current page.
  snareBtn: new Audio("/sounds/snare.wav"), // Node cannot be found in the current page.
  hiHatBtn: new Audio("/sounds/hiHatClose.wav"), // Node cannot be found in the current page.
}; // WAV está en currentSrc (por el aviso de arriba)

console.log(sounds); // {kickBtn: audio, snareBtn: audio, hiHatBtn: audio}
console.log(sounds.kickBtn); // <audio preload="auto" src="/sounds/kick.wav"></audio>
console.log(sounds.snareBtn); // <audio preload="auto" src="/sounds/snare.wav"></audio>
console.log(sounds.hiHatBtn); // <audio preload="auto" src="/sounds/hiHatClose.wav"></audio>

// Recorre los sonidos - OJO!! Aquí lo hace como si fuese un ARRAY, pero no lo es
// drumBtns.forEach((drumBtn) => {
//   const soundName = drumBtn.dataset.sound;
//   drumBtn.addEventListener("click", () => {
//     playSound(sounds[soundName]);
//   });
// });

// En teoría sería con FOR IN para recorrer el OBJETO
for (const drumBtn in drumBtns) {
  const soundName = drumBtn.dataset.sound;
  drumBtn.addEventListener("click", (event) => {
    playSound(sounds[soundName]);
  });
}

function playSound(drumBtn) {
  // sound.currentTime = 0;
  drumBtn.play();
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

// recordSequence();

// const closeHiHatButton = document.querySelector(".closeHiHatBtn");
// const audioElementCloseHiHat = new Audio("sounds/hihat-close.wav");
// closeHiHatButton.addEventListener("click", (event) => {
//     console.log(event);
//     audioElementCloseHiHat.play();
//     console.log("Click en Hi-hat CLOSE");
//   });

recordBtn.addEventListener("click", (event) => {
  recordSequence();
});

// Crear función con estos botones especiales
// class buttonKeys
// button id recordButton
// button id stopButton
// button id playButton
