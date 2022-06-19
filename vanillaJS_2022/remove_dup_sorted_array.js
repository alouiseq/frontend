/**
 * @param {number[]} nums
 * @return {number}
*/
var removeDuplicates = function(nums) {
    let i = 0;
    
    while(true) {
        console.log(`Index is ${i}`)
        if (nums[i] === nums[i+1]) {
            nums.splice(i+1, 1);
            console.log(`Iteration: ${nums} of index ${i}`)
        }
        else {
            console.log('Adding to index');
            i++;
        }
        if (i >= nums.length) {
            console.log(`Breaking out of loop with i ${i} and nums lengh at ${nums.length}`);
            break;
        }
    }
    return nums;
};
console.log(`Final is ${removeDuplicates([1,1,  2])}`);
