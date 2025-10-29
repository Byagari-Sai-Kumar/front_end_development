//objects in js are the data type used to store data in key value pair
//objects are always enclosed in curly backets {} and separated by comma

const person = {
    name: 'sai kumar',
    age: 24,
    isIndian : true,
    greet : function(){console.log('Hello sai kumar')}
}

person.greet();

//if a object contains a key and its value as a function, its called as Method.

//accessing values from objects
//Using Dot Notation
console.log(person.name);
console.log(person.age);
console.log(person.city);

//when trying to access the key which is not present always returns Undefined

//Using Bracket Notation
console.log(person['name']);
console.log(person['age']);

//Where do use dot notation and bracket notation?

const st = 'name';

console.log(person[st]);
console.log(person.st);   //we connot do the same with dot notation since its always looks for key
