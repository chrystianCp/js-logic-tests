//TODO: Dado un array de numeros devolver el array sin duplicados
//si hay un string eliminarlo del array

const arrr = [1,2,3,3,2,'hola',4,5];

const arrCleaner = (arr) => {
    const arrdata = new Set(arr);
    let result = [...arrdata];
    return result.filter(el=> typeof el === 'number');    
}

console.log(arrCleaner(arrr));