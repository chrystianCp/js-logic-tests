
const arrr = [1,2,3,4,5];

function miniMaxSum(arr) {
    // Write your code here
    let max = 0;    
    let sum = 0;
    let resmin = 0;
    let resmax = 0;

    for(let el of arr){
        sum += el;
        if(el > max){
            max = el;
        }
    }
    let min = max;
    for(let el of arr){             
        if(el < min){
            min = el;
        }
    }
    resmin = sum - max;
    resmax = sum - min;

    console.log(resmin, resmax)    
    
}

console.log(miniMaxSum(arrr));