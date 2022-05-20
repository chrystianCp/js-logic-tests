//TODO: Dado un numero mostrar los numero desde ese numero al cero de 8 en 8

const decrementoenOcho = (numero) => {
    let res = `--- Del ${numero} al 0 --- \n\n`
    while( numero > 0 ){
        res += `N.- ${numero} + \n`;
        numero -= 8;
    }
    return res + '\n --- Fin ---';
}


console.log(decrementoenOcho(50));
