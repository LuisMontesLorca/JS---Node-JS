/**
 * Ciclos
 */

// WHILE
var contador = 0;
while(contador <= 5){
    console.log('Hola Mundo');
    contador += 1;
}

// DO WHILE ------ EJECUTA AL MENOS UNA ITERACION Y DESPUES EVALUA LA CONDICION
var contador = 11;
do {
    console.log('Hola Mundo');
    contador +=1;
} while(contador <= 10)

// FOR
//for(inicio; final; aumento){}
for(let i = 0; i<=5; i++){
    console.log('Hola Mundo');
}

// FOR IN --- SIRVE SOLO PARA ITERAR EN OBJETOS JAVASCRIPT es para ver si un objeto esta bien estructurado
//for(variable IN objeto){
var persona ={
    nombre: 'Luis',
    apellido: 'Montes',
    edad: 28
}
for(let clave in persona){
    console.log(clave, persona[clave]);
}

// FOR OF   sirve en objetos iterables 
// for(variable of objeto_iterable ){}
var arreglo =[1,2,3,4,5]
for(let valor of arreglo){
    console.log(valor);
}

var nombre = 'Luis'
for(let valor of nombre){
    console.log(valor);
}
