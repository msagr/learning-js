// Declaring arrays :-
let arr = new Array(1, 2, 3, 4);
console.log(arr);

let arr1 = [1, 2, 3, 4];
console.log(arr1);

// Accessing element of array
console.log(arr[2]);

// JS arrays can also contain mixed dtype
let person = {
    name : "Mehul",
    age : 25
};

let mixedArray = [1, 2, "mehul", person];
console.log(mixedArray);
console.log(mixedArray[3].name);

// Length of array
console.log(arr.length);