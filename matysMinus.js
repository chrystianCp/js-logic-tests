

const mayusMinus = (cadena) => {
    let mayusculas = 0;
    let minusculas = 0;
    let res = '';
    for(let letra of cadena){
        if(/[A-Z]/.test(letra)){
            mayusculas++;
        }else{ minusculas++; }        
    }
    if(mayusculas > minusculas){
        res = cadena.toUpperCase();
    }else{ res = cadena.toLowerCase(); }
    
    return  res;
}


console.log(mayusMinus('holA Perro Como TU estaS'));