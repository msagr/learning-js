"use strict"; // now all JS code will be treated as newer version.

// alert(3+3); we get error as we are using nodeJS, not browser.


/* Primitive datatypes */

// number
let num = 34;

// bigint, used when numbers are astonomically large which cannot be handled by normal var.

// string
let name = "Mehul Sweeti Agrawal"; // can also write string in single quotes ('').

// boolean
let isLoggedIn = true;

// null, its also a standalone value in JS. (representation of empty value)
let temperature = null; // explicitly saying that we don't have any info. of the temperature.

// undefined, when no value is provided explixitly; then the default value is undefined.

// symbol, for uniqueness.


/* Non-primitive datatypes */

// object


// typeof is an operator in JS which returns datatype of operand.

let age = 20;

console.log(typeof age);
console.log(typeof "Mehul");
console.log(typeof null); // Output --> object,  null is an object in JS.
console.log(typeof undefined); // Output --> undefined,  undefined is a type in JS.

/* Questions :-

Q1. Why is null treated as object and not as a type in JS?
Q2. See how to use bigint and symbol dtype in JS?
Q3. What is range of numbers and bigint dtype in JS? 

*/