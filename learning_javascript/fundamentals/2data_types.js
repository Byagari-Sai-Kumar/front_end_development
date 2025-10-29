//String 

//Anything thats inside a single quotes, double quotes and backticks are string
// A string can be anymuch short or long
// even empty string is a string
// You cannot use Double quotes inside a Double quotes. Single quotes inside single quotes. Backticks inside Backticks
//Always use opposite quote if needed

const name = 'sai kumar';
const city = "Hyderabad";
const country = `India`;

const greetings =  "Good morning 'John'";
const wishes =  'Hello "Dany"';
const cities = `Hyderabad, "Delhi", 'Mumbai'`;


console.log(cities);
console.log(typeof cities);

//Number 

// Any number in js is a Number
// Positive, Negative, decimal point value 

const even = 2;
const decimal_value = 3.6754;
const negative_number = -0.22455;
const Positive_number = +3.85747;


//Boolean

//true or false values
//True and False using capital letters are invalid

const decision = true;
const isExists = false;

//Null

//Intentional presence of empty value

const middle_name =  null;
console.log(middle_name);

//Undefined

//created a variable but did not defined its data type 
//keywords var and let support undefined but const does not support undefined

var fruit;
console.log(fruit);

//Symbol

//Not much necessary but its one of a kind of datatypes 

const my_name = Symbol('sai kumar');
console.log(my_name);


//All the above 6 data types are called as Primitive Data Types
//They all have one single kind of values


//Objects

var person = {
    name : 'sai kumar',
    age : 24,
    isIndian : true,
    liked_fruits : ['apple','banana','orange'],
    greet : function(){console.log('Hello sai kumar!!');}
};

console.log(person.name);
console.log(person.liked_fruits);
console.log(person.greet());

// If a key as function as its value then its called as method.
