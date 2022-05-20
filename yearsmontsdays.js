//TODO: dado un numero, mostrar cuantos years, meses y dias equivalen 

const daysToYear = (numero) => {
    let residuoyears = numero%365;
    let residuomonths = residuoyears%30;    
    let years = Math.trunc(numero/365);    
    let months = Math.trunc(residuoyears/30);        
    let days = Math.trunc(residuomonths);
    
    return `years: ${years}\nmonths: ${months}\ndays: ${days}`

}

console.log(daysToYear(884));