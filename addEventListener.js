// Escuchando eventos desde JS

const h1 = document.querySelector("h1");
const form = document.querySelector("form");

const primerValor = document.querySelector('#calculo1');

const segundoValor = document.querySelector('#calculo2');

const btn = document.querySelector('#btnCalcular');
btn.addEventListener('click', mostrar);

const btnSumar = document.querySelector('#btnSumar');
btnSumar.addEventListener('click', sumar);

const btnRestar = document.querySelector('#btnRestar');
btnRestar.addEventListener('click', restar);

const btnDividir = document.querySelector('#btnDividir');
btnDividir.addEventListener('click', dividir);

const btnMultiplicar = document.querySelector('#btnMultiplicar');
btnMultiplicar.addEventListener('click', multiplicar);


function mostrar(event){
    event.preventDefault();
    // alert("El resultado del primer valor es: " + " " + (parseInt(primerValor.value) + "El resultado del segundo valor es: + " " + parseInt(segundoValor.value)));
    resultado.innerHTML = "El resultado del primer valor es: "+ primerValor.value + " El resultado del segundo valor es: " + segundoValor.value;
}

function sumar(event){
    event.preventDefault();
    //alert("El resultado de la sumas es: " + (parseInt(primerValor.value)+parseInt(segundoValor.value)));
    resultado.innerHTML = "El resultado de la Suma es: "+  (parseInt(primerValor.value)+parseInt(segundoValor.value));
}

function restar(event){
    event.preventDefault();
   
    //alert("El resultado de la resta es: " + (parseInt(primerValor.value) - parseInt(segundoValor.value)));
    resultado.innerHTML = "El resultado de la Restas es: "+  (parseInt(primerValor.value) - parseInt(segundoValor.value));
}

function dividir(event){
    event.preventDefault();
    
    //alert("El resultado de la resta es: " + (parseInt(primerValor.value) / parseInt(segundoValor.value)));
    resultado.innerHTML = "El resultado de la Division es: "+  (parseInt(primerValor.value) / parseInt(segundoValor.value));
}

function multiplicar(event){
    event.preventDefault();
    
   // alert("El resultado de la resta es: " + (parseInt(primerValor.value) * parseInt(segundoValor.value)));
    resultado.innerHTML = "El resultado de la Multiplicacion es: "+  (parseInt(primerValor.value)* parseInt(segundoValor.value));
}