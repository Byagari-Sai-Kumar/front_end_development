//Array is an object that can hold multiple data types together

const fruits = ['apple','banana','mango'];

//We can access the elements of an array using Index
//Array index always starts with 0

console.log(fruits[0]);

//if the index is out of the length it returns undefined
console.log(fruits[5]);

//we can find the length of an array using length

console.log(fruits.length);

//Inseting elements

fruits[3] = 'orange';

console.log(fruits);

//Updating the element

fruits[3] = 'pine apple';
console.log(fruits);

fruits[10] = 'grapes';
console.log(fruits);

console.log(fruits[7]);
console.log(typeof fruits[7]);

console.log(fruits.length);

//Checking data type of array
// if you simply use typeof it always returns Object datatype for array
// So instead use Array.isArray() which returns true or false values

console.log(typeof fruits);
console.log(Array.isArray(fruits));

//Array methods
//toString() - returns a string with array values separated by commas and does not change the original array
var cars = ['BMW','Audi','Mercedes'];
console.log(cars.toString()); // BMW,Audi,Mercedes
console.log(cars); // ['BMW','Audi','Mercedes']

//join() - returns a string with array values separated by specified separator and does not change the original array
var bikes = ['KTM','Duke','Royal Enfield'];
console.log(bikes.join()); // KTM,Duke,Royal Enfield
console.log(bikes.join('-')); // KTM-Duke-Royal Enfield
console.log(bikes); // ['KTM','Duke','Royal Enfield']

//pop() - removes the last element from an array and returns that element. This method changes the original array
var animals = ['cat','dog','elephant','tiger'];
console.log(animals.pop()); // tiger
console.log(animals); // ['cat','dog','elephant']

//push() - adds a new element at the end of an array and return the new length of the array. This method changes the original array.
var birds = ['sparrow','pigeon','peacock'];
console.log(birds.push('parrot')); // 4
console.log(birds); // ['sparrow','pigeon','peacock','parrot']

//shift() - removes the first element from an array and returns that element. This method changes the original array
var flowers = ['rose','jasmine','lily','tulip'];
console.log(flowers.shift()); // rose
console.log(flowers); // ['jasmine','lily','tulip']

//unshift() - adds a new element at the beginning of an array and return the new length of the array. This method changes the original array.
var colors = ['red','green','blue'];
console.log(colors.unshift('yellow')); // 4
console.log(colors); // ['yellow','red','green','blue']




//delete() - deletes the element at the specified index and returns undefined. This method changes the original array but does not affect the length of the array
//this methos leaves empty/undefined at the deleted position
var countries = ['India','USA','UK','Canada'];
console.log(delete countries[2]); // true
console.log(countries); // ['India','USA',empty,'Canada']

//concat() - merges two or more arrays and returns a new array. This method does not change the original arrays.
//incase of nested arrays it flattens only one level deep
var asianCountries = ['India','China','Japan'];
var europeanCountries = ['UK','Germany','France'];
var africanCountries = ['Nigeria','Egypt','South Africa'];
var australianCountries = ['Australia',['New Zealand']];
var allCountries = asianCountries.concat(europeanCountries,africanCountries,australianCountries);
console.log(allCountries); // ['India','China','Japan','UK','Germany','France','Nigeria','Egypt','South Africa','Australia',['New Zealand']]
console.log(asianCountries); // ['India','China','Japan']
console.log(europeanCountries); // ['UK','Germany','France']
console.log(africanCountries); // ['Nigeria','Egypt','South Africa']
console.log(australianCountries); // ['Australia',['New Zealand']]

//sort() - sorts the elements of an array in ascending order and changes the original array
var pets = ['dog','cat','parrot','fish'];
var numbers = [40,100,1,5,25,10];
pets.sort();
numbers.sort();
console.log(pets); // ['cat','dog','fish','parrot']
console.log(numbers); // [1,10,100,25,40,5]

//splice() - adds/removes elements from an array at a specified index and returns the removed elements as a new array. This method changes the original array.
var fruits1 = ['apple','banana','mango','orange'];
fruits1.splice(2,1,'pine apple','grapes'); // at index 2 remove 1 element and add 'pine apple' and 'grapes'
console.log(fruits1) // ['apple','banana','pine apple','grapes','orange']

//slice() - returns a new array containing a portion of the original array from the start index to end index (end index not included). This method does not change the original array.
var vegetables = ['carrot','potato','tomato','onion','cabbage'];
var slicedVegetables = vegetables.slice(1,4);
console.log(slicedVegetables); // ['potato','tomato','onion']
console.log(vegetables); // ['carrot','potato','tomato','onion','cabbage']

//reverse() - reverses the order of elements in an array and changes the original array.
var digits = [1,2,3,4,5];
digits.reverse();
console.log(digits); // [5,4,3,2,1]




//isArray() - checks if a variable is an array and returns true or false
var myArray = ['a','b','c'];
var myString = 'hello';
console.log(Array.isArray(myArray)); // true
console.log(Array.isArray(myString)); // false

//indexOf() - returns the first index of a specified element in an array. Returns -1 if the element is not found
//negative index search from the end of the array
var letters = ['a','b','c','d','e','a'];
console.log(letters.indexOf('c')); // 2
console.log(letters.indexOf('a')); // 0
console.log(letters.indexOf('a',1)); // 5
console.log(letters.indexOf('z')); // -1

//lastIndexOf() - returns the last index of a specified element in an array. Returns -1 if the element is not found
//negative index search from the end of the array
var letters = ['a','b','c','d','e','a'];
console.log(letters.lastIndexOf('a')); // 5
console.log(letters.lastIndexOf('c')); // 2
console.log(letters.lastIndexOf('a',4)); // 0
console.log(letters.lastIndexOf('z')); // -1

//find() - returns the first element in an array that satisfies a provided testing function. Otherwise undefined is returned
var numbers = [10,20,30,40,50];
var foundNumber = numbers.find((element) => element > 25);
console.log(foundNumber); // 30

//findIndex() - returns the index of the first element in an array that satisfies a provided testing function. Otherwise -1 is returned
numbers = [10,20,30,40,50];
var foundIndex = numbers.findIndex((element) => element > 20);
console.log(foundIndex); // 2

//includes() - checks if an array contains a specified element and returns true or false
//it also takes an optional second parameter as the starting index
var fruits2 = ['apple','banana','mango'];
console.log(fruits2.includes('banana')); // true
console.log(fruits2.includes('apple',1)); // false





//entries() - returns a new array iterator object that contains key/value paris for each index in the array. and this wil not changes the original array.
var colors1 = ['red','green','blue'];
var colorsEntries = colors1.entries();
console.log(colorsEntries);
for (let eachEntry of colorsEntries){
    console.log(eachEntry);
}

//every() - tests whether all elements in the array pass the test implemented by the provided function. It return a boolean value and does not change the original array.
var evenNumbers = [2,4,6,8,10];
var isAllEven = evenNumbers.every((element) => element % 2 === 0);
console.log(isAllEven); // true

var mixedNumbers = [1,2,3,4,5];
var isAllEvenMixed = mixedNumbers.every((element) => element % 2 === 0);
console.log(isAllEvenMixed); // false

//some() - tests whether at least one element in the array passes the test implemented by the provided function. It return a boolean value and does not change the original array.
var multiplesOfThree = [4,6,19,13,17];
var isMultipleOfThree = multiplesOfThree.some((element) => element % 3 === 0);
console.log(isMultipleOfThree); // true

//fill() - fills all the elements of an array from a start index to an end index with a static value. This method changes the original array.
//if index is not provided it fills the entire array
var cars1 = ['BMW','Audi','Mercedes','Toyota'];
cars1.fill('Honda',1,3);
console.log(cars1); // ['BMW','Honda','Honda','Toyota']

