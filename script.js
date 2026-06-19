var titulo2 = document.querySelector("h2")
titulo2.textContent = "Clientes";

//peso
let paciente = document.querySelector("#primeiro-paciente");
let tdPeso = paciente.querySelector(".info-peso");

//altura
let tdAltura = paciente.querySelector(".info-altura");
let valorAltura = tdAltura.textContent;

//clculo imc
let imc = valorPeso / (valorAltura * valorAltura);

//valor imc
let tdImc = paciente.querySelector('.info-imc');
tdImc.textContent = imc

//verificaçao de peso e altura
if(valordoPeso <0 || valorPeso > 350){
    alert("Peso Invalida!");
}