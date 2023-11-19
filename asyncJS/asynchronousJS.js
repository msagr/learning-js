// JS is not asynchronous

// what is synchronous JS?

/*
    synchronous matlab ek ke baad dusra kaam hoga, jab tak ek kaam complete naa ho,
    dusra shuru nahi hoga.
*/

// what is asynchronous JS?

/*
    asynchronous matlab saare kaam ek saath shuru kardo, jiska answer phele aajaye uska
    jawab de dena.
*/

/* Example - Let's say there are 4 tasks

            1.  task a  -   5
            2.  task b  -   2
            3.  task c  -   15
            4.  task d  -   1

        In synchronous JS, all these four tasks would take 23 seconds to complete.
        In asynchronous JS, all these four tasks would take 15 seconds to complete.
*/

/*  Kaise pta chalta hai ki hum sync. code likh rahe h ya async?

    If we use certain things like :-

        a.  setTimeout
        b.  setInterval
        c.  promises
        d.  fetch
        e.  axios (package)
        f.  XMLHttpRequest

        then code is asynchronous otherwise its synchronous.

*/

// synchronous code
console.log("hey");
console.log("hey 2");
console.log("hey 3");
console.log("hey 4");

// when is async JS useful?

/*
    kai baar aapka final code depended hota hai kisi aur ke server par, iss case
    mein humein nahi pata hota ki answer uske server se kab laut ke aayega, to hum kya
    nhi kr skte is writing sync. code, isse nipatne ke liye hum log sync. code likh dete
    hai taaki blocking naa ho and jab bhi answer aaye humare answer ke respect mein chalne
    waala code chal jaaye.
*/

/*
    async code ka main motive hota hai ki jin cases mein hume pta nahi code ka answer kitni der
    mein aayega to jab bhi answer aa jaaye uske answer ke respect mein koi particular
    code chaala dena.
*/

// syntax of setTimeout :- setTimeout(callback, time in ms)

// asynchronous code example :-

console.log("hey");

setTimeout(function(){
    console.log("hey 2"); // The callback function passed to setTimeout() function will run after the specified period of time.
}, 2000);

console.log("hey 3"); 

/* Output of above written code will be :-

    hey
    hey 3
    hey 2
            its because of asynchronicity
*/

/* Concept :- There are 2 stacks in JS main stack and side stack, all the synchronous code goes 
              into the main stack and asynchronous code goes into the side stack. The code in main stack
              is executed first and once the main stack becomes empty, then only the side stack is checked,
              and if the processing in side stack is completed its pushed to main stack.
*/

//proof of concept

console.log("Hi")
setTimeout(function(){
    console.log("Hello");
},100);

for(let i=0; i<3000000; i++)
    console.log(i)


/*
    Event loop in JS is used to bring stuff to main stack from side stack, if the processing of a particular
    stuff is done in side stack.
*/

/*  Why is JS not asynchronous?

    JavaScript is not asynchronous as it is single threaded, it cannot do multiple computations at once. Therefore, JS cannot
    do tasks parallely but it can do it concurrently.

*/

/* When we use :-

        fetch
        axios
        promises
        setTimeout
        setInterval

    These things are used to send async. requests,

    But when these requests are processed we mainly catch their output (of request) using
    then catch, callbacks, async await.

*/

/*  What are callbacks? (in context to asynchronous JS)

callback humesha ek function hota hai, ye sirf tab chalta hai jab async code
ka completion hojaata hai.

*/