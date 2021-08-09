// let factorial = 1;
// for(let i = 1; i <= 5; i++){
//     factorial = factorial * i;
// }
// console.log(factorial);

function factorial(number){
    let fact = 1;
    for(let i = 1; i <= number; i++){
        fact = fact * i;
    }
    return fact;
}
var getFactorial = factorial(10);
console.log('Factorial of is ',getFactorial)