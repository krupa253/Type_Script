var globle_num = 50; //global variable
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.class_num = 20; //class variable
    }
    Numbers.prototype.DisplayNumber = function () {
        var local_num = 10; //local variable
        console.log("Local variable is:" + local_num);
    };
    Numbers.static_num = 30; //static variable
    return Numbers;
}());
console.log("Global variable is:" + globle_num);
console.log("Static variable:" + Numbers.static_num);
var numobj = new Numbers();
console.log("Global varible (from class): " + numobj.class_num);
numobj.DisplayNumber();
