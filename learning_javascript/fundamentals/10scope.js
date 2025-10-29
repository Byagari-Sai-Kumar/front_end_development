//Scope in js means the accessibility of variables and functions in different parts of your code.
//There are two main types of scope in JavaScript: global scope and local scope (function scope).

//*Global scope: Variables declared outside of any function or block are in the global scope and can be accessed from anywhere in the code.
var globarVar = 'I am a global variable';

//*Local scope: Variables declared inside a function are in the local scope and can only be accessed within that function.
function localScopeExample(){
    var greet =  'Hello from local scope';
    console.log(greet); // 'Hello from local scope'
}

//during the hoisting all the global variables and function declarations are moved to the top of their containing scope

//this varibable is accessible anywhere in the code
console.log(globarVar); // 'I am a global variable'
localScopeExample();

//*there is rule in scope. variables outside can be accessed inside, but declared inside cannot be accessed outside
//console.log(greet); //ReferenceError: greet is not defined 

//Scope chain is the mechanism that allows JavaScript to look up variables in the current scope and then in the outer scopes until it finds the variable or reaches the global scope.
//In the case of nested functions, the inner function can access variables from its own scope and the outer function's scope.

var a = 10;

function fruits(){
    var b = 'Apple';

    vegetables();

    function vegetables(){
        var c = 'Carrot';
        console.log(a); // 10 (accessing global variable)
        console.log(b); // 'Apple' (accessing outer function variable)
        console.log(c); // 'Carrot' (accessing inner function variable)
    }
}

console.log(a); // 10 (global variable)
fruits();

//*Lexical scope is a type of scope where the scope of a variable is determined by its position in the source code.

var c = 'Global';

function d(){
    var c = 'Local';
    console.log(c); // 'Local' (accessing local variable)

    function e(){
        console.log(c);
    }

    return e;
}

var captureD = d();

//*here when e is returned it also get memory of the lexical scope where it was created. that why it can access the variable c from the d function
captureD();
console.log(c); // 'Global' (accessing global variable)
