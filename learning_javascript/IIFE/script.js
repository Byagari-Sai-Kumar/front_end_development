//Function declaration
function sayCarName(){
    alert("It's an Audi");
}

//Function expression
// const store = function(value){
//     alert('The value received is ' + value);
// }

//IIFE stands for Immediately Invocked Function Expression
(function(){
    console.log("Hello from IIFE");
})();

+function(){
    console.log('Hello from IIFE, but with + syntax');
}();

//this style is not prefered because if there is any code under this that would cause errors
(function(){
    console.log("Hello from IIFE, third style but not prefered");
}());