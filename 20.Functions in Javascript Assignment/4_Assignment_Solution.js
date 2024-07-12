/*
Q4. Write a JavaScript function called calculateTax that takes an income as an argument 
and returns the amount of tax to be paid. Use a closure to handle different tax rates 
based on income ranges. Test the function with various incomes.
*/


function calculateTax(inc, tax){
    return inc * tax;

}

function income(i) {

    if (i<=50000) {
        return calculateTax(i,0.10);
        
    }
    
    else if (i>50000 && i<=100000) {
        return calculateTax(i,0.20)
    }
    else {
        return calculateTax(i,0.30)
    }
}

console.log(income(75040));