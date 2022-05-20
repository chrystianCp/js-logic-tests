//TODO: dado un numero indicar si es un numero capicua o no.

const capicua = (numero) => {
    let inverso = parseInt(numero                
                    .toString()
                    .split('')
                    .reverse()
                    .join(''));        
    return (inverso === numero)
        ? true
        : false
}

console.log(capicua(1001));

