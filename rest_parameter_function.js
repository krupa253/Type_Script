function sum() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var i = 0;
    var sum = 0;
    for (i; i < num.length; i++) {
        sum = sum + num[i];
    }
    return sum;
}
var A = sum(10, 20, 30, 44, 55);
console.log(A);
