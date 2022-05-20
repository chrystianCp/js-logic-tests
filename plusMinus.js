const arrr = [-4, 3, -9, 0, 4, 1];

const plusMinus = (arr) => {
    // Write your code here
    let plus = 0;
    let minus = 0;    
    let zero = 0;        
    let res = '';
        
    for(let el of arr){
        if(Math.sign(el)===1){
            plus++        
        }else if(Math.sign(el)===-1){
            minus++;
        }else{
            zero++;
        }
    }
    
    res += (plus/arr.length).toFixed(6)+'\n';
    res += (minus/arr.length).toFixed(6)+'\n';
    res += (zero/ arr.length).toFixed(6)+'\n';

    
    
    return res;

}

console.log(plusMinus(arrr));

