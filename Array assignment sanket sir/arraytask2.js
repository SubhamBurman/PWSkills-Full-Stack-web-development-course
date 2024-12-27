// Write a JavaScript function that takes an array of numbers and returns the sum of the squares of
// those numbers, using reduce .

let arr = [2,7,4,9,3,7,6];

function sumOfSquares(arr) {
    let sum = arr.reduce( (accumulator,currentValue)=>{
        return accumulator + currentValue*currentValue;
    },0)
    return sum;
}

console.log(sumOfSquares(arr));

