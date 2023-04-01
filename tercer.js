/**
 * Entiendo. En ese caso, si los sonidos de la batería están definidos en el JavaScript 
 * y no son archivos de audio externos, puedes usar la API Web Audio de JavaScript para capturar la salida
 *  de audio generada por la batería virtual y guardarla en un archivo de audio.

Aquí hay un ejemplo de cómo hacerlo:
 */

// crear un contexto de audio
// var audioCtx = new (window.AudioContext || window.webkitAudioContext)(); MAL
var audioCtx = new window.AudioContext();

// crear un nodo de origen para la batería virtual
var source = audioCtx.createBufferSource();

// conectar el nodo de origen a la salida del contexto de audio
source.connect(audioCtx.destination);

// iniciar la reproducción de la batería virtual
source.start();

// crear un nodo de grabación
var recorder = new Recorder(source);

// iniciar la grabación
recorder.record();

// detener la grabación después de algunos segundos
setTimeout(function () {
  recorder.stop();

  // obtener el archivo de audio grabado
  recorder.exportWAV(function (blob) {
    // guardar el archivo de audio en el disco
    Recorder.forceDownload(blob, "grabacion.wav");
  });
}, 5000); // grabar durante 5 segundos

/**
 * Este código crea un contexto de audio, crea un nodo de origen para la batería virtual,
 * lo conecta a la salida del contexto de audio y lo reproduce. Luego, crea un nodo de grabación
 * usando la biblioteca Recorder.js, inicia la grabación, espera 5 segundos y detiene la grabación.
 * Finalmente, exporta el archivo de audio grabado y lo guarda en el disco.
 */
