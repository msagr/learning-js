/*
class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    createId(){
        return `123`;
    }
}

const user1 = new User("Mehul");
console.log(user1.createId()); // works fine
*/

// We want to give access of createId() to only some instances of class, then

class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`User is logged in`);
    }

    static createId(){
        return `123`;
    }
}

const user1 = new User('Mehul');
// console.log(user1.createId()); // Error

class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const user2 = new Teacher('iphone', 'i@phone.com');
user2.logMe();
// console.log(user2.createId()); // Error