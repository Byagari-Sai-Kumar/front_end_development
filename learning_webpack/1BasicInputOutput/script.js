import sum from "./sum";

document.getElementById('button').addEventListener('click',() => {
    const sumResult = sum(4,5);
    document.getElementById('para').innerHTML = `The sum of 4 and 5 is ${sumResult}`;
})