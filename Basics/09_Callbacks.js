/**
 * Call backs
 */
// Son funciones que pasan como parametros a otras funciones parq ue estas una vez finalizadas sus tareas ejecuten la funcion enviada como parametros 

const suma = (a,b, cb ) => {
    cb(a+b)
}

var resultado =suma(1,2,(resultado) =>{
    console.log(resultado);
});

const getData = (cb) => {
    if(false){
    setTimeout(() =>{
        cb({
            nombre: 'Luis',
            apellido: 'Montes',
    });
    }, 3000);
    }else {
    cbError(new Error('No se pudo obtener los datos'))
    }
};
const imprimirData = (data) => console.log(data);
const errorHandler = (error) =>console.log(error);

getData(imprimirData, errorHandler);