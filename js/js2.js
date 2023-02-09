
// MANIPULACION DEL DOM

//document.getElementsByTagName('h1');
const h1 = document.querySelector('h1');

const parrafo = document.querySelector('p');
const parrafito = document.getElementById('parrafo')

// Con este seteo un nuevo atributo primero lo busco por su clase y despues le agrego el segundo parametro que es rojo
//h1.setAttribute('h1', 'rojo');


// Con este busco en la lista de class, y le adiciono otra clase ahora rojo y verde.
h1.classList.add('rojo','verde')


// Con este comando quito de la lista de clases del elemento h1 el que tenga nombre verde.
h1.classList.remove('verde');

// Cree un nuevo elemento de html en el documento de html y esto lo guarde en una variable
const fotoVegeta = document.createElement('img');

fotoVegeta.setAttribute('src','https://i.pinimg.com/originals/e4/49/43/e4494317b30a60e648e00846c4c3de1b.gifhttps://i.pinimg.com/originals/e4/49/43/e4494317b30a60e648e00846c4c3de1b.gif')

console.log(fotoVegeta);

const vegeta = document.querySelector('h2')

//vegeta.appendChild(fotoVegeta);
const textoVegeta = " Yo soy el Gran VEGETA!!!"
parrafito.innerHTML = textoVegeta;

parrafito.appendChild(fotoVegeta);
// parafito.replaceWith(fotoVegeta);



