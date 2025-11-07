//Js provides us Date object which gives us date 

let today = new Date();
console.log(today);

//we can also pass date
let customDate = new Date("1999-03-04");
console.log(customDate);

//get day
console.log(today.getDay()); //return number representing day. 0 is represented as Sunday

//get year
console.log(today.getFullYear()); //return full year

console.log(Date.now()); //returns the date time in milliseconds elapsed since 1 Jan 1970 to now
