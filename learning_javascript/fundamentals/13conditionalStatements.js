//Conditional statements
//conditional statements allow us to perform different actions based on different conditions.

//* if-else condition
//this is most commonly used conditional statement. where if the condition is truthy then only the if block executes otherwise else block will be executed

let age = 18;

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

//we can also else if condition to check multiple conditions
let score = 85;

if (score >=90) {
    console.log("You got an A grade.");
}else if (score >= 80) {
    console.log("You got B grade.");
}else{
    console.log("You got C grade.");
}

//*Ternary operator
//this is a shorthand way of writing if-else statements. It takes three operands and is often used for simple conditions.

let number = 10;

let result = (number % 2 === 0) ? "Even" : "Odd";
console.log(result); // Output: Even

//*Switch statement
//this is used to perform different actions based on different conditions. It is often used when we have multiple possible values for a variable.

let weekday = 'monday';

switch (weekday) {
    case 'monday':
        console.log("Start of the week!");
        break;
    case 'tuesday':
        console.log("It's Tuesday!");
        break;
    default:
        console.log("It's another day.")
}

//*if we dont use break statement then it will execute all the cases after the matched case. so always remember to use break statement to avoid this issue.
//default case is executed when none of the cases match the value of the switch expression.
//it is optional but it's a good practice to include it to handle unexpected values.
