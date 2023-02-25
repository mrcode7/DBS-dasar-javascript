/*
Spread operator dapat digunakan untuk menggabungkan dua buah array ke dalam array baru. 
Jika tidak menggunakan spread operator ini maka hasilnya akan seperti ini:
*/

// tanpa spread operator
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [favorites, others];

console.log(allFavorites);

/* output
[
  [ 'Seafood', 'Salad', 'Nugget', 'Soup' ],
  [ 'Cake', 'Pie', 'Donut' ]
]
*/

// dengan spread operator

// const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
// const others = ["Cake", "Pie", "Donut"];

// const allFavorites = [...favorites, ...others];

// console.log(allFavorites);

/* output
[ 'Seafood', 'Salad', 'Nugget', 'Soup', 'Cake', 'Pie', 'Donut' ]
*/