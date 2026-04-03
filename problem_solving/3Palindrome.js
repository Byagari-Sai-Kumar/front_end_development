//check if a string is palindrome. ignore spaces.

function isAlphaNumeric(char){
    return /[a-z0-9]i/.test(char);
}

function palindrome(givenString){
    let left = 0;
    let right = givenString.length - 1;
    while(left < right){
        if(!isAlphaNumeric(givenString[left])){
            left++;
            continue;
        }

        if(!isAlphaNumeric(givenString[right])){
            right--;
            continue;
        }

        if(givenString[left] !== givenString[right]){
            return false
        }

        left++;
        right--
    }
    return true;
}

console.log(palindrome("A man, a plan, a canal: Panama"));
console.log(palindrome('madam'));
