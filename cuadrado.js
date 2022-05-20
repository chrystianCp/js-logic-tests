// TODO: Dibujar un cuadrado hueco con asteriscos

const recto = (n_veces) => {
    let content = '';
    for(let i = 0;i < n_veces;i++){
        content += '* '
    }
    return content;
}

const cuadrado = (n_veces) => {
    let dibujo = '';
    let content = '';
    dibujo += recto(n_veces)+'\n';
    for(let i = 0; i < n_veces-2; i++){
        content = '* ';
        for(let j = 0; j < n_veces-2; j++){
            content += '  ';
        }
        content += '* ';
        dibujo += content + '\n';    
    }
    dibujo += recto(n_veces);

    return dibujo;
}

// console.log(recto(3));
console.log(cuadrado(10));