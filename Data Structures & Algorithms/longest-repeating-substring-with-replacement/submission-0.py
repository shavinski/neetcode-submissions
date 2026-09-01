class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        count = {}
        # A : 3
        # B : 3
        # "A A A B A B B"
        #  l         r
        res = 0
        # 5, 
        
        l = 0
        for r in range(len(s)):
            # Add to our count object
            count[s[r]] = 1 + count.get(s[r], 0)

            if (r - l + 1) - max(count.values()) > k:
                count[s[l]] -= 1
                l += 1
            res = max(res, r - l + 1)
        
        return res





        