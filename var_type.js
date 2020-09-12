var age = 31;
var MaxAge = 70;
var NumCupsDay = 2;
var TotalNeeded = (NumCupsDay * 365) * (MaxAge - age);
var MessageTotal = "You will need" + " " + TotalNeeded + " " + "cups of coffe to last you until the ripe old age of" + " " + MaxAge;
console.log(MessageTotal);
function check_numbers(a, b, c) {
    return (a >= 60 && a <= 99) || (b >= 60 && b <= 88) || (c >= 60 && c <= 99);
}
console.log(check_numbers(60, 90, 99));
console.log(check_numbers(120, 150, 200));
