/* What is Callback?

When we nest a function inside another function as an argument, that's
called a callback.

Callback basically forms connections between functions.

*/

// Note :- JS runs from top to bottom

// synchronous execution of functions in JS

function one(){
    console.log(" step 1 ");
}

function two(){
    console.log(" step 2 ");
}
        
one();       
two();     

/* 
Output(of above code) :-

step 1
step 2 
*/

// connecting 2 functions using callback
function one1(call_two){
    console.log(" step 1 is complete. Please call step 2 ")
    call_two()
}

function two1(){
    console.log(" step 2 ")
}

one1(two1)

/* 
Output(of above code) :-

step 1 is complete. Please call step 2
step 2 
*/

// reversing the order inside one1() function
function one2(call_two){
    call_two()
    console.log(" step 1 is complete. Please call step 2 ")
}

function two2(){
    console.log(" step 2 ")
}

one2(two2)

/* 
Output(of above code) :-

step 2 
step 1 is complete. Please call step 2   (because of asynchronicity)
*/


/* Ice-cream business :-

1.  order from customer
2.  fetch ingredients
3.  start production
4.  serve


Let's code this out using JS callbacks.
*/

// everytime we get order we call production.

// forming this relationship between the functions.
let order = (call_production) => {
    console.log("order placed, please call production")
    call_production()
};

let production = () => {
    console.log("order received, starting production")
};