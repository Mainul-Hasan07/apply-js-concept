// function getFactorial(number){
//     let factorial = 1;
//     let i = 1;
//     while( i <= number){
//         factorial = factorial * i;
//         i++;
//     }
//     return factorial;
// }
// const factorialResult = getFactorial(5);
// console.log(factorialResult);

function getFactorial(number){
    let factorial = 1;
    let i = number;
    while(i >= 1){
        factorial = factorial * i;
        i--;
    }
    return factorial;
}
const factorialResult = getFactorial(5);
console.log(factorialResult);

function getFactorial2(number2){
    let factorial = 1;
    for(let i = number2; i >= 1; i--){
        factorial = factorial * i;
    }
    return factorial;
}
let factorialResult2 = getFactorial2(5);
console.log(factorialResult2);