class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let window = new Set();

        // [1, 2, 3, 1]
        //        l
        // set = (2, 3, 1)  

        for (let l = 0; l <= nums.length - 1; l++) {
            if (window.has(nums[l])) {
                return true;
            }
            
            window.add(nums[l])

            if (window.size >= k) {
                window.delete(nums[l - k])
            }
        }

        return false;
    }
}
