//TODO: dado un numero devolver su factorial
// 1 * 2 * 3 * 4 * 5

const factorial = (numero) => {
    let res = 1;    
    for(let i = 1; i <= numero; i++){
        res *= i;       
    }    
    return res;
}

console.log(factorial(5));

//mdn solucion recursiva
const factor = (n) => {
    if ((n === 0) || (n === 1))
    return 1;
  else  
    return (n * factor(n - 1));
}

// console.log(factor(5));

//solucion victor robles

