//Arrow functions are also called as fat arrow functions.
//These are similar to function expression
//we use arrow => to represent arrow functions

//function expression
const greet = function(name){
    console.log('hello from function declaration');
    console.log("Hello " + name);
    console.log(this);
    console.log(arguments);
    //console.log(super);
    //console.log(new.target);
}

greet('sai kumar');

//Arrow functions
//Arrow functions do not have their own this, arguments,super or new.target keywords
const sayHello = (name) => {
    console.log("Hello from arrow function");
    console.log("Hello " + name);
    console.log(this);
    //console.log(arguments);
    //console.log(super);
    //console.log(new.target);
};

sayHello('ramesh');

//some more simplicities of arrow functions
//here we can remove curly brances and return keyword
const sum = (a,b) => a + b;
console.log(sum(2,3)); //5

//if we have only one argument we can remove round brances also
const sub = c => c - 1; 
console.log(sub(10)); //9 