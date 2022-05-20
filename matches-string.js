//TODO: Dada una palabra, buscarla en una frase y devolver cuantas veces aparece

//Solucion de chrystian el tryhard

const wordCounter = (cadena, termino) => {
    const trimeado = cadena.split(' ');
    let contador = 0;    
    for(let el of trimeado){
        if( el === termino ){
            contador++;
        }
    }
    return `la palabra: ${termino} aparece ${contador} veces`
}

// console.log(wordCounter('hola perro cara de rana y de perro', 'perro'));


//solucion de victor robles

const cuentaPalabras = (cadena, termino) => {
    let trimeado = cadena.toLowerCase().replace(/[!?,.-]/gi,'');
    let resultado = 0;
    if(trimeado.includes(termino)){
        let palabras = trimeado.split(' ');
        let mapa = {};

        for(let palabra of palabras){
            if(mapa[palabra]){
                mapa[palabra]++;
            }else{
                mapa[palabra] = 1;
            }
        }
        resultado = mapa[termino];
    }else{
        resultado = 0;
    }
    return `la palabra: ${termino} aparece ${resultado} veces`;

}

console.log(cuentaPalabras('perro hola como perro estas', 'perro'));