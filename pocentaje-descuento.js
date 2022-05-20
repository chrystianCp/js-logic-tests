//TODO: queubo no se me olvido apa
//cuanto es el x por ciento de x numero ;

const tantoPorciento = (porcentaje, valor) => {
    return valor * (porcentaje/100);
}
console.log(tantoPorciento(43,897));

const descuento = (porcentaje, valor) => {
    return valor = valor * ((100 - porcentaje) /100) ;
}

console.log(descuento(20,100));