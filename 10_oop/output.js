function checkPassword(success, failed){
    let password = "Roadside Coder";
    // let password = "abcdef";
    if(password == "Roadside Coder") success();
    else failed();
}

let user = {
    name: "Mehul Sweeti Agrawal",

    loginSuccessful(){
        console.log(`${this.name} logged in`);
    },

    loginFailed(){
        console.log(`${this.name} Failed to log in`);
    }
};

// checkPassword(user.loginSuccessful, user.loginFailed);
checkPassword(user.loginSuccessful.bind(user), user.loginFailed.bind(user));
