/**
 * Manipulacion Arreglos
 */

// ForEach
var letras = ['a', 'b', 'c', 'd', 'e'];

console.log(letras);

//for (let i = 0; i < letras.length; i++) {
//    const element = letras[i]
  ///  console.log(element);
//}

letras.forEach((elemento)=> console.log(elemento))

// push -- shift -- pop

var letras = ['a', 'b', 'c', 'd', 'e'];   // agrega un elemento al arreglo 
letras.push('f');
console.log(letras);

var primerElemento = letras.shift()  //  almacena el primer elemento del arreglo pero modifica el arreglo eliminandolo, se puede llamar desde la variable creada
console.log(letras);
console.log(primerElemento);

var ultimoElemento = letras.pop() //  almacena el ultimo elemento del arreglo, cumple la misma condicion que shift
console.log(letras);
console.log(ultimoElemento);

// map    -- metodo inmutable

var estudiantes = ['Luis', 'Diego', 'Juan', 'Martin', 'Rafael'];  // map Cambia los elementos del arreglo para transformarlos a conveniencia
var asistencia = estudiantes.map((nombre) => {
    return{    /// map retorna el elemento modificado 
        nombre: nombre,
        asistencia: false
    }
})
console.log(estudiantes);
console.log(asistencia);


var estudiantes = ['Luis', 'Diego', 'Juan', 'Martin', 'Rafael'];  // map Cambia los elementos del arreglo para transformarlos a conveniencia
var asistencia = estudiantes.map((nombre) => `${nombre}.`)
console.log(estudiantes);
console.log(asistencia);


var productos =[
    {nombre: 'camisetas', precio: '15'},
    {nombre: 'zapatillas', precio: '20'},
    {nombre: 'pantalones', precio: '25'},
]

var productosImpuesto = productos.map((producto) => {
    return  {
        ...producto, // ... hace una copia de las propiedades de producto y se agrega a este nuevo objeto 
        impuesto: .12
    }
})

var precios = productos.map((producto) => producto.precio)
console.log(productos);
console.log(productosImpuesto);
console.log(precios);


// Filter      --- metodo inmutable
var estudiantes = [
    {nombre: 'Luis', edad: 25, matriculado: true},
    {nombre: 'Samuel', edad: 27, matriculado: true},
    {nombre: 'Martin', edad: 26, matriculado: false},
    {nombre: 'Nicolas', edad: 28, matriculado: true},
    {nombre: 'Firulais', edad: 22, matriculado: false},
]

//var filtrado = estudiantes.filter((estudiante) => estudiante.edad >= 26);
var filtrado = estudiantes.filter((estudiante) => estudiante.edad >= 26 && estudiante.matriculado ); // para traer no matriculados debo agregar ===  && estudiante.matriculado = false

console.log(estudiantes);
console.log(filtrado);

// Reduce  -- reduce un arreglo a un solo valor, recibe 2 paramentros, la funcion y un acumulador 

var calificacion = [3,5,9,10,10];
var suma = calificacion.reduce((acumulador, calificacion ) =>  acumulador + calificacion, 0)
console.log(calificacion);
console.log(suma);
console.log(suma / calificacion.length);   /// se divide suma por cada elemento del arreglo,  length = cada elemento del arreglo

var edades =[21, 22, 21, 21, 24, 25, 24, 25]

var resultado = edades.reduce((acumulador, edad) =>{
    if(!acumulador[edad]){
        acumulador[edad] = 1
    } else {
        acumulador[edad] += 1
    }
    return acumulador
},{}) 

console.log(edades);
console.log(resultado);

var ventas = [
    {nombre: 'camiseta', precio: 15, totalVendido: 10},
    {nombre: 'zapatilla', precio: 150, totalVendido: 8},
    {nombre: 'pantalon', precio: 20, totalVendido: 30},
]

var resultado = ventas.reduce((acumulador, producto) =>{ 
    let totalVentas = producto.precio * producto.totalVendido;
    acumulador[producto.nombre] = totalVentas;resultado
    return acumulador;
},{})

console.log(ventas);
console.log(resultado);

var estudiantes = [
    {nombre: 'Luis', edad: 25, matriculado: true},
    {nombre: 'Samuel', edad: 27, matriculado: true},
    {nombre: 'Martin', edad: 26, matriculado: false},
    {nombre: 'Nicolas', edad: 28, matriculado: true},
    {nombre: 'Firulais', edad: 22, matriculado: false}
];

var resultado = estudiantes
.map((estudiante) => estudiante.matriculado)
.reduce((acumulador, item) => {
    if (item){
        acumulador.matriculado +=1
    }else{
        acumulador.noMatriculado +=1
    }
    return acumulador;
},{matriculado: 0, noMatriculado:0 })

console.log(estudiantes);
console.log(resultado);


// some -every

// some
var numeros = [1,3,5,7,9];
var resultados = numeros.some((numero) => numero % 2 === 0);
console.log(resultados);

//every   devuelve true si todos los elementos del array cumplen con la condicion, que en este caso seria numero % 2 === 0
var numeros = [1,2,3,4,5,6,7,8,9,10];
var resultados = numeros.every((numero) => numero % 2 === 0);
console.log(resultados);

// find - findIndex
// find busca un elemento que coincida con cierta condicion y lo retorna, solo uno y el primero que coindica con la busqueda
// findIndex devuelve la posicion del elemento en el array

var clientes =[
    { id:1, nombre: 'Luis'},
    { id:2, nombre: 'Alberto'},
    { id:3, nombre: 'Nicolas'},
    { id:4, nombre: 'Taïel'},
    { id:5, nombre: 'Priscila'}
]
var cliente = clientes.find((cliente) => cliente.id === 1);
var filter = clientes.filter((cliente) => cliente.id === 1);
console.log(clientes);
console.log(cliente);
console.log(filter);

var posicion = clientes.findIndex((cliente) => cliente.id === 1);
console.log(posicion);
console.log(clientes[posicion]);

// Includes   nos ayuda a determinar si en un arreglo existe un elemento en especifico y va a devolver true or false segun corresponda

var mascotas = ['perro', 'gato', 'conejo']
var resultado = mascotas. includes('raton')
console.log(resultado);
console.log('raton'.includes('ra'));
console.log('raton'.includes('ga'));

buscador =(parametro) => {
    let clientes =[
        { id:1, nombre: 'Luis'},
        { id:2, nombre: 'Alberto'},
        { id:3, nombre: 'Nicolas'},
        { id:4, nombre: 'Taïel'},
        { id:5, nombre: 'Priscila'}
    ]
    return clientes.filter((cliente) => cliente.nombre.includes(parametro))
}
console.log(buscador('o'));

// Join     concatena los elementos del arreglo con lo que pongas entre ()  en el ejemplo es , y espacio
var elementos =['aire', 'fuego', 'agua'];
var resultado = elementos.join(', ')
console.log(resultado);

var clientes =[
    { id:1, nombre: 'Luis'},
    { id:2, nombre: 'Alberto'},
    { id:3, nombre: 'Nicolas'},
    { id:4, nombre: 'Taïel'},
    { id:5, nombre: 'Priscila'}
]
//console.log(clientes.join());
var csvGenerator = (array, separator=',') => {
    let headers = Object.keys(array[0]).join(separator)
    let data = array.map((element) => Object.values(element).join(separator))
    console.log(headers);
    data.forEach(element => console.log(element))
}

csvGenerator(clientes);

//console.log(Object.values({ id:5, nombre: 'Martina'}));
//console.log(Object.keys({ id:5, nombre: 'Martina'}));

// concat - sort - splice - slice

// Concat
var array1 = [1,2,3,4,5];
var array2 = [6,7,8,9,0];
var array3 = array1.concat(array2)
var array4 = [...array1, ...array2]  //  ES LO MISMO QUE EL SPREAD OPERATOR ... 
console.log(array1);
console.log(array2);
console.log(array3);

// Sort
var array1 =[1,2,3,4,5,6,7,8,9,0];
console.log(array1.sort());

var meses = ['Dic', 'Ene', 'Mar', 'Feb'];   // lo ordena en base al codigo ascii
console.log(meses.sort());

var array = [1, 10000, 21, 30, 4];
var ordenado = array.sort((a, b) => a - b ) // para hacerlo descendente seria b - a
console.log(ordenado);

// Splice remueve o modifica elementos de un array o al array en si
var nombres = ['Luis', 'Alberto', 'Nicolas'];
nombres.splice(1, 1, 'Priscila') // elimina todo lo que exista luego de la posicion 1 // el segundo parametro nos indica la cantidad de elementos a eliminar // el tercero reemplaza el elementos
console.log(nombres);

// Slice    // es inmutable
var nombres = ['Luis', 'Alberto', 'Nicolas'];
var resultado = nombres.slice(1, 2); // recibe 2 parametros desde donde quieres cortar y hasta donde quieres cortar el arreglo// no incluye la ultima posicion
console.log(resultado);