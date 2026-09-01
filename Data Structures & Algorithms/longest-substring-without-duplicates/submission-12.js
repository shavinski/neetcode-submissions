class Solution {
    /**
     * @param {string} s
     * @return {number}
     * "zxyzxyz"
     *  l  r 
     * [zxy]
     * if the l and r are equal
     * get length of current string
     * move left pointer one 
     * and move right pointer to be left + 1
     * restart the process    
     */
    lengthOfLongestSubstring(s) {
        let l = 0;
        let r = 1;
        let longest = 0;
        let subString = [];

        while (r <= s.length) {
            if (subString.length === 0) {
                subString.push(s[l]);
            }

            console.log(subString)
            longest = Math.max(longest, subString.length);
            if (subString.includes(s[r])) {
                subString = []
                l += 1;
                r = l + 1;
            } else {
                subString.push(s[r])
                r++;
            }

        }

        return longest;
    }
}
