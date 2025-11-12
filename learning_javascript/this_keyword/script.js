//this is a keyword in javascript places inside a funciton and that referes to another object
//so that another object depends on how the function is been implemented
//there are three scenarios where this keyword is used
//Inside a regular function

var name = 'sai kumar';

function callName(){
    console.log(name);
    console.log(this.name); //here this refers to the global object

    //in browser global means window object
    //in node.js global means global object
}

callName();

//Inside a method

const person = {
    name : 'ramesh',
    dob : 1995,
    calcAge : function(){
        const currentYear = (new Date()).getFullYear();
        const currentAge = currentYear - this.dob; //here this refers to the same object
        return currentAge;
    }
}

const age = person.calcAge();
console.log(age);

//Using call() to invoke function

function car(param1, param2){
    console.log(this.carName, param1, param2); //here this refers to the carObject which is being sent using call method
    //here carObject is received from call method so no need to mention parameter to received it. it automatically receives
}

const carObject = {
    carName : 'Audi',
    year : 2000
}

car.call(carObject,'hi','bye');

//using apply method

//the only diff between call and apply is call takes first arguement as this object and multiple arguements
//apply method takes first arguement as this object and second as one single array which can contain multiple element

car.apply(carObject,['hi','bye']);


//using bind method
//in the above two cases call and apply with call the functions but bind will not call the function instead it setups the object and returns a new function
//later we can call that new function


const storeCarFun = car.bind(carObject,'hi','bye');
storeCarFun();


//Using this in arrow functions
//arrow function do not have its own this keyword

const fruit = {
    name : 'apple',
    color : 'red',
    callFruit : ()=>{
        console.log(this.name);
        //since array function do not have its own this keyword it cannot refer to the same object as done in the method function
        //here it is refering to the global object saikumar
        //so using arrow function in a method is not a good practice
    }
}

fruit.callFruit();


const technologies = {
    name : 'javascript',
    year : 1990,
    callTech : function(){
        function someotherFuntion(){
            console.log(this.name);
            //here this refers to the global object since this is not a method. its a function and function refers to global object
        }
        someotherFuntion();
    }
}

technologies.callTech();