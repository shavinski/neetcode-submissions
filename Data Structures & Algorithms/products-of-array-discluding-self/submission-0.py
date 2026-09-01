class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        # Will loop through array first time to get first index
            # keep track of our product

            # second loop will check if index is equal to above loop
                # if it is we will skip this loop and cont
                # else we will continue on 
            
            # at end we will push prodcut to a new array 
    
        products = []

        for i, num1 in enumerate(nums):
            product = 1

            for j, num2 in enumerate(nums):
                if i == j:
                    continue
                product *= num2
            
            products.append(product)
        
        return products


            

        