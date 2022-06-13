//TODO: dado un texto, comprobar que sea un email valido.

//comprobacion basica mediante expresion regular

const esEmailValido = (email) => {
    return /^\w+@\w+\.\w+$/gi.test(email);
}


console.log(esEmailValido('hdhhas@dk.com'));