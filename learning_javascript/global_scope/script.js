var name = 'I am sai kumar';
let car = 'audi';
const fruit = 'apple';

//all these variables are in global scope and can be accessed in the browser console
//*window object in the object is always in global scope but upto browser only. there is no window object in node.js
//all the above variables are in the global scope. variable declared with var are attached to the window object.
//but let and const are not attached to the window object due to their block scope

console.log(window.name); //'I am sai kumar'
console.log(window.car); //undefined
console.log(window.fruit); //undefined

//Declaring variables using var is big no no when it comes to large scale application

function greet(){
    alert("Hello sai kumar");
}

//global functions in the file A are overwritten with the functions in file B. This is the problem.

//To solve this problem write all the script inside a function and then call it.

function sayHello(){
    alert("Hello from script file A");
}

sayHello();