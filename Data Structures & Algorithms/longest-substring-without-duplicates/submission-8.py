class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        # use sliding window here

        # start with left pointer 
        # have a set to keep track of appeared chars

        # begin loop 
            # first check if the char exist in loop
                # if it exists, 
                    # remove curretn left from set 
                    # calc the length of set then store as new length
                    # then add one to our left pointer 
                # add char to set
            
        # we will return our stored length var

        if len(s) < 1:
            return 0

        l = 0
        length = 1
        window = set()

        for r in range(len(s)):
            while s[r] in window:
                # length = max(len(window), length)
                window.remove(s[l])
                l += 1                

            window.add(s[r])
            length = max(len(window), length)

        return length



        