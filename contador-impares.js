//TODO: dados dos numeros devolver cuantos numeros IMPARES hay entre ellos

const impares = (val1, val2) => {
    let res = '';
    let contador = 0;
    for (let i = val1; i <= val2; i++) {
        if(i%2 !== 0){
            res += i + '\n';
            contador++;
        }
    }
    return res + '\n'+ 'Numeros impares: '+contador;
}
console.log(impares(1,100));