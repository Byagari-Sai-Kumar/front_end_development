//*Type Explicit is the way you explicitily tell the ts what type of data a varibale should contain.

const name: string = "sai kumar";
const age: number = 27;
const isActive: boolean = true;
const score: number[] = [10,20,30];

function greet(name: string): string{
    return `Hello ${name}`;
}

//Use Type explicit to define functions parameters and their return type.
//Using object literals.
//when type value is obvious from the context

//*Type Inference is the way where we do not tell ts about data type. ts will automatically knows it.

let fruit = "apple";
console.log(typeof fruit); //string

//fruit = 27; here this is will given an error saying that when the varibale is declared and initialized 
//it was holding string, now we cannot assign number to it.

//Use type inference for simple declarations with immediate assignment.
//when initial value might not be the final value.

const person ={
    name: 'sai kumar',
    age: 27
};

console.log(person.name);
//!console.log(person.email); Property 'email' does not exist on type '{ name: string; age: number; }'.
//here type explicit is useful.


//*Type Safety in Action
//ts always take care of data types and prevent assigning wrong data type to a variable.

let personName = "sai kumar";
//! personName = 27; Type 'number' is not assignable to type 'string'. 

//*Difference between javascript and typescript
// function addNumbers(a,b){
//     return a + b;
// } 

//!addNumbers("5",3); "53"
//!In JavaScript this code execute with out any errors. resulting in string concatination instead of number calculation.

function addNumbersTwo(a:number,b:number){
    return a + b;
}

//!addNumbersTwo("5",3) Argument of type 'string' is not assignable to parameter of type 'number'.

//*When does ts cannot check type inference?
let car;
car = 'BMW';
car = 50;

//Here ts cannot check type because we did not mentioned the type when declared. so it automatically fallbacks to any.

//Enable "noImplicitAny" : true in the tsconfig.json