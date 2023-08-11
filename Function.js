// Function Hoisting puts all functions at the top of the stack frame.
LogError();

function LogError() {
    console.log("Error!");
}

module.exports.LogErr = LogError;