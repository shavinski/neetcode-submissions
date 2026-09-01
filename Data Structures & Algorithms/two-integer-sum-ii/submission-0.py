class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        # start left at index 0, will always stay here 
        # start right at index 0 

        # loop through array
            # if left index is equal to right, continue 

            # add the two nums, check if its equal to target
            # check to move on or return indices add one

        left = 0
        right = len(numbers) - 1

        while left < right:
            currentSum = numbers[left] + numbers[right]

            if currentSum > target:
                right -= 1
            elif currentSum < target:
                left += 1
            else: 
                return [left + 1, right + 1]
        
        return []
            
                        