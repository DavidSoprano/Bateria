"use strict";

const sounds = document.querySelectorAll(".durums");

// Botón de grabar
const recorderBtn = document.querySelector("#recorder");
const stopBtn = document.querySelector("#stop");
const playBtn = document.querySelector("#play");

// const recordedMusic = {};

const soundPlay = (click) => {
  const idKey = click.target.id;
  new Audio("../sounds/" + idKey + ".wav").play();
};

for (const sound of sounds) {
  sound.addEventListener("click", soundPlay);
}

const grabaciones = [];
let grabacionActiva = false;
let tiempoAnterior = null;

const grabacionesSelect = document.querySelector("#grabacionesSelect");

// Agrega las opciones de grabación al elemento "select"
for (let i = 0; i < localStorage.length; i++) {
  const clave = localStorage.key(i);
  if (clave.includes("-")) {
    const opcion = document.createElement("option");
    opcion.text = clave;
    opcion.value = clave;
    grabacionesSelect.add(opcion);
  }
}

function leerGrabacion(claveGrabacion) {
  const grabacionSerializada = localStorage.getItem(claveGrabacion);
  const grabacion = JSON.parse(grabacionSerializada);
  grabaciones.length = 0; // Vaciar el array actual
  grabaciones.push(...grabacion); // Agregar los nuevos datos
}

// Agrega un nuevo evento para cargar las grabaciones seleccionadas del Local Storage
grabacionesSelect.addEventListener("change", () => {
  const claveGrabacion = grabacionesSelect.value;
  grabaciones.length = 0;
  leerGrabacion(claveGrabacion);
});

const formulario = document.querySelector("form");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombreGrabacion = document.querySelector("#nombreGrabacion").value;
  const etiquetaGrabacion = document.querySelector("#etiquetaGrabacion").value;
  const claveGrabacion = `${nombreGrabacion}-${etiquetaGrabacion}`;
  const grabacionSerializada = JSON.stringify(grabaciones);
  localStorage.setItem(claveGrabacion, grabacionSerializada);
  alert(
    `La grabación "${nombreGrabacion}" ha sido guardada con la etiqueta "${etiquetaGrabacion}".`
  );

  grabaciones.length = 0;
  tiempoAnterior = null;
});

sounds.forEach((boton) => {
  boton.addEventListener("click", () => {
    if (grabacionActiva) {
      const tiempoActual = Date.now();
      const soundName = boton.dataset.soundName;
      const tiempoTranscurrido = tiempoAnterior
        ? tiempoActual - tiempoAnterior
        : null;
      const grabacion = {
        name: soundName,
        time: tiempoActual,
        elapsedTime: tiempoTranscurrido,
      };
      grabaciones.push(grabacion);
      tiempoAnterior = tiempoActual;
    }
  });
});

recorderBtn.addEventListener("click", () => {
  grabacionActiva = true;
  tiempoAnterior = null;
});

stopBtn.addEventListener("click", () => {
  grabacionActiva = false;
});

playBtn.addEventListener("click", () => {
  let tiempoTranscurridoTotal = 0;
  grabaciones.forEach((grabacion) => {
    const tiempoTranscurrido = grabacion.elapsedTime || 0;
    setTimeout(() => {
      console.log(
        `Botón: ${grabacion.name}, Tiempo: ${grabacion.time}, Tiempo transcurrido: ${tiempoTranscurridoTotal}`
      );
      new Audio("../sounds/" + grabacion.name + ".wav").play();
    }, tiempoTranscurridoTotal);
    tiempoTranscurridoTotal += tiempoTranscurrido;
  });
});

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

// Huevo de Pascua
const fartBtn = document.querySelector("#soundFart");
const fartNoise = new Audio("sounds/fart.wav");

fartBtn.addEventListener("click", (event) => {
  fartNoise.play();
});
