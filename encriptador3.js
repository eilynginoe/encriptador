const textoEncriptar = document.querySelector("#texto-encriptar");
const mensaje = document.querySelector("#texto-encriptado");

// Función para ocultar elementos
function ocultarElementos(selector) {
    const elementos = document.querySelectorAll(selector);
    elementos.forEach((elemento) => elemento.classList.add("oculto"));
  }
  
  // Función para mostrar elementos
  function mostrarElementos(selector) {
    const elementos = document.querySelectorAll(selector);
    elementos.forEach((elemento) => elemento.classList.remove("oculto"));
  }

function ajustarAlturaTextarea() {
    const textoEncriptar = document.querySelector("#texto-encriptar");
    const mensaje = document.querySelector("#texto-encriptado");
    
    textoEncriptar.style.height = `${textoEncriptar.scrollHeight}px`;
    mensaje.style.height = `${mensaje.scrollHeight}px`;
  }
  

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es onvertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
  const textoEncriptado = encriptar(textoEncriptar.value)
  mensaje.value = textoEncriptado
  textoEncriptar.value = "";
   // Restablecer altura del textarea donde se ingresa el texto a encriptar
  textoEncriptar.style.height = ""; 
   // Ajustar la altura del textarea encriptado después de establecer el valor
   setTimeout(ajustarAlturaTextarea, 0);

  // Ocultar elementos al cargar la página
  ocultarElementos("#imgmuneco, #text-derecha, #mensaje");

  // Mostrar elementos
   mostrarElementos("#texto-encriptado, #btn-copiar");

}

function encriptar(stringEncriptada) {
  let matrizCodigo = [ ["e", "enter"],["i", "imes"], ["a", "ai"],["o", "ober"],["u", "ufat"]];
  stringEncriptada = stringEncriptada.toLowerCase()

  for(let i = 0; i < matrizCodigo.length; i++){
    if(stringEncriptada.includes(matrizCodigo[i][0])){
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
  }

  return stringEncriptada 
}

function btnDesencriptar(){
  const textoEncriptado = desencriptar(textoEncriptar.value)
  mensaje.value = textoEncriptado
  // Ajustar la altura del textarea encriptado después de establecer el valor
  textoEncriptar.value = "";
  // Restablecer altura del textarea donde se muestra el texto encriptado
  textoEncriptar.style.height = "";
  setTimeout(ajustarAlturaTextarea, 0);

  // Ocultar elementos al cargar la página
  ocultarElementos("#imgmuneco, #text-derecha, #mensaje");

  // Mostrar elementos
   mostrarElementos("#texto-encriptado, #btn-copiar");
    
}

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [ ["e", "enter"],["i", "imes"], ["a", "ai"],["o", "ober"],["u", "ufat"]];
  stringDesencriptada = stringDesencriptada.toLowerCase()

  for(let i = 0; i < matrizCodigo.length; i++){
    if(stringDesencriptada.includes(matrizCodigo[i][1])){
      stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
    }
  }

  return stringDesencriptada
}


function copyText(){
  let inputText = document.getElementById("texto-encriptado");

  inputText.select();
  inputText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(inputText.value);

  textoEncriptar.value = inputText.value;
  mensaje.value = " ";

     // Restablecer altura del textarea donde se muestra el texto encriptado
   mensaje.style.height = "";
   // Ajustar la altura del textarea encriptado después de establecer el valor
  setTimeout(ajustarAlturaTextarea, 0);

    // Ocultar elementos al cargar la página 
    ocultarElementos("#texto-encriptado, #btn-copiar");

    // Mostrar elementos
     mostrarElementos("#imgmuneco, #text-derecha, #mensaje");

  // Mostrar el cuadro de diálogo personalizado
  document.getElementById("custom-alert").classList.remove("oculto");

  // Ocultar el cuadro de diálogo después de 0.7 segundos
  setTimeout(function(){
    document.getElementById("custom-alert").classList.add("oculto");
  }, 1000);
}

// Evento para ajustar la altura del textarea al cargar la página
window.addEventListener("DOMContentLoaded", ajustarAlturaTextarea);

