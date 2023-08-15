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

// Input format: "motorState motorFrequency"
function HandleInput(input) {
    input = input.toString();
    console.log("You entered: [" + input + "]");
    if(input.charCodeAt(0) == 3){ process.exit(0);}
    if(input.charCodeAt(0) == 13){ console.log("Enter"); }
    console.log(input.charCodeAt(0));

    let motorState = Number(input[0]);
	// if (!(motorState >= motorStateLowLim && motorState <= motorStateUpLim)){ motorState = 1; }		//motorState default 1
	// console.log('motorState ', motorState) ;	//0:No Command 1:Stop 2:Run
	// motorFz = Number(readlineSync.question('RPM ')) * motorFzScale ;				//Promt motorFz and converts to number
	// if (!(motorFz >= motorFzLowLim && motorFz <= motorFzUpLim)){ motorFz = 0; }			//motorFz deafult 0
	// console.log('motorFz: ', motorFz, '/100 RPM') ;
}

function delayEx1(time) {
    return new Promise(resolve => {setTimeout(resolve, time); });
}

Test();

async function Test(){
    await delayEx1(2000);
    Test();
}