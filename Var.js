// Always use let because it has no hoisting.
// console.log(a); // Doesn't work and causes an error.
let a = "let";
console.log(a);

console.log(b); // Doesn't cause and error.
var b = "var";
console.log(b);