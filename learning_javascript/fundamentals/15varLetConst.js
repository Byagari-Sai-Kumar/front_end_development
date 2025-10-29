//var, let and const
//var was introduced in the first version of JavaScript and has been around since the beginning.
//let and const were introduced in ES6 (ECMAScript 2015) to provide better scoping rules than var.

//*var is function scoped or globally scoped
//variables declared with var can be re-declared and and re-assigned
//if the variable is declared inside a function, it is not accessible outside of that function
//but if it is declared outside of a function, it is accessible everywhere in the code
//if the variable is declared inside a block (like an if statement), it is still accessible outside of that block
//variables declared in the loops can be accessed outside of the loop

var name = 'John';

console.log(name); // John

function greet() {
    var firstName =  'Sai kumar';
    console.log(firstName); // Sai kumar
}

greet();
console.log(name); // John
console.log(firstName); // ReferenceError: firstName is not defined

if(true) {
    var lastName = 'Doe';
    console.log(lastName); // Doe
}

console.log(lastName); // Doe


//*let is block scoped
//variables declared with let can be re-assigned but not re-declared in the same scope
//if the variable is declared inside a block, it is not accessible outside of that block
//variables declared with let are not hoisted to the top of the block
//variables declared in the if statement are not accessible outside of that block
//variables declared in the loops are not accessible outside of the loop

let age =  25;

function showAge(){
    console.log(age); // 25
    let city = 'New York';
    console.log(city); // New York
}

console.log(age); // 25
showAge();
console.log(city); // ReferenceError: city is not defined

if(true) {
    let country = 'USA';
    console.log(country); // USA
}

console.log(country); // ReferenceError: country is not defined


//*const is also block scoped
//variables declared with const cannot be re-assigned or re-declared in the same scope
//variables declared with const must be initialized at the time of declaration
//if the variable is declared inside a block, it is not accessible outside of that block
//variables declared inside the loops are not accessible outside of the loop

const pi = 3.14;

console.log(pi); // 3.14    

function showPi() {
    console.log(pi); // 3.14
    const e = 2.71;
    console.log(e); // 2.71
}

console.log(pi); // 3.14
showPi();
console.log(e); // ReferenceError: e is not defined

if(true) {
    const gravity = 9.81;
    console.log(gravity); // 9.81
}

console.log(gravity); // ReferenceError: gravity is not defined

//more about const
//const can be used to declare objects and arrays
//but the properties of the object or elements of the array can be changed

const person = {
    name: 'John',
    age: 30
}

console.log(person); // { name: 'John', age: 30 }

person.age = 31; // changing the age property
console.log(person); // { name: 'John', age: 31 }

person.city = 'New York'; // adding a new property
console.log(person); // { name: 'John', age: 31, city: 'New York' }

delete person.name; // deleting a property
console.log(person); // { age: 31, city: 'New York' }

person = {}; // TypeError: Assignment to constant variable

const numbers = [1, 2, 3];

numbers.push(4); // adding a new element
console.log(numbers); // [1, 2, 3, 4]

numbers.pop(); // removing the last element
console.log(numbers); // [1, 2, 3]

numbers = [5, 6, 7]; // TypeError: Assignment to constant variable
numbers = [];  // TypeError: Assignment to constant variable

//js engine thinks that const is a constant variable. if we are trying to reassign it, it will throw an error.
