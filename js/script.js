// Array de palabras
let posiblesPalabras = [
  ["amarillo", "Un color"],
  ["atlantico", "Un océano"],
  ["ordenador", "Una gran herramienta  ;)"],
  ["laurel", "Un árbol"],
  ["plaza", "Espacio público"],
  ["avenida", "Espacio público"],
  ["calle", "Espacio público"],
  ["desarrolador", "Una profesión"],
  ["rueda", "Gran invento"],
  ["cereza", "Una fruta"],
  ["petanca", "Un juego"],
  ["pintor", "Una profesión"],
  ["naranjo", "Un árbol"],
  ["higuera", "Un árbol"],
  ["everest", "Un monte"],
  ["relampago", "Antecede al trueno"],
  ["jirafa", "Un animal"],
  ["nogal", "Un árbol"],
  ["tigre", "Un animal"],
  ["elefante", "Un animal"],
  ["mosquito", "Un insecto"],
  ["caballo", "Un animal"],
  ["rinoceronte", "Un animal"],
  ["portugal", "Un país"],
  ["españa", "Un país"],
  ["noruega", "Un país"],
  ["italia", "Un país"],
  ["rusia", "Un país"],
  ["uruguay", "Un país"],
  ["ilustracion", "Representación gráfica"],
  ["tarta", "De la pastelería"],
  ["pepito", "De la pastelería"],
  ["excursion", "Actividad en la naturaleza"],
  ["empanadilla", "De la panadería"],
  ["pastel", "De la pastelería"],
  ["colegio", "Lugar para estudiar"],
  ["carrera", "Competición"],
  ["mermelada", "Confitura"],
];

let abecedario = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "Ñ",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];


// Para mostrar el estado de aciertos
let palabra = document.getElementById("palabra");


// Botón para volver a iniciar el juego
let inicio = document.getElementById("inicio");

let botonera = document.getElementById("botonera");
let intentos = document.getElementById("intentos");
let imagen = document.getElementById("imagen");
let pista = document.getElementById("pista");
const textPista = document.getElementById("texto-pista")

   
// Al hacer click en las letras cuando acertamos y fallamos las clase de los botones pueden ser:

  //  tamanio-botones btn btn-danger m-1;
  //  tamanio-botones btn btn-success m-1;



const palabraRandom = Math.floor(Math.random()* posiblesPalabras.length);
const palabraOculta = posiblesPalabras[palabraRandom][0];
const pistaOculta = posiblesPalabras[palabraRandom][1];

  // add the necessary scripts
  const guion = document.createElement("SPAN");
  palabra.appendChild(guion)

// Generate the alphabet and show it on the screen
const generarPalabra = (event) => {

  for (const abe of abecedario) {
    let letra = document.createElement("BUTTON");
    letra.textContent = abe;
    letra.classList.add("tamanio-botones", "btn", "btn-outline-success", "m-1", "font-weight-bold")
    botonera.appendChild(letra);
  }
  console.log(palabraOculta)
  console.log(pistaOculta)

  for(let i = 0; i < palabraOculta.length; i++){

    palabra.textContent += "_";

  }

}
document.addEventListener("DOMContentLoaded", generarPalabra);


// Add clue
const aniadirPista = (event) => {

  textPista.textContent = pistaOculta;

}

pista.addEventListener("click", aniadirPista);

// Update Page
inicio.addEventListener("click", (event) => {

  document.location.reload();

})



const comprobarLetra = (event) =>{

  const spans = document.querySelectorAll("#palabra span")
  const button = event.target;
  button.disabled = true;
  const letra = button.innerHTML;
  const letraAbe = [];
  for (let i = 0; i < letra.length; i++) {
    letraAbe.push(letra[i].toLowerCase());
  }

  let acierto = false;
  for(let i = 0; i < palabraOculta.length; i++){
    if(letraAbe == palabraOculta[i]){
      spans[i].innerHTML = letraAbe;
      /* button.classList.add("tamanio-botones", "btn", "btn-danger", "m-1") */
      acierto = true;
    }
  }


  console.log("La letra "+letraAbe+" en la palabra "+palabraOculta
  +" existe? "+acierto)
  
}



botonera.addEventListener("click", comprobarLetra)

/* if(element.nodeName === "BUTTON"){
  element.disabled = true;

  if(palabraOculta.includes(element.innerText)){
    console.log(event)

    element.classList.add("tamanio-botones", "btn", "btn-success", "m-1")

  }else{
    
    element.classList.add("tamanio-botones", "btn", "btn-danger", "m-1")
    palabra--;
    palabra.textContent = palabra;

  }
} */

/* const btn_letra = document.querySelectorAll("#botonera")

for(let i = 0; i < btn_letra.length; i++){
  btn_letra[i].addEventListener("click", clickLetras);
}

function clickLetras () {

  console.log("Pulsaste un letra");

} */


