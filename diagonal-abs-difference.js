const arrr = [[5,2,8],[14,5,3],[5,11,9]];


const diagonalDifference = (arr) => {
    // Write your code here
    let sum = 0;
    for(var i = 0; i <= arr.length - 1; i++){
        sum += arr[i].reverse()[i];
    }
    return Math.abs(sum);
}

console.log(diagonalDifference(arrr));


