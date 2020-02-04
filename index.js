
/*----------------------Actividad 2 ------------*/

// inciso 1
var mes = 10;



// inciso 2 


if(mes===12 || mes>=1 && mes<=2){

    console.log('Es Invierno');
    document.write('Es Invierno')

}else if(mes>=3 && mes<=5){
       
    console.log('Es Primavera');
    document.write('Es Primavera')
    
}else if(mes>=6 && mes<=8){

    console.log('Es Verano');
    document.write('Es Verano')

}else if(mes>=9 && mes<=11){
    
    console.log('Es Otoño');
    document.write('Es Otoño')

}else{
    
    console.log(`${mes} no es un numero de mes valido`);
    document.write(`${mes} no es un numero de mes valido`)
}


// inciso 3 

const nombre= 'Gustavo';
const id= 20000204 ;

document.write(`</br> Hola, mi nombre es ${nombre} 
                y </br> mi numero de carné es: ${id} `);

