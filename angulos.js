//TODO: dado un numero determinar que tipo de angulo es 
//agudo<90 recto===90 obtuso>90 
//llano ===180 concavo > 180 completo === 360

const angulos = (n) => {
    let res = '';
    if(n===90){res = 'recto'}
    else if(n===180){res='llano'}
    else if(n===360){res='completo'}
    else if(n>=0&&n<90){res='agudo'}
    else if(n>90&&n<180){res='obtuso'}
    else if(n>180&&n<360){res='concavo'}
    else{res='ingrese un numero entre 1 y 360'}
    return res;
}

console.log(angulos(90))