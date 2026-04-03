//* Typescript has special types on arrays.

let numberArray: number[] = [];
numberArray.push(3);
//!numberArray.push('four'); Argument of type 'string' is not assignable to parameter of type 'number'.

//* Readonly
// readonly keyword protects array being changed

let evenNumbers: readonly number[] = [2,4,6];
//! evenNumbers.push(8); Property 'push' does not exist on type 'readonly number[]'.

//*Type Inference in array

let oddNumbers = [1,3,5,7];
oddNumbers.push(9);
//! oddNumbers.push('eleven'); Argument of type 'string' is not assignable to parameter of type 'number'.