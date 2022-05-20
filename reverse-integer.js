//TODO: dada un numero entero, inviertelo y devuelve de nuevo un int

const reverseInteger = (numero) => {    
    let inverso = numero.toString().split('').reverse().join('');    
    return parseInt(inverso);
}

console.log(reverseInteger(31654));