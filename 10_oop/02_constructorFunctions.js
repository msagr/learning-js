
//const promiseOne = new Promise();
const date = new Date();

/*
    NOTE :- Here, new is constructor function which allows us to create
            multiple instances from single object literal.

*/


// Creating object functional way

// Its constructor function that is used to create and initialize objects in JS.
// Its like a blue print for objects (not exactly like class)
var User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is: ${this.courseCount}`);
    };
};

/*
    NOTE :- 
    
    1. Avoid creating global variables inside constructor function.
    2. Although we can initialize variable inside constructor function using const, let or var.

*/

// var user1 = User('mehul', 21); // it will give output undefined

// When we create object using constructor function, we have to use new keyword.
var user1 = new User('mehul', 3);
var user2 = new User('Rishi', 2);

/* NEW keyword :-

1. It invokes constructor function and creates a new instance each time.
2. It also takes care of this keyword (because if we don't use new keyword it would be a normal function call
and this keyword would point to global space giving us undefined, but new keyword takes care of this thing.)

when we use new keyword its not a normal function call.
*/

console.log(user1);
console.log(user2);

// To get access of method inside of User object
user1.getCourseCount();
user2.getCourseCount();

// See first name of user1
console.log(user1.firstName);

// Adding method to User object (injecting a method to object)
User.prototype.getFirstname = function(){
    console.log(`Your firstname is : ${this.firstName}`);
} 

user1.getFirstname();

/*
    NOTE :- 

    1. __proto__ is a non-standard property that exists on the instances of objects. It is used to reference the prototype of an object. 
        Every object in JavaScript has a __proto__ property that points to its prototype.

    2. prototype is a property that exists on constructor functions. It is not directly accessible on instances but is used as a blueprint 
        for creating objects when the constructor function is used with the new keyword.

    It's important to note that the prototype property is specific to constructor functions and does not exist on instances created from those constructors.
*/  

console.log(user1.__proto__ === User.prototype); // i.e. the __proto__ of object points to prototype of its constructor function.

/* NOTE :-

    We can overwrite the properties and functions of __proto__ and can even inject our own stuff there.
*/

// now, we are not using new keyword, so the properties and methods of object will get assigned to global space.  
let user3 = User('abhijeet', 5);
console.log(firstName); // abhijeet