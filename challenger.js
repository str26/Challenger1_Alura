// 👩‍💻 👇 Variables de la funciones a utilizar .😺
console.log("cargando js");

function mostrar() {
  document.getElementById("resultado").style.display = "none";
  document.getElementById("msjNoEncontrado").style.display =
    "inline-block";
}

function ocultar() {
  document.getElementById("msjNoEncontrado").style.display = "none";
  document.getElementById("resultado").style.display = "inline-block";
}

// --👩‍💻 👇Codigo Encriptador .😺 --->
function encriptador() {
  var frase = document.getElementById("textarea").value;
  var aux = "";
  var aux2 = "";
  var lon = 0;
  var cont = 0;

  lon = frase.length;
  for (cont = 0; cont < lon; cont++) {
    aux = frase.charAt(cont);
    if (aux === "a") {
      aux2 = aux2.concat("ai");
    } else {
      if (aux === "e") {
        aux2 = aux2.concat("enter");
      } else {
        if (aux === "i") {
          aux2 = aux2.concat("imes");
        } else {
          if (aux === "o") {
            aux2 = aux2.concat("ober");
          } else {
            if (aux === "u") {
              aux2 = aux2.concat("ufat");
            } else {
              aux2 = aux2.concat(aux);
            }
          }
        }
      }
    }
  }
  document.getElementById("resultado").value = aux2;
}

// --👩‍💻 👇Codigo Encriptador .😺 --->
function desencriptador() {
  document.getElementById("resultado").value = "";
  var frase = document.getElementById("textarea").value;

  if (frase === "") {
    alert("No hay texto");
  } else {
    var mensaje = frase.replaceAll("ufat", "u");
    mensaje = mensaje.replaceAll("ober", "o");
    mensaje = mensaje.replaceAll("ai", "a");
    mensaje = mensaje.replaceAll("imes", "i");
    mensaje = mensaje.replaceAll("enter", "e");
  }
  document.getElementById("resultado").value = mensaje;
}

function copiar() {
  var copiando = document.getElementById("resultado").value;
  document.getElementById("textarea").value = copiando;
  
}
