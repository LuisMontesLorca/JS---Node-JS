/**
 * Funciones
 */

// Declarativa
//function nombreDeLaFuncion(){}

function saludar (){
    console.log('Hola soy Luis');
}
saludar();


function saludar(nombre){
    console.log(`Hola soy ${nombre}`);
}
saludar('Luis')


function saludar(nombre){
    return `Hola soy ${nombre}`
}
var saludo = saludar('Luis Montes');
console.log(saludo);
console.log(saludar('Luis Alberto Montes Lorca'));

// Expresion o funciones anonimas, ya que no tienen nombre
var suma =function(a, b){
    return a+b;
}
console.log(suma(5, 8));

//Arrow function
var restar =(a, b) => {
    return a - b
}
console.log(restar(4,2));

var resta =(a, b) => {
    if (typeof a === 'number' && typeof b === 'number' ) {
        return a - b;
    } else {
    return 'solo puede restar numeros';
    }
}
console.log(resta(4,2));

var multiplicar = (a, b) =>  a * b

console.log(multiplicar(2, 2));

