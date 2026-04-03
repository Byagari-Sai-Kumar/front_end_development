//Special Types are used when we do not know the type in advance or when we need to work with js primitive types 
//in a type-safe way.

//*Type: any
let name: any;

//This is the most flexible type in ts.
//This will silently bypass the type check in ts.

//When to use any type
//1. When migrating js code to ts code.
//2. When we do not know the type initially.

//Without any
let fruit = 'apple';
//!fruit = 30; Type 'number' is not assignable to type 'string'.

//With any
let age: any = 20;
age = "Twenty";
//Here using any means any type. here it will accept string, number and any

//*Type: unknown

//1. type unknown is used when we do not know the type initially.
//2. Initially it could be unknown but always check the type when accessing the varibales.

let car: unknown = "BMW";
car = {
    getCarYear : () => {
        console.log('this car is 5 years old')
    }
}

if(typeof car === 'object' && car !== null){
    (car as {getCarYear: Function}).getCarYear();
}

//*Type: never

//1. The type never represents the type that never occurs.
//2. It is used to indicate something never happens or should never happen.

//Common use cases:
//1. A function that never returns.

function throwError(message: string): never{
    throw new Error(message);
}

//!let x: never = true; Type 'true' is not assignable to type 'never'.

//*Type undefined & null

//1. In ts both undefined and null have their own types.
//2. with strictNullChecks enabled, you must explicitily handle these types.

let bike: undefined = undefined;
let isEven: null = null;

//* Optional Parameters & Properties

function greet(name?: string): void{
    console.log(`Hello, ${name || 'stranger'}`);
}

interface User{
    name: string,
    age?: number
}

//* Nullish Coalescing and Optional Chaining

//Here if input is null or undefined the use 'default value'
// let message: string = input ?? 'default'

const address = {
    country: {
        countryName: 'India'
    }
}

address?.country?.countryName; //Safely access the nested properties.

//* These types are most useful when 
// {
//     "complierOptions": {
//         "strictNullChecks": true
//     }
// }