//* spread operator
// ... is used to spread the elements of an array or object

function sumAll(...numbers){
    let sum = 0;
    for(let number = 0; number < numbers.length; number++) {
        sum += numbers[number];
    }
    return sum;
}

console.log(sumAll(1, 2, 3, 4, 5)); // will return 15
