var globle_num : number = 50    //global variable

class Numbers{
    class_num = 20  //class variable
    static static_num = 30  //static variable
    DisplayNumber(): void{
        var local_num : number = 10     //local variable
        console.log("Local variable is:" + local_num)
    }
}

console.log("Global variable is:" + globle_num)
console.log("Static variable:" + Numbers.static_num)
var numobj = new Numbers()
console.log("Global varible (from class): " + numobj.class_num)
numobj.DisplayNumber()
