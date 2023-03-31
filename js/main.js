"use strict";

const sounds = document.querySelectorAll(".durums");

// Botón de grabar
const recorderBtn = document.querySelector("#recorder");
const stopBtn = document.querySelector("#stop");
const playBtn = document.querySelector("#play");

// ARRAY vacío para almacenar la grabación
// const recordedMusic = {};
// Añadir setTimeout para cada pulsación

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
      crash.classList.add("active");
      break;
    case "s":
      hiHatClose.click();
      hiHatClose.classList.add("active2");
      break;
    case "d":
      hiHatOpen.click();
      hiHatOpen.classList.add("active");
      break;
    case "f":
      kick.click();
      kick.classList.add("active2");
      break;
    case "g":
      ride.click();
      ride.classList.add("active");
      break;
    case "q":
      snare.click();
      snare.classList.add("active");
      break;
    case "w":
      tomHigh.click();
      tomHigh.classList.add("active");
      break;
    case "e":
      tomLow.click();
      tomLow.classList.add("active");
      break;
    case "r":
      tomMid.click();
      tomMid.classList.add("active");
      break;
    case "t":
      crash2.click();
      crash2.classList.add("active");
      break;
    default:
      console.log("Tecla no válida");
      break;
  }
};

const soundStopKey = (event) => {
  switch (event.key.toLowerCase()) {
    case "a":
      setTimeout(() => {
        crash.classList.remove("active");
      }, 0);
      break;
    case "s":
      setTimeout(() => {
        hiHatClose.classList.remove("active2");
      }, 0);

      break;
    case "d":
      setTimeout(() => {
        hiHatOpen.classList.remove("active");
      }, 0);
      break;
    case "f":
      setTimeout(() => {
        kick.classList.remove("active2");
      }, 0);
      break;
    case "g":
      setTimeout(() => {
        ride.classList.remove("active");
      }, 0);
      break;
    case "q":
      setTimeout(() => {
        snare.classList.remove("active");
      }, 0);
      break;
    case "w":
      setTimeout(() => {
        tomHigh.classList.remove("active");
      }, 0);
      break;
    case "e":
      setTimeout(() => {
        tomLow.classList.remove("active");
      }, 0);
      break;
    case "r":
      setTimeout(() => {
        tomMid.classList.remove("active");
      }, 0);
      break;
    case "t":
      setTimeout(() => {
        crash2.classList.remove("active");
      }, 0);
      break;
    default:
      break;
  }
};

document.addEventListener("keydown", soundPlayKey);
document.addEventListener("keyup", soundStopKey);
