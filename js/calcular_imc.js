// var titulo = document.querySelector(".titulo");
// console.log(titulo.textContent);

// titulo.textContent = "Buena Vida Nutrición";

//capturando variables
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdpeso = paciente.querySelector(".info-peso");
  var peso = tdpeso.textContent;

  var tdaltura = paciente.querySelector(".info-altura");
  var altura = tdaltura.textContent;

  var tdimc = paciente.querySelector(".info-imc");

  tdimc.textContent = calcularIMC(peso, altura);

  var pesoEsValido = true;
  var alturaEsValida = true;

  //validar parametros
  if (peso < 0 || peso > 1000) {
    console.log("Peso incorrecto");
    tdimc.textContent = "Peso incorrecto";
    pesoEsValido = false;
  }

  if (altura < 0 || altura > 3.0) {
    console.log("Peso incorrecto");
    tdimc.textContent = "Altura incorrecta";
    alturaEsValida = false;
  }

  if (pesoEsValido && alturaEsValida) {
    var imc = peso / (altura * altura);
    tdimc.textContent = calcularIMC(peso, altura);
  } else {
    paciente.classList.add("paciente-incorrecto");
  }
}

//función para calcular el IMC peso / (altura * altura)
function calcularIMC(peso, altura) {
  var imc = peso / (altura * altura);
  return imc.toFixed(2);
}

