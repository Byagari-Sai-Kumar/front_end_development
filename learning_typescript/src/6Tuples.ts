//* Array Tuples

//Tuples are known as typed array where we type each element in the array.
//We specify each element's type

let person: [string,number,boolean] = ['sai kumar',27,true];

//If we try to set the values in different order ts will give us error
//! person = [true,27,'sai kumar']; Type 'boolean' is not assignable to type 'string'.
//Even the order matters here.

//* Readonly Tuples
//In tuples each element is pre defined.

let evenNumbers: [string,number,boolean] = ['two',4,true];
evenNumbers.push('eight');
console.log(evenNumbers); //['two',4,true,'eight'];
//!Here upto three elements we have control but four element is uncontrolled.

let oddNumbers: readonly [string,number,boolean] = ['one',3,false];
//! oddNumbers.push('seven'); Property 'push' does not exist on type 'readonly [string, number, boolean]'.

//* Names Tuple

// let multipleOfTen: [a:number,b:number] = [10,'twenty'];
//! Type 'string' is not assignable to type 'number'.

//* Tuple Destructuring
let randomNumbers: number[] = [10,54];
const [x,y] = randomNumbers;
console.log(x); //10
console.log(y); //54