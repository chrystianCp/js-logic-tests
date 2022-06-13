//TODO: dado un texto devolver cuantas consonante y cuantas vocales tiene

const vocalConsonante = (cadena) => {

    let trimeado = cadena.replace(/[\s!?,.-]/gi,'').split('').join('');
    let vocales = trimeado.match(/[a,e,i,o,u]/gi).length;
    let consonantes = trimeado.length - vocales;


    return `Su cadena incluye ${vocales} vocales, y ${consonantes} consonantes`;
}

console.log(vocalConsonante('hola como e.st-as!'));