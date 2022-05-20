
//TODO: dado un numero mostrar su serie de fibonnacci;


const fibonnacci = (numero) => {    
    let operando = 0;    
    let base = [0,1];
    for(let i = 1; i < numero; i++){        
        operando = (base[base.length-1]) + (base[base.length-2]);
        base.push(operando);
    }
    return base;
}


console.log(fibonnacci(10));
