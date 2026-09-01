class Solution:
    def isValid(self, s: str) -> bool:
        # want to create a stack
        # create a dict with the paren pairs 

        # loop through string
            # check if the current char is in our dict and check to 
            # see if our stack at last pos is the matching paren

            # if it is not then we push the current char

        
        # need to return if our stack is empty 

        stack = []
        parenPairs = {
            ")" : "(",
            "}" : "{",
            "]" : "["
        }

        for char in s:
            if char in parenPairs and stack:
                if stack[-1] == parenPairs[char]:
                    stack.pop()
                else:
                    return False
            else:
                stack.append(char)
        
        return stack == []


                    
            
            

        