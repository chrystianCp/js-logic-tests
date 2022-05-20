//TODO: Dado un numero, devolver su tabla de multiplicar completa.

// const base = prompt('tabla del > ?');


const multiplicar = ( base ) => {
    let result = `==Tabla del ${base}==\n`;    
    for (let i = 1; i <= 10; i++) {
        const row = i * base;
        result += (`|  ${i} x ${base} = ${row}  |\n`);    
    }
    return result;
}
console.log(multiplicar(7));



    



