// simple function
function printMe(){
    console.log("Printing.........");
}

printMe();

// function with parameter
function printThis(param){
    console.log(param);
}

printThis("Hello");

let v = printMe(); /* here v will store the return value of printMe function, and
                    if no value is returned v will contain a special value called undefined.*/


// function with return value
function add(a, b){
    return a+b;
}

addition = add(3,5); // storing the result of add(3,5) in addition variable.

console.log(addition);
console.log(add(4,6));

// default parameter of function
function substraction(a, b=0){ // b having default value of 0
    return a-b;
}

console.log(substraction(4,5));
console.log(substraction(4));

// rest parameter (can have any number of arguments)
// Note :- A function can have only one rest parameter and it will be last parameter defined for that function.
function collectThings(x, ...y){ // here, ...y is a rest parameter
    console.log(x);
    console.log(y);
}

collectThings(1,2,3,4,5,6,7,8,9,10,11,12); 


