//Find the maximum value in an array

const arr = [2,6,76,4,9]

function maximumValue(arr){
    
    arr.sort((a,b)=> b-a)

    return arr[0];
}

 const result = maximumValue(arr);
console.log(result);
