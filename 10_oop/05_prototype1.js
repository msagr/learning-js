// Goal :- To define a method that gives true length of string

let myName = 'mehul     ';

console.log(myName.length); // 10

//console.log(myName.trueLength()); // it should give 5

// -------------------------------------------------------------------------------------

let myHeros = ['thor', 'spiderman'];

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// injecting another method from outside
function getThorPower(){
    console.log("Thor's power is hammer");
}

heroPower.getThorPower = getThorPower;
console.log(heroPower.getThorPower);
console.log(heroPower.getThorPower());

// Note: Study about factory function in JS.


// here we are attaching a method to object prototype which will be accessible in all objects, arrays, strings, functions etc. (as object is at top of hierarchy)
Object.prototype.mehul = function(){
    console.log(`mehul is present in all objects`);
}


heroPower.mehul();
myHeros.mehul();

// Note :- If we attach a method or property to array's prototype, it wouldn't be accessible in object's prototype.


// inheritance (old fashioned way)

const User = {
    name: 'chai',
    email: 'chai@google.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // It would inherit properties and methods of TeachingSupport in it.
}

// prototypal inheritance
Teacher.__proto__ = User; // here, teacher would inherit the properties of User.


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher); // here, TeachingSupport will inherit properties of Teacher.


// -------------------------------------------------------------------------------------------------------------------

// Accomplishing our goal

String.prototype.trueLength = function(){
    //console.log(this);
    return this.trim().length;
}

console.log(myName.trueLength());
console.log("hi    ".trueLength());