//TODO: Dado una cadena de texto, comprobar si es un palindromo o no. 

const palindromo = ( termino ) => {

    const inverso = termino
                    .split(' ')         //separa los espacios
                    .join('')           //y juntas los elementos del string
                    .split('')          //ahora si separas
                    .reverse()          //inviertes
                    .join('');          // y unes para comprobar si es igual

    const trim = termino.split(' ').join('');      // trimeas espacios dentro de la cadena no solo los extremos para comparar los values

    return (inverso === trim) 
        ? console.log('palindromo en efecto')
        : console.log('ni de conia crack');
    
}




palindromo('anita lava la tina');