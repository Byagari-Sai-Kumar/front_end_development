//*Almost everything in js is an object. and every object is interlinked with another object called prototype.
//string -> String.prototype -> Object.prototype -> null

let name = 'sai kumar';
console.log(name.length);
//even though we have not created length still the string object is able to access it. It make from its parent object String.prototype

//string length
//give the length of the string and does not change original string
console.log(name.length); //9

//check starts with some pattern
let url = 'www.amazon.com';
console.log(url.startsWith("www")); //true

//check ends with some pattern
console.log(url.endsWith(".com")); //true

//concatination of strings
console.log(url.concat('.in')); //www.amazon.com.in

//check character at
console.log(name.charAt(2)); //i

//take a slice of string
console.log(url.slice(4,10)); //amazon

//custom prototypes
String.prototype.sayHello = function(){
    console.log("Hello from string");
}

console.log(name.sayHello());
console.log(url.sayHello());

//comparing prototypes 
console.log(name.__proto__ === String.prototype);
console.log(String.prototype === Object.prototype);


//Number prototypes
let randomNumber = 10.2162738382;

//fix number after decimal point and round the number to nearest number
console.log(randomNumber.toFixed(2)); //"10.22"

console.log(randomNumber.toPrecision(4));