// The default behaviour of JS is prototypal.

/* 
    i.e. JS searches for a particular property or method in current level, 
    if not found there it searches it a level up and so on until it encounters 
    null.
*/

// Note :- we don't have access to this keyword inside arrow function. Why?

// Note :- Everything in JS is a Object. 


// Ex :- Function in JS is a function as well as object.
function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 2; // adds a property named 'power' to multiplyBy5 function. (behaviour of object)

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);

// here, prototype is pointing to this of current method. 
console.log(multiplyBy5.prototype);

// ---------------------------------------------------------------------------------------------------------------------------------------------

function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    // score++; (here, score doesn't know about context)
    this.score++;
} // if don't attach method to Object prototype, we won't be able to access it in instances of that object.

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const chai = new createUser('chai', 25);
const tea = new createUser('tea', 20);

/* NOTE :-

If you directly assign an object (or any value) to User.myMethod, you are attaching a property named myMethod 
directly to the User constructor function itself, not to its prototype. This approach can be used for static methods or properties, 
which are associated with the constructor rather than instances of the constructor.

*/

/* NOTE :-

JS gives us syntactic sugar where writing prototype is not a compulsion i.e. :-
chai.prototype.printMe() is equivalent to chai.printMe()

The reason behind it is, if there are multiple levels of prototypes present in chain, we would be frustated to write
prototype multiple times.
*/

chai.printMe();

/*

Here's what happens behind the scenes when new keyword is used:

A new object is created: The new keyword initiates the creation of a new JS object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor
function. This means that it has access to properties and methods defined on the constructor's prototype. 

The constructor is called: The constructor function is called with the specified arguments and this is bound
to the newly created object. If no explicit return value is specified from the constructor, JS assumes this, 
the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value
(object, array, function, etc.), the newly created object is returned. 

NOTE :- JS gives constructor function through new keyword not through classes.
*/