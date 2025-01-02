// Find the sum of all elements in an array

function sumOfElements(arr){
    let sum = 0;
    arr.map((e)=>{
        sum += e;
    })
    return sum;
}
const arr = [1,5,66,8,9];

const result = sumOfElements(arr);
console.log(result);
