//TODO: Dado un numero imprimir escalones de n [-]

const escalera = ( numero ) => {
    let dibujo = '';
    
    for (let i = 1; i <=numero; i++) {        
        let content = '';        
        for(let j = 1; j <= numero-i ; j++){
           content += ' ';                       
        }
        for(let k=0; k<+i;k++){
            content += '#';
        }
        dibujo += content + '\n';        
    }
    return dibujo;
}

escalera(5);



// const escalera = ( numero ) => {
//     let dibujo = '';
//     for (let i = 1; i <=numero; i++) {        
//         let content = '';        
//         for(let j = 1; j <= i; j++){
//            content += '[-]';            
//         }
//         dibujo += content + '\n';        
//     }
//     return dibujo;
// }

// console.log(escalera(5));