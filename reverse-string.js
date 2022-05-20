//TODO: a ver pinche virus chingas a tu madre con  el TODO: me la perez prado (*spanish lastname)
//Dada una cadena de texto, darle la vielta e inverir el orden de sus caracteres, sin usar 
//metodos propios del lenguaje solo estructuras de control


//con estructuras de control

const reverseEC = (cadena) => {
    let inverso = '';
    for(let letra of cadena){
        inverso = letra + inverso;
    }
    return inverso;
}
console.log(reverseEC('holaperro'));

//con metodos propios del lenguaje

const reverseString = (cadena) => {
    return cadena.split('').reverse().join('');
}

console.log(reverseString('holaperro'));
