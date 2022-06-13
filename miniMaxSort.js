//  TODO: Dado un arr devolver max y minimo
const arrr = [1,5,5,4,74,65,67,65,14,55,100,21,14,78,31,45,6,34,2];

const miniMax = (arr) => {
    let max=0, min = 0;
    for(let el of arr){        
        if(el > max){
            max = el;
        }
    }
    min = max;
    for(let el of arr){             
        if(el < min){
            min = el;
        }
    }
    return {
        min,
        max        
    }
}

const altoBajo = (arr) => {
    arr.sort((a,b) => a - b);
    return {min: arr[0],max:arr[arr.length-1]}      
}

console.log(altoBajo(arrr));
