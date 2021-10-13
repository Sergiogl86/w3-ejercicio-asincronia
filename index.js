import speak from "./js/speak.js";
import userId from "./js/get-user-id.js";

const frases = document.querySelector(".display");

const frasesAleatorias = speak;

frasesAleatorias(frases);

const nameID = "Sergio";

function muestraId(name) {
  const loading = document.querySelector(".loading");
  loading.className = "loading";
  const imprimirUserId = userId;
  const boxUserId = document.querySelector(".id").querySelector(".data");
  boxUserId.innerHTML = `${name}!`;
}

function promesa(nameID) {
  const loading = document.querySelector(".loading");
  loading.className = "loading on";
  const mostrarId = userId;
  mostrarId("Sergio")
    .then((name) => muestraId(name.value))
    .catch((name) => muestraId(name.message));
}

const mostrarId = userId;

const boton = document
  .querySelector(".action")
  .getElementsByTagName("button")[0];
boton.addEventListener("click", promesa);
