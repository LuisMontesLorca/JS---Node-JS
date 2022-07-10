/**
 * 
 *  Operadores
 */

/**
 * 
 *  Operadores de asignacion
 */

// Operador de asignacion

var x = 2; 
var y = true;

// Operador de asignacion de adicion ( += )

var x = 2;
var y = 1;

x  += y ;
console.log(x);

// la expresion siempre va a resolver un valor y una expresion de asignacion va a decirnos que estamos almacenando un valor a una variabl

// Operador de asignacion de resta ( -= )

var x = 1;
var y = 2;

x -= y;
console.log(x);

// Operador de asignacion de multiplicacion ( *= )

var x = 1;
var y = 2;

x *= y;
console.log(x);

// Operador de asignacion de division ( /= )

var x = 1;
var y = 2;

x /= y;
console.log(x);

// Operador de asignacion de residuo o modulo ( %= ) devuelve el residuo de una division

var x = 1;
var y = 2;

x %= y;
console.log(x);

// Operador de asignacion de exponensacion ( **= ) devuelve el residuo de una division

var x = 1;
var y = 2;

x **= y;
console.log(x);


/**
 * 
 *  Operadores de asignacion
 */

// Operador igual ( == )
console.log( 3==3 );
console.log( 3=='3' );

// Operador no es igual ( != )
console.log( 3 != 3 );

// Operador estrictamente igual ( === )
console.log( 3===3 );
console.log( 3==='3');

// Operador desigualdad extricta ( !== )
console.log( 3!== '3' );
console.log( 3 != '3' );  

// Operadores >, >=, <, <=
console.log( 3>4 );
console.log( 3>=4 );
console.log( 3<4 );
console.log( 3<=4 );


/**
 * 
 *  Operadores aritmeticos
 */

console.log( 2 + 2 );
console.log( 2 - 2 );
console.log( 2  *2 );
console.log( 2 / 2 );
console.log( 2 % 2 );
console.log( 2 ** 2 );

// Operador de incremento ( ++ )

var numero = 0;
console.log(++numero);

console.log(numero++);
console.log(numero);

// Operador de decremento ( -- )
var numero = 0;
console.log(--numero);

console.log(numero--);
console.log(numero);

/**
 * 
 *  Operadores logicos
 */

// AND
console.log(true && true);
console.log(2>3 && 1<=2);

// OR
console.log(true || true);
console.log(2>3 || 1<=2);

// NOT
console.log(!true);
console.log(!false);

// Operador de cadena o concatenacion ( + )
var nombre =  'Luis';
var apellido = 'Montes';
var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

// Operador condicional ( condicion ? val1 : val2 )
console.log( 2 > 3 ? 'el numero es mayor' : 'el numero es menor' );

// Operador de desestructuracion 

var persona ={
    nombre:'Luis',
    apellido:'Montes'
}
var { nombre, apellido } = persona;
console.log(nombre);
console.log(apellido);
console.log(persona);

var { nombre:xyz, apellido } = persona;  // se le asigna un nuevo nombre al a desestructuracion que se haCE
console.log(xyz);
console.log(apellido);
console.log(persona);   

// Desestructuracion de arreglos
var arreglo = [ 1,2,3,4,5 ]

var[primeroPosicion, dos] = arreglo;
console.log(primeroPosicion);
console.log(2);

/**
 * 
 *  Operador de miembro o acceso de propiedad
 */

// Notacion punto
var persona ={
    nombre: 'Luis',
    apellido: 'Montes'
}
console.log(persona.nombre);
console.log(persona.apellido);

// Notacion por corchetes
var persona ={
    nombre: 'Luis',
    apellido: 'Montes'
}
console.log(persona['nombre']);

// Notacion por corchetes en arreglos
var arreglo = [ 21,22,23,24,25,26]    /// Recuerda que en los arreglos se parte desde 0
console.log(arreglo[0]);

// Operacion de determinacion de tipo ( typeof )
console.log(typeof 'Luis ');
console.log(typeof 21);
console.log(typeof true);