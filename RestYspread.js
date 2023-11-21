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