const dob = prompt('What is your birth year?');

const presentDate = new Date();
const presentYear = presentDate.getFullYear();

const age = presentYear - dob;

alert(`Your age is ${age} years.`);

