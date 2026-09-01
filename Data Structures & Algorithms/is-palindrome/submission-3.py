class Solution:
    def isPalindrome(self, s: str) -> bool:
        # Going to need to left pointer
        # need right pointer

        # will looop through input string 
        # as long as the left < right pointer

        # begin loop
        # check if the right pointer and left pointer are equal
            # if they are then add one to left, subtract one from right
        # else exit because not valid

        left = 0
        right = len(s) - 1

        while left < right:
            while left < right and not s[left].isalnum():
                left += 1

            while left < right and not s[right].isalnum():
                right -= 1

            if s[left].lower() != s[right].lower():
                return False
            
            left += 1
            right -= 1

        return True