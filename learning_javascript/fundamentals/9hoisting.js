//variable declaration
var a;
console.log(a); //undefined

//varible initialization
a = 10;
console.log(a); //10

//variable assignment
a = 20;
console.log(a); //20

//Hoisting
//Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase.
//This means that you can use variables and functions before they are declared in the code.
//*In the case of variables, only the declaration is hoisted, not the initialization.

//here js looks for b variable declaration and hoists it to the top
//so when we try to access b before its declaration, it returns undefined
console.log(b); //undefined
var b = 30; //declaration and initialization
console.log(b); //30

//Function hoisting
//*Function declarations are fully hoisted, meaning you can call a function before it is defined in the code.

console.log(greet('Sai Kumar')); 

function greet(name) {
    return `Hello ${name}, welcome to the world of JavaScript!`;
}

//* expressions are not hoisted in the same way as function declarations.
//since this something like a variable declaration, it is hoisted but not the assignment
console.log(greetTwo('John')); //TypeError: greetTwo is not a function

const greetTwo = function(name) {
    return `Hello ${name}, welcome to the world of JavaScript!`;
}

//If you try to call a function expression before it is defined, you will get a TypeError because the variable is hoisted but not the function definition.

//Hoisting happens in the global scope and withtin the function scope.