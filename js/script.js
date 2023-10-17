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

const palabraRandom = Math.floor(Math.random()* posiblesPalabras.length);
const palabraOculta = posiblesPalabras[palabraRandom][0];
const pistaOculta = posiblesPalabras[palabraRandom][1];


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
  // add the necessary scripts
  let guion = "_";
  //vemos la longitud de la palabra oculta y generamos span 
  //y ponemos tantos guiones como letras tenga la palabra
  for(let i = 0; i < palabraOculta.length; i++){
    let span = document.createElement("SPAN");
    palabra.appendChild(span)
    span.textContent += guion;

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


//evento en el que comprobamos la letra
const comprobarLetra = (event) =>{

  // seleccionamos toods los span creados
  const spans = document.querySelectorAll("#palabra span");
  const button = event.target;
  //el boton se desabilita cuando le pulsamos
  button.disabled = true;
  const letra = button.innerHTML;
  //generamos un array para meter todas las letras de los botones
  //y convertirlas a minuscula
  const letraAbe = [];
  for (let i = 0; i < letra.length; i++) {
    letraAbe.push(letra[i].toLowerCase());
  }

  let acierto = false;
  if(button.nodeName === "BUTTON"){
    //recorremos las longitud de la palabra oculta
    for(let i = 0; i < palabraOculta.length; i++){
      //comprobamos si la letra que hemos pulsado es igual a alguna 
      //letra de la palabra oculta
      if(letraAbe == palabraOculta[i]){
        //la letra que hemos seleccionado si se ecnuentra en la palabra
        //reemplaza los guiones en su posicion
        spans[i].textContent = letraAbe;
        button.classList.add("tamanio-botones", "btn", "btn-success", "bg-success", "text-white", "m-1")
        acierto = true;
      }
      
    }
    
    //si la letra que hemos acertado es igual a la palabra oculta, 
    //mostramos en la pantalla una ferlicitacion
    if(palabra === palabraOculta){
      botonera.textContent = "FELICIDADES!!!"
      botonera.classList.add("cabecera");
      palabra.textContent = palabraOculta;
    } 
    
    console.log(palabra)
    console.log(palabraOculta)

    if(acierto == false){
      button.classList.add("tamanio-botones", "btn", "btn-danger", "bg-danger", "m-1")
      if(intentos.textContent > "0"){
        //bajamos el numero de intentos
        intentos.textContent--;
        intentos.innerHTML = intentos.textContent;
        //añadimos la imagen segun bajen los intentos
        imagen.src = "./imagenes/ahorcado_"+intentos.innerHTML+".png";
      }
      if(intentos.textContent == "0"){
        //cuando llega a 0, se muestra en pantalla
        botonera.textContent = "NO HAS ACERTADO!!!"
        botonera.classList.add("cabecera");
        palabra.textContent = "LA PALABRA ERA: "+palabraOculta;
      }
        
    }
  }
  
}


botonera.addEventListener("click", comprobarLetra)




