"use strict";

const crash = document.querySelector("#crash");
const hiHatClose = document.querySelector("#hiHatClose");
const hiHatOpen = document.querySelector("#hiHatOpen");
const kick = document.querySelector("#kick");
const ride = document.querySelector("#ride");
const snare = document.querySelector("#snare");
const tomHigh = document.querySelector("#tomHigh");
const tomLow = document.querySelector("#tomLow");
const tomMid = document.querySelector("#tomMid");
const crash2 = document.querySelector("#crash2");
// Botón de grabar
const recorderBtn = document.querySelector("#recorder");
const stopBtn = document.querySelector("#stop");
const playBtn = document.querySelector("#play");

const sounds = [
  crash,
  crash2,
  hiHatClose,
  hiHatOpen,
  kick,
  ride,
  snare,
  tomHigh,
  tomLow,
  tomMid,
];

// const recordedMusic = {};

const soundPlay = (click) => {
  const idKey = click.target.id;
  new Audio("../sounds/" + idKey + ".wav").play();
};

for (const sound of sounds) {
  sound.addEventListener("click", soundPlay);
}

const soundPlayKey = (event) => {
  switch (event.key.toLowerCase()) {
    case "a":
      crash.click();
      break;
    case "s":
      hiHatClose.click();
      break;
    case "d":
      hiHatOpen.click();
      break;
    case "f":
      kick.click();
      break;
    case "g":
      ride.click();
      break;
    case "h":
      snare.click();
      break;
    case "j":
      tomHigh.click();
      break;
    case "k":
      tomLow.click();
      break;
    case "l":
      tomMid.click();
      break;
    default:
      console.log("Tecla no válida");
      break;
  }
};

document.addEventListener("keydown", soundPlayKey);

const audioElementPlay = new Audio("sounds/snare.wav");

snare.soundPlay.addEventListener("click", (event) => {
  audioElementPlay.play();
});

// document.addEventListener("click", function (e) {
//   const cursor = document.querySelector(".durums");
//   cursor.classList.add("cursor-click");

//   // Después de un breve período, elimine la clase 'cursor-click'
//   setTimeout(function () {
//     cursor.classList.remove("cursor-click");
//   }, 2000);
// });
