/**
 * Control de flujo
 */

// Estructuras IF
  //  if{condicion}{
//
//  }

var llueve = true;
if(llueve){
    console.log('Necesito un paraguas');
}

var administrador = true;
if(administrador){
    console.log('Bienvenido al sistema');
}

var administrador = 'administrador';
if(administrador === 'administrador'){
    console.log('Bienvenido al sistema');
}

const MAYORIA_DE_EDAD = 18;
var edadPersona = 21;

if(edadPersona >= MAYORIA_DE_EDAD){
    console.log('Es mayor de edad');
}else{
    console.log('Es menor de edad');
}

var semaforo = 'verde'

if(semaforo === 'verde'){
    console.log('Arranca');
}else if(semaforo === 'amarillo'){
    console.log('Precaucion');
}else if(semaforo === 'rojo'){
    console.log('Detente');
}else{
    console.log('El semaforo no tiene esa luz');
}

// Switch
var producto = 'naranja';

switch(producto){
    case 'papaya':
    case 'naranja':
        console.log('Las papayas y naranjas cuestan $1500 el kilo');
        break;  // el break frena la ejecucion de los casos 
    case 'mango':
        console.log('El mango cuesta $2000 el kilo');
        break;
    default:
        console.log('No disponemos de ese producto');  //'Este caso se cumple si ninguo de los anteriores cumple la expresion'
}