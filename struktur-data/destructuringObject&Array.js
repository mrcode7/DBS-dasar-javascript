// Sebelum ES6
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
 
const firstName = profile.firstName
const lastName = profile.lastName
const age = profile.age
 
console.log(firstName, lastName, age)
 
/* output:
John Doe 18
*/

// Desctructuring Object

// const profile = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 18
// }
 
// const {firstName, lastName, age} = profile;
 
// console.log(firstName, lastName, age);
 
/* output:
John Doe 18
*/

// Desctructuring Object dengan assignment ke variable baru

// const profile = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 18
// }

// const {firstName: first, lastName: last, age: umur} = profile;

// console.log(first, last, umur);

/* output:
John Doe 18
*/

// Desctructuring Array

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
const [firstFood, secondFood, thirdFood, fourthFood] = favorites;
 
console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);
 
/* output:
Seafood
Salad
Nugget
Soup
*/

// const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
// const [, , thirdFood ] = favorites;
 
// console.log(thirdFood);
 
/* output:
Nugget
*/

// Desctructuring Function Arguments

var a = 1;
var b = 2;
var temp;
 
console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
temp = a;
a = b;
b = temp;
 
console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
/* output
Sebelum swap
Nilai a: 1
Nilai b: 2
Setelah swap
Nilai a: 2
Nilai b: 1
*/