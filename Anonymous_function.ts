console.log("Functions that are not bound to an identifier (function name) are called as anonymous functions ..")

var hello = function (){
    return "Hello World!!!"
}

console.log(hello())

var result = function(a , b){
    return (a+b)
}

console.log(result(20,30))