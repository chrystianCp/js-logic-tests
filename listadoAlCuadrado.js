//TODO: dado un numero, mostrar el listado de los cuadrados de todos
//los numeros naturales hasta llegar al mismo

const listadoAlCuadrado = (n) => {
    let content = '';
    for(let i = 1; i<= n;i++){
        content += `${Math.pow(i,2)} \n`;
    }
    return content;
}

console.log(listadoAlCuadrado(10));