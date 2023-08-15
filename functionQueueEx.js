let FunctionQueue = [];

function fun1() { console.log("Fun1"); }
function fun2(x, y) { console.log(`${x} + ${y}`); }

FunctionQueue.push(fun1);
FunctionQueue.push(fun2);
FunctionQueue.push(1);
FunctionQueue.push(4);

console.log(FunctionQueue);

(FunctionQueue.shift())();

(FunctionQueue.shift())(FunctionQueue.shift(), FunctionQueue.shift());

console.log(FunctionQueue);