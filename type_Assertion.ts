console.log("TypeScript allows changing a variable from one type to onther...")
console.log("This is called as Type Assertion...")

var str1 : string = "123"
var str2 : number = <number> <any> str1
console.log(str2)
console.log(str1)