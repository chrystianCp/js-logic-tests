const arrr = [50,9,30,5,45];
const arrrr = [10,50,11,70,2];

console.log(arrr.slice(-1));
const maxBenefit = (arr) => {
    let benefit = 0;
    let res = 0    
    let arrlength = -4;
    let compra = 0;
    let venta = 0;
    
    for(let el of arr){                     
        if(arrlength!==0){
            let arrResto = arr.slice(arrlength++);
            for(let ell of arrResto){
                if(el < ell){                        
                    res = ell - el;
                    if(res>benefit){
                        benefit=res
                        compra = el;
                        venta = ell;
                    }
                }
            }        
        }        
    }
    return `Se compro a ${compra} y se vendio a ${venta} el beneficio fue de ${benefit}`;   
}

console.log(maxBenefit(arrrr));
console.log(maxBenefit(arrr));
