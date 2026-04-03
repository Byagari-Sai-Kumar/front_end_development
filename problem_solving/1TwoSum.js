//Given an array with numbers and a target number. return indices of number in the array the adds upto to the target

// Input: nums = [2,7,11,15], target = 9  
// Output: [0,1]

const nums = [4,8,-2,18,99,4];
const target = 26;

//Approach 1
let map = {};
for(let i=0; i < nums.length; i++){
    const compliment = target - nums[i];
    if (map.hasOwnProperty(compliment)){
        console.log([map[compliment],i]);
    }
    map[nums[i]] = i;
}

//Approach 2
for(let i=0; i < nums.length; i++){
    for(let j=0; j < nums.length; j++){
        if(nums[i] + nums[j] == target){
            console.log([i,j])
        }
    }
}