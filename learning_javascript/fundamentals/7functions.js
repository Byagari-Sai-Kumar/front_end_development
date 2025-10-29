//Functions are created to made code separation where huge things are working together
//function keyword is used whenever creating a function with
//function keyword
//function name
//curly braces()
//flower braces{}
//return value

function fun(){
    var a = 1 + 2;
    console.log(a);
    //alert('Hello from fun function!!');
}

//function's code will be only executed when the function is called or invocked
fun();

//we can call function any number of times
fun();
fun();
fun();

//function can take parameters or arguments
//here name is the parameter
//functions can return the values or omitted is not needed.
function greet(name){
    return `Hello ${name}, welcome to the world of JavaScript!`;
}

const greetOne = greet('Sai Kumar');
console.log(greetOne);

//function expression
//function expression is a function that is assigned to a variable

const greetTwo = function(name){
    return `Hello ${name}, welcome to the world of JavaScript!`;
}

console.log(greetTwo('John'));
