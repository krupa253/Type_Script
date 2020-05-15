function factorial ( A : number ) {
    var f : number = 0

    if ( A <= 1 ) {
        return 1;
    }

    if ( A > 1 ) {
        f += A * factorial(A-1)
    }

    return f;
}

console.log( factorial( 5 ) )