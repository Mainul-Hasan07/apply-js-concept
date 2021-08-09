// const number = 15;
// const remain = number % 2;
// console.log(remain == 0)


function isEven (number){
    if(number% 2 ==0){
        return true;
    }
    return false;
}
const myNumber = 1641;
const isMyNumberEven = isEven(myNumber);
console.log(isMyNumberEven);

const herNumber = 1892;
const isHerNumber = isEven(herNumber);
console.log(isHerNumber);

function isOdd(number){
    if(number % 2 !=0){
        return 'odd number';
    }
    return false;
}

const isMyNumberOdd = isOdd(myNumber);
console.log(isMyNumberOdd);

const isHerNumberOdd = isOdd(herNumber)
console.log(isHerNumberOdd);