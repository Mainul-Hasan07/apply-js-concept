function isLeapYear(year){
    if((year % 4 == 0) && (year%100 != 0) || (year % 400== 0)){
        return true;
    }
    return false;
    // return new Date(year,1,29).getDate () ===29;
}
const myYear =1800;
const isMyYearLeapYear = isLeapYear(myYear);
console.log(isMyYearLeapYear);

const yourYear = 2244;
const isYourYearLeapYear = isLeapYear(yourYear);
console.log(isYourYearLeapYear);