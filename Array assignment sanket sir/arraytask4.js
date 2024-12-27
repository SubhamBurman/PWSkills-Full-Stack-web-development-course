// Create a function that takes an array-like object with numeric keys and transforms it into a proper
// array. For example, {0: 'a', 1: 'b', 2: 'c', length: 3} should be transformed into ['a',
// 'b', 'c'] .

const arrayLike = {0: 'a', 1: 'b', 2: 'c', length: 3};

function realArray(arrayLike){
    return Array.from(arrayLike);
}
console.log(realArray(arrayLike));
