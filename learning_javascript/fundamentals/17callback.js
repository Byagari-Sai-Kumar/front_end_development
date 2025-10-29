//*callback functions

//usually we pass values to functions, but we can also pass functions to other functions
// this is called a callback function
//so when we pass a function to another function, we can call it inside the other function

function greet(newFunction,name) {
    console.log("Hello " + name);
    newFunction();
}

function newFunction() {
    console.log("This is a callback function");
}

greet(newFunction, "John");

//output:
//Hello John        
//This is a callback function
