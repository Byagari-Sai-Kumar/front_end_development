//Closures are functions that access values from its lexical environment.

let outer = 5;
function inner(value){
    const number = 2;
    const finalSum = value + number + outer; //here the outer value is accessed from function outside(lexical environment)
    return finalSum;
}

console.log(inner(5));

//some more deeper in closures

function outsideFunction(){
    let outer = 1;
    
    function insideFunction(value){
        let inner = 2;
        const finalTotal = value + inner + outer;
        return finalTotal;
    }

    return insideFunction;
}

const funOne = outsideFunction();
console.dir(funOne);
console.log(funOne(50));
console.log(funOne(50));


function functionOne(firstNumber){
    return function secondFunction(secondNumber){
        return firstNumber + secondNumber;
    }
}

const storeSecondFunction = functionOne(10);
console.log(storeSecondFunction(1));

const storeSecondFunctionAgain = functionOne(100);
console.log(storeSecondFunctionAgain(1));

function counter(){
    let count = 0;
    return function innerCounter(){
        count++;
        return count;
    }
}

const storeOuterCounter = counter();
console.log(storeOuterCounter());
console.log(storeOuterCounter());
console.log(storeOuterCounter());