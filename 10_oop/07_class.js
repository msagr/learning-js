class User{

    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`;
    }

    capitalizeUserName(){
        return this.username.toUpperCase();
    }
}

const mehul = new User("Mehul", "mehulsagrawal33@gmail.com", "123");
console.log(mehul.encryptPassword());
console.log(mehul.capitalizeUserName());