"use strict";

const sounds = document.querySelectorAll(".durums");

// Botón de grabar, stop y play
const recorderBtn = document.querySelector("#recorder");
const stopBtn = document.querySelector("#stop");
const playBtn = document.querySelector("#play");

const soundPlay = (click) => {
  const idKey = click.target.id;
  new Audio("../sounds/" + idKey + ".wav").play();
};

for (const sound of sounds) {
  sound.addEventListener("click", soundPlay);
}

// Creamos un array vacio para guardar los botones de la batería presionados.
const grabaciones = [];
// grabacionActiva: daría como valor false para que solo grabe cuando su valor sea true.
let grabacionActiva = false;
// tiempoAnterior: esta variable almacena el tiempo en que se presiono el botón anterior en milisegundos.
let tiempoAnterior = null;
// Recorre el array de sounds y agrega a cada botón(en este caso serían los botones de la batería) un "EventListener" para que cada vez que se haga click en el botón si "grabacionActiva" es true crea una constante con el tiempo actual, otra constante con el soundName(el nombre del sónido que hemos asignado nosotros en el HTML) y otra con el "tiempoTranscurrido" entre los clicks de los botones. Por último crea la constante "grabacion" con un objeto que contiene las 3 constantes anteriores dentro de sus respectivas propiedades.
// Por úlimo hace un push y guarda "grabacion" dentro de "grabaciones". También al final del bucle "tiempoAnterior" guarda el valor de "tiempoActual" para asi guardar el "tiempoAnterior" en el que se hizo click el botón.
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
// El botón de grabacion.
recorderBtn.addEventListener("click", () => {
  grabacionActiva = true;
  tiempoAnterior = null;
});
// El botón de stop.
stopBtn.addEventListener("click", () => {
  grabacionActiva = false;
});
// El botón de play: Recorremos cada objeto del array "grabaciones" creamos una constante "tiempoTranscurrido" que accede al valor de la propiedad "elapsedTime" o 0 si no existiera el valor de "elapsedTime". Luego el setTimeout reproduce el "new Audio" y dependiendo del botón que se pulso al hacer la grabacion, la propiedad ".name" de cada "grabacion" se añade a la string de "new Audio", de esa forma siempre reproduce el sonido correspondiente.
// Por último el setTimeout reproduce cada sónido según el tiempo que le indica "tiempoTranscurridoTotal".
// Al final de cada vuelta del bucle "tiempoTranscurridoTotal" pasa a tener el valor de "tiempoTranscurrido", de esta manera la primera vez se reproduce en 0 milisegundos(que es el valor que tiene) y la siguiente se reproduce con el tiempo exacto en el que se guardo al hacer la grabación, así sucesivamente.
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

const formulario = document.querySelector("form");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombreGrabacion = document.querySelector("#nombreGrabacion").value;
  const etiquetaGrabacion = document.querySelector("#etiquetaGrabacion").value;
  const claveGrabacion = `${nombreGrabacion}-${etiquetaGrabacion}`;
  const grabacionSerializada = JSON.stringify(grabaciones);
  localStorage.setItem(claveGrabacion, grabacionSerializada);
  const opcion = document.createElement("option");
  opcion.text = claveGrabacion;
  opcion.value = claveGrabacion;
  grabacionesSelect.add(opcion);
  alert(
    `La grabación "${nombreGrabacion}" ha sido guardada con la etiqueta "${etiquetaGrabacion}".`
  );

  grabaciones.length = 0;
  tiempoAnterior = null;
});

const grabacionesSelect = document.querySelector("#grabacionesSelect");

const leerGrabacion = (claveGrabacion) => {
  const grabacionSerializada = localStorage.getItem(claveGrabacion);
  const grabacion = JSON.parse(grabacionSerializada);
  grabaciones.length = 0; // Vaciar el array actual
  grabaciones.push(...grabacion); // Agregar los nuevos datos
};

// Agrega un nuevo evento para cargar las grabaciones seleccionadas del Local Storage
grabacionesSelect.addEventListener("change", () => {
  const claveGrabacion = grabacionesSelect.value;
  grabaciones.length = 0;
  leerGrabacion(claveGrabacion);
});

// Agrega las opciones de grabación al elemento "select"
for (let i = 0; i < localStorage.length; i++) {
  const clave = localStorage.key(i);
  console.log(localStorage.key(i));
  if (clave.includes("-")) {
    const opcion = document.createElement("option");
    opcion.text = clave;
    opcion.value = clave;
    grabacionesSelect.add(opcion);
  }
}

const soundPlayKey = (event) => {
  if (event.target.tagName === "INPUT") {
    return;
  }
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

////////////////////
// Documentación //
//////////////////
// Consultar INFO https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
// En concreto https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement
// Código de teclas https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
// Ayuda teclas https://stackoverflow.com/questions/12578379/play-a-sound-when-a-key-is-pressed
// Cómo grabar https://medium.com/@bryanjenningz/how-to-record-and-play-audio-in-javascript-faa1b2b3e49b
// Otro ejemplo https://ralzohairi.medium.com/audio-recording-in-javascript-96eed45b75ee
// Saber duración https://es.stackoverflow.com/questions/408666/obtener-la-duracion-de-un-audio-con-javascript
// MDN sobre EVENTOS https://developer.mozilla.org/en-US/docs/Web/Events
// Ideas: cursor ratón https://www.cristalab.com/tutoriales/como-personalizar-el-cursor-con-javascript-c45943l/
// https://www.w3schools.com/jsref/prop_style_cursor.asp
