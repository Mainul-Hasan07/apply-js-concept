var time = '10:15pm';
var bookPrice = 230;
var isWhite = false;


// array
var partners = ['sajid', 'mojid', 'nojid', 'lajit'];
var elementConut = partners.length;
var nojidIndex = partners.indexOf('nojid');
partners.push('kajit');
partners.pop();

// conditionals
if(bookPrice < 120){
    console.log('I will this book');
}
else{
    console.log('Mama, kichu discount den na , apni amar na amar mama');
}

// loop
var i = 0;
while(i <= 17){
    i++;
}

for(var i = 0; i<= 17; i++){
    // write something
}

function isMoonUp(time){
    if (time >=19 && time<=5){
        return true;
    }
    return  false;
}

var moonStatus = isMoonUp(21);
console.log(moonStatus);


//let const
let price = 29;
let myName = 'Bamgladesh';
myName = 22; 
console.log(myName);
