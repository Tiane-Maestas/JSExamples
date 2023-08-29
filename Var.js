// Always use let because it has no hoisting.
// console.log(a); // Doesn't work and causes an error.
let a = "let";
console.log(a);

console.log(b); // Doesn't cause and error bc of hoisting but isn't assigned yet.
var b = "var";
console.log(b);

// Short-circuit example.
let x = false;
x && console.log("Here");