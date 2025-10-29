//Operators are reserved words in JavaScript that perform operations on values and variables.

//*Arithmetic Operators

//addition
let sum = 5 + 3; // 8
console.log("Sum:", sum);

//subraction
let difference = 10 - 3;
console.log("Difference:", difference); // 7

//multiplication
let product = 5 * 3;
console.log("Product:", product); // 15

//division
let quotient = 15 / 3;
console.log("Quotient:", quotient); // 5

//modulus (remainder)
let reaminder = 10 % 3;
console.log("Remainder:", reaminder); // 1

//exponentiation
let power =  2 ** 3;
console.log("Power:", power); // 8

//*Assignment Operator
var a = 1;

//add 2 to var a 
a = a + 2;
console.log(a);

a += 2;
console.log(a);

//same with subtract and then assign
a -= 1;
console.log(a);

//multiply and then assign
a *= 3;
console.log(a);

//divide and then assign
a /= 3;
console.log(a);

//modulus and then assign
a %= 1;
console.log(a);

//*Logical operators

//truthy and falsy values

//Anything those are not empty are considered as truthy values
true
"sai kumar"
72
-72
Infinity
-Infinity
{key:value}
[5,2]

//Anything those are empty are considered to be falsy values
false
""
0
-0
NaN
null
undefined

//* OR operator

//atleast one value is expected to be truthy value

'sai kumar' || "" //checkes for first value and found truthy and will not go for second. JS engine returns the found truthy value
"" || 43 //43
null || undefined //null
undefined || null //undefined
[5,7] || 'sai kumar' //[5,7]

//* AND operator

//all the values must and should truthy

'sai kumar' && 43; //43
null && undefined; //null
72 && 0 //0


//*Triple Equal Operator
//=== always checks for both data and data type to be equal then only returns true else false
//Primitive data types are always checked similarly

'sai kumar' === 'sai kumar' //true
43 === 43 //true
true === true //true
false === false //true
null === null //true
undefined === undefined //true
Symbol === Symbol //true

'sai kumar' === 'ramesh' //false
43 === 78 //false
true === false //false
null === undefined //false

//Incase of non primitive data types every object is treated as a unique instance

var a = [5,7];
var b = [5,7];
a === b; //false 

//even though a and b looks same js engine will create unique instance of both and compares that both unique instance with is always false

var c = [2,4]
var d = c;
c === d; //true since c is assigned to d which both are the same instance so true is returned


//* Double Equal to operator
//JS engine always try to coercion. which means trying to converting the possible datatype to another so that it can compare

2 == "2"; //true because js will try to convert number 2 to string '2' and then compare both and finds yes these both are same and returns true

//Type coercion priority order:
//String
//Number
//Boolean

//more examples of coercion
2 + "2" //"22" since first priority is string number 2 is converted to string 2 and concatinated
"2" + 2 //"22"

true + 4; //5 boolean true is converted as 1 and then added to 4

//*Always use === as a best practice and do not depend on JS coercion

//*Comparision operators
//greater than or equals to >=
//less than or equals to <=
//Not equals to after coercion !=
//Not equals !==

2 >= 2; //true 
2 >= "2" //true

3 <= 5; //true
7 <= 2; //false


//*Conversion Operators

//+ always trys to convert to number and then bring to positive side
//- always trys to convert to number and then bring to negative side
//! trys to boolean and then inverse

+"22" //22
-"3" //-3
+['22'] //22
+["2","3"] //Nan
+"0" //0
-"0" //-0
!true //false 
!false //true 
!!true //true
!!false //false
!12 //checks for truthy and falsy values and since number is truthy and inverse it then false
!0 //true


//*Increment and Decrement operators
//++value Prefix increment
//--value prefix decrement

var e = 3;
++e //4;

var f = 5;
--f //4

//value++ postfix increment
//value-- postfix decrement

var g = 7;
g++ //7 here 1 is added but previous value is only return and in the next lines its value will be increased one
g++ //8


//*Operator Precedence
//when multiple operators are provided JS always use precedence priority to calculate

//BODMAS

4 + 3 * 2 //first multiply then add so the result is 10
(4 + 3) * 2 //first add since they are in brackets and then multiply so the result is 14


//*Operator Associativity
2 > 1 > 0; //first 2 > 1 is true. now true and 0 are compared. coercion occurs and true is converted to 1 and 1 is greater and 0 so the final result is true
3 > 2 > 1; //false because 3 > 2 is true and now true is converted to 1 and 1 is not greater than 1 so false


