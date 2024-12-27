// Implement a custom function customMap that mimics the behavior of the JavaScript
// Array.prototype.map method. It should not use the built-in map method and should work as
// expected when tested with an array
const arr = [4,7,3,88,9,54];

function customMap(arr,cb){
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(cb(arr[i]));
        
    }
    return result
    
};

function cb(e){
    return e*e;

}

console.log(customMap(arr,cb));

