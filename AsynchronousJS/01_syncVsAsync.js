/*
    Asynchronous actions :- These are actions that we initiate now and they finish
    late e.g. setTimeout().

    Synchronous actions :- These are actions that initiate and finish one-by-one.

*/

// Synchronous Code

console.log("This is synchronous code");

let a = 3;
let b = 4;
console.log(a+b);
console.log();

// Asynchronous Code

console.log("This is asynchronous code");

setTimeout(function(){ // this function is a callback function.
    console.log("Hey I am good");
    console.log();
}, 3000); // This line will go to secondary stack and will be scheduled by Event Loop.

console.log("Wait for 3 seconds");


// Callback function

/*
    A callback function is a function passed into another function as an argument which is then
    invoked inside the outer function at appropriate time to complete an action.
*/

function loadScript(url, callback){
    var script = document.createElement("script");
    script.src = src;
    script.body.appendChild(script);
}

/*
    Note :-

    1. Synchronous code goes to primary stack.
    2. Asynchronous code goes to secondary stack and is scheduled by Event Loop.
*/