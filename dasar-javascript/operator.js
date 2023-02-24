// Contoh operator 

// ASSIGMENT OPERATOR
let x = 10;
let y = 5

x += y; // artinya -> x = x + y;
x -= y; // artinya -> x = x - y;
x *= y; // artinya -> x = x * y;
x /= y; // artinya -> x = x / y;
x %= y; // artinya -> x = x % y;
console.log(x);

// COMPARISON OPERATOR
let a = 10;
let b = 12;

console.log(a < b);
console.log(a > b);

/* output
true
false
*/

const aString = '10';
const aNumber = 10

console.log(aString == aNumber) // true, karena nilainya sama-sama 10
console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda

/* output
true
false
*/

// LOGICAL OPERATOR

let c = 10;
let d = 12;

/* AND operator */
console.log(c < 15 && d > 10); // (true && true) -> true
console.log(c > 15 && d > 10); // (false && true) -> false

/* OR operator */
console.log(c < 15 || d > 10); // (true || true) -> true
console.log(c > 15 || d > 10); // (false || true) -> true
