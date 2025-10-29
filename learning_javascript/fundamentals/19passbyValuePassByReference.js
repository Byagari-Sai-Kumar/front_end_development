//*pass by value and pass by reference

//*pass by value means that a copy of the value is passed to the function

var firstNumber =  10;
var secondNumber = firstNumber;

firstNumber = 20;

console.log(firstNumber); // 20
console.log(secondNumber); // 10

//this is because firstNumber and secondNumber are two different variables, and changing one does not affect the other.
//this is how primitive types (like numbers, strings, booleans) work in JavaScript.

//*pass bt reference means that a reference to the value is passed to the function

var firstObject = {
    name : 'John',
    age : 30
}

var secondObject = firstObject;

firstObject.age = 43;

console.log(firstObject.age); // 43
console.log(secondObject.age); // 43

//this is because firstObject and secondObject are referencing the same object in memory.
//this is how non-primitive types (like objects, arrays, functions) work in JavaScript.
