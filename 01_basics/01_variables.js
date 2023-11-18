// constants
const accountId = 144553; // can't change its value.

// variables
let accountEmail = "mehul@gmail.com"; // respects block scope 
var accountPassword = "12345"; // doesn't respect block scope
let accountState; // default value of a variable in JS is undefined.

accountCity = "Jaipur"; // we can declare a variable in JS like this also.

/*
    Prefer not to use var because of issues in block scope and functional scope.
    block scope - {} (anything written inside curly braces).
*/

// accountId = 567; it will produce error as accountId is constant.
accountEmail = "hc@gmail.com";
accountPassword = "2345";
accountCity = "Raipur";

console.log(accountEmail);

// to print all variables at once.
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/* Questions :-

Q1. What's the use of declaring variables without using let, var or const keyword?
Q2. Difference between block scopes and functional scopes?

*/