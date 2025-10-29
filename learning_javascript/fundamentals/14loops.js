//Loops in javascript
//loops are used to execute a block of code repeatedly

//* for loop
//for loop is uesd when the number of iterations is known
//it has three parts: initialization, condition, and updation

for (let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i);
}

//here, i is initialized to 0, the loop continues as long as i is less than 5, and i is incremented by 1 after each iteration
//when i becomes 5, the condition fails and the loop stops

//* while loop
//while loop is used when the number of iterations is not known
//it continues as long as the condition is true
//it has only one part: condition
//to stop the loop, we need to change the condition inside the loop

let j = 0;

while (j < 5) {
    console.log("Iteration number: " + j);
    j++; //updating the condition
}

//always remember to update the condition inside the loop, otherwise it will create an infinite loop

//* do while loop
//do while loop is similar to while loop, but it guarantees that the block of code will be executed at least once
//it checks the condition after executing the block of code

let k = 0;
do {
    console.log("do while loop Iteration number: " + k);
    k++; //updating the condition
} while (k < 5);

//in this case, even if the condition is false initially, the block of code will execute once before checking the condition
