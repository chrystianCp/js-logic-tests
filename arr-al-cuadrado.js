//TODO: dado un array de numeros devolver otro array con
// sus numeros elevados al cuadrado
const arrr = [1,2,3,4,5,6,7,'hola','perro'];

const elevadocuadrado = (arr) => {
    let res = [];
    arrnumber = arr.filter(el => typeof el === 'number'); 
    for(let el of arrnumber){
        res.push(el*el);
    }    
    return res;
}

// console.log(elevadocuadrado(arrr));

const elevado2 = (arr) => {    
    return arr
            .filter(el => typeof el === 'number')
            .map(el => Math.pow(el,2));        
}

console.log(elevado2(arrr));