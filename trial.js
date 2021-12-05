let a = 5
let b = 60
let c = 100

if( a > b && a > c && b > c ) { console.log( a, b, c)}
if( a > b && a > c && b < c ) { console.log( a, c, b)}
if( a < b && a > c && b > c ) { console.log( b, a, c)}
if( a < b && a < c && b > c ) { console.log( b, c, a)}
if( a > b && a < c && b < c ) { console.log( c, a, b)}
if( a < b && a < c && b < c ) { console.log( c, b, a)}
