//hola





//METODOS
'use strict';

const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' },
  { id: 4, name: 'Alice' }
];

// Buscar un usuario por ID
const userId = 3;
const foundUser = users.find(user => user.id === userId);

console.log(foundUser);

//DESTRUCTURACION
function obtenerInformacion() {
  return ['Brandon', 'Mena', 20];
}

let [nombre, apellido, edad] = obtenerInformacion();

console.log(nombre); 
console.log(apellido); 
console.log(edad); 

//REST
const ingredientes = ['harina', 'azúcar', 'sal', 'huevos', 'leche'];

const [primerIngrediente, segundoIngrediente, ...restoIngredientes] = ingredientes;

console.log(primerIngrediente); 
console.log(segundoIngrediente); 
console.log(restoIngredientes); 

//SPREAD
const frutas1 = ['manzanas', 'peras'];
const frutas2 = ['naranjas', 'uvas'];

const todasLasFrutas = [...frutas1, ...frutas2];

console.log(todasLasFrutas);