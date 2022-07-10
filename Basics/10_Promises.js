/**
 * Promesas
 */

// Nos ayudan a controlar funciones asincronas dentro de javascript y nos ayudan a verificar si se obtienen los datos y si no, nos entrega call back con error

const getData= (error) => new Promise((resolve, reject) =>{  /// es una funcion que retorna una promesa
    if(!error){
        setTimeout(() => {
            resolve({
                nombre: 'Luis',
                apellido: 'Montes',
            });            
        }, 3000);
    } else{
        reject('No pudimos obtener los datos');
    }
    });

const getData2= (error) => new Promise((resolve, reject) =>{  /// es una funcion que retorna una promesa
    if(!error){
        setTimeout(() => {
            resolve({
                nombre: 'Nicolas',
                apellido: 'Montes',
            });            
        }, 3000);
    } else{
        reject('No pudimos obtener los datos de data 2');
    }
    });
console.log("incio");
getData(false)
    .then((data) => {
        console.log(data);
        return getData2(true)
    })
    .then((data) => {      /// promesas anidadas, se retornan y luego se crea la siguiente 
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
});
console.log("fin");

const main = async () =>{
    try{
        let resultado = await getData(false)
        let resultado2 = await getData2(false)
        console.log(resultado);
        console.log(resultado2);
    }catch(error){
        console.log(error);
    }

}





const suma = new Promise ((res, rej) => {
    if(true){
        res()
    }
})
