function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this; // optional (implicitly defined)
}

const userOne = User('mehul', 12, true);
const userTwo = User('JS samurai', 11, false);
console.log(userOne);

/* NOTE :-

1. here, the properties and methods of object will get created in global space as we are not using new keyword,
   so userTwo will overwrite values of userOne. 

   here, userOne and userTwo are nothing but this keyword pointing to global space.

*/

// To avoid it we need new instance each time, for that we use new keyword.

const userOne1 = new User('mehul', 12, true);
const userTwo2 = new User('JS samurai', 11, false);
console.log(userOne1);

// self-reference
console.log(userOne1.constructor); // User
console.log(userOne.constructor); // Object

// instanceof
console.log(userOne1 instanceof User); // true
console.log(userOne instanceof User); // false