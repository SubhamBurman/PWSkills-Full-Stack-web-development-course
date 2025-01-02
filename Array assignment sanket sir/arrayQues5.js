// Remove duplicates from an array

const array = [3,5,8,67,55,55,6,3,7,56]

function dublicateRemover(arr){
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (!newArray.includes(arr[i])) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

console.log(dublicateRemover(array));
