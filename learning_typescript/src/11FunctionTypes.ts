//* Typescript has a special syntax for typing function parameters and their return type.

//* Typing parameters
function addNumbers(a: number, b: number){
    console.log(a + b);
}

//* Typing return value
function greet(name: string): string{
    return `Hello ${name}! How are you?`;
}

//* Typing return void
function subtractingNumber(a: number, b: number): void{
    console.log(a - b);
}

//* Typing Optional Parameters 
function createPerson(name: string, age?: number): void{
    console.log(`Heloo ${name}! You are ${age || '0'} years old.`)
}

//* Typing Default Parameters
function multiplyingNumbers(a: number, b: number = 10): number{
    return a * b;
}

//* Typing Named Parameters
function dividingNumbers(a: number, b: number): void{
    console.log(a / b);
}

//* Typing rest parameters
function mergingNumber(a: number, b: number, ...rest: number[]): void{
    console.log(a + b + rest.reduce((p,c) => p + c,0));
}

//* Type Alias
type Greet = (name: string) => string;

const WishPeople: Greet = (personName) => `Hello ${personName}`;