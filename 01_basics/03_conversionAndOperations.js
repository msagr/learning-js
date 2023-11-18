let score = 33

/* const {score} = req.body [we know at line 1 that score has a numeric value
                            but if suppose we write this line (line no. 3) while working at backend
                            we have no idea whether score variable is numeric or string, so in such
                            cases type conversions are extremely helpful]. */

console.log(typeof score)
console.log(typeof(score)) // can also apply rounded braces with typeof operator.

let score1 = "67"
console.log(typeof score1) // Output :- string

let valueInNumber = Number(score1) // to convert to number
console.log(typeof valueInNumber) // Output :- number


// Caution
let score2 = "33acv"
let valueInNumber1 = Number(score2)
console.log(typeof valueInNumber1) // Output :- number ???
console.log(valueInNumber1) // Output :- NaN, NaN is also treated as a number in JS.


/* Note :- JS is not a strictly typed language that's why developers nowadays
           prefer TypeScript over JS */


// Experimenting with null and undefined

let testVariable = null
let numericalEquivalent = Number(testVariable)
console.log(numericalEquivalent) // Output :- 0 i.e. null is converted to 0 when we try to convert it to a number.
console.log(typeof numericalEquivalent) // Output :- number

let testVariable1 = undefined
let numericalEquivalent1 = Number(testVariable1)
console.log(numericalEquivalent1) // Output :- NaN, i.e. undefined can't be properly converted to a number 
console.log(typeof numericalEquivalent1) // Output :- number

// Booleans

let isLoggedIn = 3
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) // Output :- true
console.log(typeof booleanIsLoggedIn) // Output :- boolean

let variable1 = "mehul"
let booleanVariable1 = Boolean(variable1)
console.log(booleanVariable1) // Output :- true
console.log(typeof booleanIsLoggedIn) // Output :- boolean

/*  Investigation :-

    0  --> false;   non-zero   --> true
    "" --> false;  "non-empty" --> true 
*/

// Converting to String

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber) // Output :- 33
console.log(typeof stringNumber) // Output :- string


/* To-do :-

1. Explore all these type of conversions in JS.

*/
