/** ----- My Examples for Promise Functions ----- */
// 'resolve' and 'reject' are two callback functions
function delayEx1(time) {
    return new Promise(resolve => {setTimeout(resolve, time); });
}

function delayEx2(time) {
    return new Promise(function(resolve, reject) { // "(resolve, reject) => {" // This is equivalent syntactically.
        setTimeout(resolve, time);
        setTimeout(reject, time / 2); // The promise is rejected before it is resolved.
    });
}

// Checks if x is 0 after waiting 1 sec.
async function isZero(x) {
    // This just simulates code that will take time.
    await delayEx1(1000);

    return new Promise((resolve, reject) => {

        // Code that takes time should be here...

        if(x == 0)
            resolve("Yes! 'x' is Zero.");
        else
            reject("No! 'x' is NOT Zero.");
    });
}

// ----- Start Example -----
// async function promptAfter1Second() {
//     for(let i = 0; i <= 5; i++) {
//         console.log("Please Wait...")
//         try {
//             await delayEx1(1000);
//             console.log("Times up!");

//             // await delayEx2(1000);
//             // console.log("Times up!");

//             // let response = await isZero(1); // Change input here.
//             // console.log(response);
//         } catch (e) {
//             console.log(`Error! -> ${e}`);
//         }
//     }
// }

// promptAfter1Second();
// ----- End Example -----

/** ----- Below are 2 REST API Example2 ----- */
const axiosRequest = require("axios");

// ----- 'async function' with 'await' example ----- 
// This allows code execution to be directly linear.
// async function requestResponse() {
//     try {
//         let response = await axiosRequest.get('https://www.boredapi.com/api/activity'); // Good Example.
//         // let response = await axiosRequest.get('https://httpstat.us/500'); // Error Example.
//         console.log(`Response: ${response.data.activity}`);
//     } catch (error) {
//         console.log(`Error: ${error}`);
//     }
//     console.log("This code waited for a response.");
// }

// requestResponse();
// console.log("This code kept running without waiting for a response.");
// ----- End Example -----

// ----- '.then' and '.catch' example -----
// axiosRequest
//     .get('https://www.boredapi.com/api/activity')
//     .then(response => {
//         console.log(`Response: ${response.data.activity}`);
//         console.log("This code waited for a response.");
//     })
//     .catch(error => {
//         console.log(`Error: ${error}`);
//     });

// console.log("This code kept running without waiting for a response.");
// ----- End Example -----

/** ----- More Complicated Examples for Async Functions ----- */
StartClient();

async function StartClient() {
    console.log('Client Attempting Connection...') ;
    try {
        let response = await delayEx1(1000);
        console.log(`Client Successfully Connected. ${response}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }

    LogMessages();
    CheckMessages();
}

async function LogMessages() {
    console.log("Starting Log...");
    await delayEx1(1000);
    console.log("Finished Log.");
    let t = "asdfasfkl";
    LogMessages();
}

async function CheckMessages() {
    // console.log("Starting Check...");
    // await delayEx1(1000);
    // console.log("Finished Check.");
    // CheckMessages();

    var stdin = process.openStdin();

    stdin.addListener("data", function(d) {
        // note:  d is an object, and when converted to a string it will
        // end with a linefeed.  so we (rather crudely) account for that  
        // with toString() and then trim() 
        console.log("you entered: [" + d.toString().trim() + "]");
    });
}

/** ----- Proof that recursive async functions don't run out of stack memory if using await. ----- */
// var i = 0;
// async function recursive () {
//     let data = "This string is this long to take up more memory on the stack!!!";
//     let moredata = "I need to fill the stack!!!";
//     let evenmoredata = " asdfasdfasdfa lkjs;dlkfj; alksdj;flkasj;dlkfj ;asjd;fija ;sijdf full stack!!!";
//     let themostdata = "aojef;aowiejf;awoeijf;aweoifja;weoifja;weoifja;weoifja;weoifja;weoijf a;oiwsejfa;oiejf as;efij full stack!!!";
//     i++;
//     // await delayEx1(0); // KEY -> If you uncomment await then this recursion will go on forever. Else it stops after you run out of stack memory.
//     console.log(i);
//     recursive();
//  }
//  recursive();