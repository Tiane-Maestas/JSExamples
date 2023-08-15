// This raises and event on keypress.
var tty = require('tty');
var keypress = require('keypress');
keypress(process.stdin);
process.stdin.on("keypress", HandleInput);
if (typeof process.stdin.setRawMode == 'function') {
    process.stdin.setRawMode(true);
} else {
    tty.setRawMode(true);
}
process.stdin.resume();

// This will only raise event on submit a line of data.
// let stdin = process.openStdin();
// stdin.addListener("data", HandleInput);

function HandleInput(input) {
    input = input.toString();
    console.log("You entered: [" + input + "]");
    if(input.charCodeAt(0) == 3){ process.exit(0);}
    if(input.charCodeAt(0) == 13){ console.log("Enter"); }
    console.log(input.charCodeAt(0));

    let motorState = Number(input[0]);
}

function delayEx1(time) {
    return new Promise(resolve => {setTimeout(resolve, time); });
}

Test();

async function Test(){
    await delayEx1(2000);
    Test();
}