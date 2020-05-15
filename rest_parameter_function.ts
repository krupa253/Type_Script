function sum(...num : number[]) {
    var i : number = 0;
    var sum = 0;

    for( i ; i <num.length ; i++ ){
        sum = sum + num[i];
    }
    return sum;
}

var A = sum(10,20,30,44,55);
console.log(A);