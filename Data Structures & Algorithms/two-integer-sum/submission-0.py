class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # // create a hashmap
        # // loop through the list 
        #     // insert into hashmap 
        #         // subtact targer from current index, store difference
        #     // check if the current number from loop is in hashmap
        #         // if it is then return the two indexes

        cache = {}

        for i, num in enumerate(nums):
            diff = target - num

            if num in cache:
                print("Cache:", cache)
                return [cache[num], i]
             
            cache[diff] = i
        
        # return [0,1]