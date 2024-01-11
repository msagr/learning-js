// Numeric indices
var numericArray = [1, 2, 3];

// Associative-like behavior, but it's actually using an object
var associativeArray = [];
associativeArray["name"] = "John";
associativeArray["age"] = 25;

console.log(associativeArray.length); // 0, because length only considers numeric indices
console.log(associativeArray["name"]); // "John"

/* NOTE

In JavaScript, arrays have both numeric indices (0, 1, 2, ...) and the ability to hold properties, including properties with string keys. When you use a string as a key in an array, it is essentially
treated as a property of the array object, not as a numeric index.

*/