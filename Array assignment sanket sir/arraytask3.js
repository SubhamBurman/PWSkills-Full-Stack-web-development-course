// Using filter and reduce , write a function that takes an array of objects with properties name
// and value and returns the sum of the values of objects whose name property starts with the letter
// ‘a’ or ‘A’.


let fruitsRate = [{name:'apple', value:200},{name:'banana', value:40},{name:'orange', value:180},{name:'Anaras', value:300},{name:"Amazon Grapes", value:600}]

function sumOfFruitsRate(fruitsRate) {
    let sum = fruitsRate.filter((names)=>{
        return names.name[0] == 'a' || names.name[0] == 'A';
    }).reduce((accumulator,currentValue)=>{
        return accumulator + currentValue.value;
    },0)
    return sum
}


console.log(sumOfFruitsRate(fruitsRate));
