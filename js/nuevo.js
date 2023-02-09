const titulo = document.querySelector(".titulo1");
const parrafo = document.querySelector(".parrafo");
const input = document.querySelector("input");
const h2 = document.querySelector("h2");
const imgContaianer = document.querySelector("div");

console.log({titulo, parrafo, input, h2});
console.log(titulo, parrafo, input, h2);

console.log(input.value);

titulo.innerHTML = "Titulo editado con <br> innerHTML";

parrafo.innerText = "Párrafo editado con <br> innerText, no respeta el salto en linea porque no es innerHTML"

titulo.setAttribute("class", "modificado"); //modifica el que habia

titulo.classList.add("agregado"); // agrega la clase nueva

titulo.classList.remove("agregado");  //quita la clase

input.value = "02:03"; //agrega algo en el input

const imagen = document.createElement("img"); //img es el argumento que se le pasa, que es el nombre de la etiqueta en html

imagen.setAttribute("src", "https://w7.pngwing.com/pngs/499/485/png-transparent-homer-simpson-desktop-high-definition-television-1080p-homero-computer-logo-vertebrate-thumbnail.png"); 
//se agregó el atributo "src" a la etiqueta img  que e sla que manda a llamar la imagen

console.log(imagen); //la imprime nada más en la consola

imgContaianer.append(imagen); //append le paso la variable imagen (en la que tenia mi img) a la variable imgContainer donde tengo mi div.

