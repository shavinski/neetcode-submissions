class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        s_cache = {}
        for char in s:
            if char in s_cache:
                s_cache[char] += 1
            else:
                s_cache[char] = 1

        t_cache = {}
        for char in t:
            if char in t_cache:
                t_cache[char] += 1
            else:
                t_cache[char] = 1
                
        return s_cache == t_cache    