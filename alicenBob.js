// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */
    const arrayA = [17,28,30];
    const arrayB = [99,16,8];
    


function compareTriplets(a, b) {
    // Write your code here
    let res = [0,0];
    if(arrayA[0]<arrayB[0]){
        res[1]++;
    }else if(arrayA[0]>arrayB[0]){
        res[0]++;
    }
    if(arrayA[1]<arrayB[1]){
        res[1]++;
    }else if(arrayA[1]>arrayB[1]){
        res[0]++;
    }
    if(arrayA[2]<arrayB[2]){
        res[1]++;
    }else if(arrayA[2]>arrayB[2]){
        res[0]++;
    }
    
    return res;    

}

console.log(compareTriplets(arrayA,arrayB));

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

//     const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

//     const result = compareTriplets(a, b);

//     ws.write(result.join(' ') + '\n');

//     ws.end();
// }
