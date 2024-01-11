const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

/*
    console.log(Math.PI);

    // It have no effect on value of PI as its a universal constant
    Math.PI = 5;

    console.log(Math.PI);
*/

const myNewObject = {
    name: 'chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nahi bani");
    }
}

const descriptor1 = Object.getOwnPropertyDescriptor(myNewObject, "price");
console.log(descriptor1);

Object.defineProperty(myNewObject, 'name', {
    writable: false,
    enumerable: false // this key:value pair will not come when we iterate over object entries 
})

const descriptor2 = Object.getOwnPropertyDescriptor(myNewObject, "name");
console.log(descriptor2);

/*
    for(let [key,vlaue] of myNewObject){
        console.log(`${key} : ${value}`);
    } // Error : Objects are not iterable in JS 
*/

for(let [key,value] of Object.entries(myNewObject)){
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);
    }
}

