// Escuchando eventos desde JS

const h1 = document.querySelector("h1");

const primerValor = document.querySelector('#calculo1');

const segundoValor = document.querySelector('#calculo2');

const btn = document.querySelector('#btnCalcular');

const btnSumar = document.querySelector('#btnSumar');

const btnRestar = document.querySelector('#btnRestar');

const btnDividir = document.querySelector('#btnDividir');

const btnMultiplicar = document.querySelector('#btnMultiplicar');

const resultado = document.querySelector('#resultado')

function btnOnClick(){
    // alert("El resultado del primer valor es: " + " " + (parseInt(primerValor.value) + "El resultado del segundo valor es: + " " + parseInt(segundoValor.value)));
    resultado.innerHTML = "El resultado del primer valor es: "+ primerValor.value + " El resultado del segundo valor es: " + segundoValor.value;
}

function sumar(){
    //alert("El resultado de la sumas es: " + (parseInt(primerValor.value)+parseInt(segundoValor.value)));
    resultado.innerHTML = "El resultado de la Suma es: "+  (parseInt(primerValor.value)+parseInt(segundoValor.value));
}

function restar(){
   
    //alert("El resultado de la resta es: " + (parseInt(primerValor.value) - parseInt(segundoValor.value)));
    resultado.innerHTML = "El resultado de la Restas es: "+  (parseInt(primerValor.value) - parseInt(segundoValor.value));
}

function dividir(){
    
    //alert("El resultado de la resta es: " + (parseInt(primerValor.value) / parseInt(segundoValor.value)));
    resultado.innerHTML = "El resultado de la Division es: "+  (parseInt(primerValor.value) / parseInt(segundoValor.value));
}

function multiplicar(){
    
   // alert("El resultado de la resta es: " + (parseInt(primerValor.value) * parseInt(segundoValor.value)));
    resultado.innerHTML = "El resultado de la Multiplicacion es: "+  (parseInt(primerValor.value)* parseInt(segundoValor.value));
}


