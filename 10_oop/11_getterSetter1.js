// Also valid

function User(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email',{
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this._email = value
        }
    })
}

const user1 = new User('msa@gmail.com', '123abc');
console.log(user1.email);

// With objects

