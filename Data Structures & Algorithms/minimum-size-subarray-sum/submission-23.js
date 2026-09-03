class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
    // target=7
    // nums=[2,3,1,2,4,3]
    //         l r
        let l = 0;  
        let sum = 0;
        let minimumLengthArr = Infinity 

        for (let r = 0; r <= nums.length - 1; r++) {
            sum += nums[r];
            while (sum >= target) {
                minimumLengthArr = Math.min(minimumLengthArr, (r - l) + 1);
                console.log({l, r})
                sum -= nums[l];
                l++;
            }
        }

        return minimumLengthArr === Infinity ? 0 : minimumLengthArr; 
    }
}
