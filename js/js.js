document.getElementById("parrafo");
// Este trae del objeto documento con su id de identificador.

document.getElementsByClassName("parrafito");
// Este trae del objeto documento con su nombre clase.

document.getElementsByTagName("h1");
// Este trae segun su nombre de etiqueta 


const h1= document.querySelector("h1");
// Con query selector sleccionara segun su estilo por etiqueta, por clase o por id.

const p = document.querySelector("p");

const parrafito = document.querySelector(".parrafito");

const parrafo = document.querySelector("#parrafo")

const input = document.querySelector("input");

console.log(input.value);


console.log({
    h1,
    p,
    parrafito,
    parrafo,
    input
}

    // Al utilizar {} js lo interpretara como un objeto y asi mostrara todas sus propiedaes y valores.
);

h1.innerHTML= 'Patito  <br> Feo ';
// innerHTML nos permite modificar nuestro html desde js.
// Nos permite escribir etiquetas dentro de nuestro html.
h1.innerText = "patito <br> dos";

// innertText solo transcribe texto al html no etiquetas.

console.log(h1.getAttribute("pantalla"))
// nos esta buscando del atributo que este dentro del html en este caso elegimos pantalla nos escribe el valor que tenga
// en este caso escribe platzilg

console.log(h1.setAttribute("pantalla","rojo"))
// Le cambia el contenido del primero por el segundo, que uno setea


h1.classList.add("verde");
// classList abre la opcion de clases para una etiqueta en especifico en este caso h1 le agregue una clase llamada rojo

h1.classList.remove("verde");
// Con este opcion remuevo una clase que este dentro de la lista de clases

h1.classList.toggle("amarillo");

console.log(h1.classList.contains("amarillo"));
// el atributo contains nos permite dar valores booleanos si existe esa clase que mandamos a llamar dentro de la lista

input.value = "456";
//En este caso cambie el valor del input por uno que le estoy definiendo


// Aporte de la comunidad de platzi
// En este caso crea variable img donde crea en el documento html una etiqueta img
const img = document.createElement('img');
// Despues busca esa etiqueta img y le setea un atributo mediante src y despues la ruta de la imagen en si.
img.setAttribute('src','https://i.pinimg.com/originals/8b/02/40/8b02409f975c98c89e15bc089e3bd289.gif');
// Muestra por consola esa etiqueta y con su correspondiente ruta
console.log(img);
// Reemplaza la etiqueta h1 por la etiqueta img

//p.replaceWith(img);

//El Element.replaceWith()método reemplaza esto Elementen la lista de elementos secundarios de su elemento primario con un conjunto de Nodeobjetos de cadena. TextLos objetos de cadena se insertan como nodos equivalentes .


//h1.appendChild(img);

// Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado.


h1.replaceWith(img);

img.setAttribute("with","200px");
img.setAttribute("height","300px");



