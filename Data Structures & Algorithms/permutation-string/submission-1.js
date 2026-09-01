class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        // keep a copy of the s1 

        // we will begin our loop
        // if the current element is in the copy of s1 
        // we will remove it from the copy
        // else if it isnt (meaning we dont have a perm)
        // reset the copy of the s1 


        let copy = s1.split('');
        let s2Arr = s2.split('');
        let found = 0

        for (let i = 0; i < s2Arr.length; i++) {
            if (!copy.length) return true;

            if (copy.includes(s2Arr[i])) {
                let index = copy.indexOf(s2Arr[i]);
                copy.splice(index, 1);
                console.log('in if', copy, 'index found: ', index, 'current char: ', s2Arr[i])
                found++;
            } else {
                copy = s1.split('');
                i -= found;
                found = 0;
            }
        }

        return !copy.length;
    }
}
