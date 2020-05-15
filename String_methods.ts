var str : string = "krupa"

console.log("length of string: " + str.length)
console.log("char at position 2: " + str.charAt(2))
console.log("unicode value of potition value: " + str.charCodeAt(2))
console.log("index of specific value: " + str.indexOf("u"))
console.log("match() ->  method used to match regular expression with string")
console.log("replace() -> Used to find a match between a regular expression and a string, and to replace the matched substring with a new substring.")

console.log("slice() in string")
var str2 = "Apples are round, and apples are juicy."; 
var sliced = str2.slice(3, -2); 
console.log(sliced);

console.log("split() in string")
var str3 = "Apples are round, and apples are juicy."; 
var splitted = str3.split(" ", 3); 
console.log(splitted)

console.log("substring() in string")
var str4 = "Apples are round, and apples are juicy."; 
console.log("(1,2): "    + str4.substring(1,2)); 
console.log("(0,10): "   + str4.substring(0, 10)); 
console.log("(5): "      + str4.substring(5));

console.log("toUpperCase : " + str.toUpperCase())

var str5 : string = "KruPA"
console.log("toLowerCase : " + str5.toLowerCase())