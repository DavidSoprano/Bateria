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
const recorder = document.querySelector("#recorder");

const sounds = [
  crash,
  hiHatClose,
  hiHatOpen,
  kick,
  ride,
  snare,
  tomHigh,
  tomLow,
  tomMid,
  recorder,
];

const soundPlay = (click) => {
  const idKey = click.target.id;
  const soundOnClick = new Audio("../sounds/" + idKey + ".wav").play();
};

for (const sound of sounds) {
  sound.addEventListener("click", soundPlay);
}
