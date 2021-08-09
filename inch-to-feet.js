function inchToFeet(inch){
    var feet = inch/12;
    return feet;
}

var myInches = 132;
var feet = inchToFeet(myInches);
console.log(feet);

var dadiInches = 144 ;
var feet = inchToFeet(dadiInches);
console.log(feet);

var naniInches = 152;
var feet = inchToFeet(naniInches);
console.log(feet);



//mile to kilo
function mileToKilo(miles){
    var km = miles * 1.60934;
    return km;

}
var marathon = mileToKilo(26.2);
console.log(marathon);

