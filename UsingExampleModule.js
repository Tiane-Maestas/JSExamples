let mod = require("./ExampleModule/ExampleModule.js");

console.log(mod.MathHelper.pi);
console.log(mod.MathHelper.Square(2));
mod.Hi();

let err = require("./Function.js"); // First 'Error!' comes from here.

err.LogErr();
