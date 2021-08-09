//Inch to Feet
function inchToFeet(number){
    
}
//factorial
let factorial = 1;
for(let i = 1; i <= 5; i++){
    factorial = factorial * i;
}
console.log(factorial);

//factorial with function

function getFactorial(number){
    let factorial = 1;
    for( let i = 1; i <= number; i++){
        factorial = factorial * i;
    }
    return factorial;
}
let factorialResult = getFactorial(10);
console.log(factorialResult);