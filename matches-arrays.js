
//TODO: Dados dos arrays, devolver un array con los elementos comunes entre amos 

array1 = ['perro', 'gato', 'colibri','paloma', 'gallon'];
array2 = ['perro', 'lince', 'chimpance','raton', 'gallon'];

const matchesArray = (arr1, arr2) => {

    coincidencias = [];
    const filtrado = arr1.filter( el => {
        return arr2.includes(el);
    });
    return filtrado;
}

console.log(matchesArray(array1,array2));