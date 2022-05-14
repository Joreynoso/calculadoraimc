// var nombre = document.getElementById("nombre");
// var peso2 = document.getElementById("peso");
// var altura = document.getElementById("altura");
// var gordura = document.getElementById("gordura");
// var form = document.getElementById("form-adicionar");

// console.log(nombre);
// console.log(peso2);
// console.log(altura);
// console.log(gordura);

// form.addEventListener("submit", e =>{

// })

//eventos addEventListener
var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function (event) {
  //preventDeafult() previene que la pagina se actualize y borre los datos
  event.preventDefault();
  var form = document.querySelector("#form-adicionar");

  //capturar variables de los campos
  var nombre = form.nombre.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

  var tabla = document.querySelector("#tabla-pacientes");

  //creando elementos html para llenar tabla
  var pacienteTR = document.createElement("tr");
  var nombreTD = document.createElement("td");
  var pesoTD = document.createElement("td");
  var alturaTD = document.createElement("td");
  var gorduraTD = document.createElement("td");
  var imcTD = document.createElement("td");

  //asignando
  nombreTD.textContent = nombre;
  pesoTD.textContent = peso;
  alturaTD.textContent = altura;
  gorduraTD.textContent = gordura;
  imcTD.textContent = calcularIMC(peso, altura);

  pacienteTR.appendChild(nombreTD);
  pacienteTR.appendChild(pesoTD);
  pacienteTR.appendChild(alturaTD);
  pacienteTR.appendChild(gorduraTD);
  pacienteTR.appendChild(imcTD);

  tabla.appendChild(pacienteTR);
});

