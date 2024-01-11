class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    /*get password(){
        return this.password.toUpperCase();
    }

    set password(value){
        return this.password = value;
    }*/

    get password(){
        return this._password.toUpperCase();
    }

    set password(value){
        this._password = value.toUpperCase();
    } // Behind the scenes, constructor function is not setting password as its been completely overwritten here.
}

const user1 = new User("m@msa.com", "abc");
console.log(user1.password); // will get error :- Call Stack size exceeded as we are setting it twice.

/* NOTE -

1. Getter and Setter will go hand in hand. (ek aa gya toh dursa bhi aayega).

getter - To get some value.
setter - To set some value.

*/

/* NOTE :-

Analogy -

    Now, the value saved in database is actual value due to setter function but when we try to take and print
    value it would be in UpperCase due to getter function.

    We never return value in setters.
    We always return value in getters.

*/