//Given a string. make it reverse

const name = "columbus";

const arrayName = name.split("");
const reverseString = arrayName.reverse().join("");

console.log(reverseString);

let secondString = "";
arrayName.forEach(element => {
    secondString = secondString + element;
    console.log(secondString);
});
console.log(secondString);