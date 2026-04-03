//Remove duplicates from array.

function removeDuplicates(givenArray){
    return [...new Set(givenArray)];
}

function removeDuplicatesTwo(givenArray){
    let newArray = [];
    for(let i=0; i < givenArray.length; i++){
        if(!newArray.includes(givenArray[i])){
            newArray.push(givenArray[i]);
        }
    }
    return newArray;
}

function removeDuplicatesThree(givenArray){
    let seen = {};
    let newArray = [];

    for(let i=0; i < givenArray.length; i++){
        if(!(givenArray[i] in seen)){
            seen[givenArray[i]] =  true;
            newArray.push(givenArray[i]);
        }
    }

    return newArray;
}

console.log(removeDuplicates([1,2,3,4,2,3,-1]));
console.log(removeDuplicatesTwo([1,2,2,2,2,2,3,4,2,3,-1,-1,0,0,4]));
console.log(removeDuplicates([0,false,null]));
console.log(removeDuplicatesTwo([0,false,null]));
console.log(removeDuplicatesThree([1,2,2,2,2,2,3,4,2,3,-1,-1,0,0,4]));
console.log(removeDuplicatesThree([0,false,null]));