class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {

        // we want to find a window such that 
        //   k = 3
        //  [1,2,3,1]
        //   l   r
        
        for (let l = 0; l < nums.length - 1; l++) {
            // start with beginning pointer 
            for (let r = l + 1; Math.abs(l-r) <= k; r++) {
                if (nums[l] === nums[r]) {
                    return true;
                }
            }
        }

        return false;
    }
}
