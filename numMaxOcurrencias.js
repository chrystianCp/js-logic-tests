//TODO: Dado un array o un texto, devolver el elemeno o palabras
// que mas aparecen 

const arr = [1,2,3,4,5,2,6,1,5,7,6,4,2];
const cadena = 'hola perro como estas tu perro';



const elementRepeated = (data) => {
    let mapa = {};    
    let maxProp = '',valor=0;

    if(typeof data === 'string'){
        data = data.split(' ');
    }

        for(let el of data){
            if(mapa[el]){
                mapa[el]++;
            }else{
                mapa[el] = 1;
            }
        }        
    
    for(let element in mapa){
        if(mapa[element] > valor){
            valor = mapa[element];
            maxProp = element;
        }
    }
    
    return `El dato mas repetido es '${maxProp}' con ${valor} ocurrencias`
}



console.log(elementRepeated(cadena));