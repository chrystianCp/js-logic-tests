//TODO: dado un texto y una busqueda censurar todas las coincidencia de la busqueda con [-censurado-];

const censurar = (cadena, busqueda) => {
    resultado = '';

    if( !cadena && !busqueda ){
        resultado ='La cadena y el termino de busqueda son obligatorios';
    }else if( cadena && !busqueda ){
        resultado = 'El termino de busqueda es obligatorios';
    }else if( !cadena && busqueda ){
        resultado = 'El termino de busqueda es obligatorio';
    }else if( cadena && busqueda ){
        resultado =  cadena.replace(new RegExp(busqueda, 'gi'), '[-censored-]');
    }
    return resultado;
}

console.log(censurar('hola perro como tu perro estas', 'perro'));