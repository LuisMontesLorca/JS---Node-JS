// 1

var dia = 'sa'
if(dia === 'lunes'){
    console.log('Monday');
}else if(dia === 'martes'){
    console.log('Tuesday');
}else if(dia === 'miercoles'){
    console.log('Wednesday');
}else if(dia === 'jueves'){
    console.log('Thursday');
}else if(dia === 'viernes'){
    console.log('Friday');
}else if(dia === 'sabado'){
    console.log('Saturday');
}else if(dia === 'domingo'){
    console.log('Sunday');
}else{
    console.log('Por favor, ingrese un dia de la semana!');
}


var dia = 'lunes'
switch(dia){
    case 'lunes':
        console.log('Monday');
        break; 
    case 'martes':
        console.log('Tuesday');
        break;  // el break frena la ejecucion de los casos 
    case 'miercoles':
        console.log('Wednesday');
        break;  //
    case 'jueves':
        console.log('Thursday');
        break;  //
    case 'viernes':
        console.log('Friday');
        break; 
    case 'sabado':
        console.log('Saturday');
        break;
    case 'domingo':
        console.log('Tuesday');
        break; //
    default:
        console.log('Por favor, ingrese un dia de la semana!');
    }

    // 2

var totalCompra = 50
if(totalCompra<=10){
    totalCompra = totalCompra +3
    console.log(totalCompra);
}else if(totalCompra<=20 && totalCompra>10){
    totalCompra = totalCompra + 5
    console.log(totalCompra);
}else if(totalCompra<=50 && totalCompra>20){
    totalCompra = totalCompra + 7
    console.log(totalCompra);
}else if(totalCompra>50){
    totalCompra = totalCompra
    console.log(totalCompra);
}else{
    console.log('El monto ingresado no es valido');
}
