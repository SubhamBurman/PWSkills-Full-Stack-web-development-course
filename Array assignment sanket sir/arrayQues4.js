// Check if an array contains a specific value:

const arr = [4,5,3,88,3,6,48,44,75];

function numberFinder(arr,no){
    if (arr.includes(no)) {
        console.log(no, 'is available');
        
    } else {
        console.log(no, 'not available');
    }
}

numberFinder(arr, 88)

