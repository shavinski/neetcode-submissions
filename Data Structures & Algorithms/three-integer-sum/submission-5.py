class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        # have a visited list
        # keeps track of duplicates 

        # result array

        # begin loop
        
            # left pointer
            # right pointer

            # second loop
            # will do two sum
            # check if left < right

            # if element i + left + right > 0, r - 1
            # if element i + left + right < 0, l - 1
            # else if element i + left + right = 0,
            # push to a result array
        nums.sort()
        result = []

        print("Sorted: ", nums)

        for i, num in enumerate(nums):

            if (i > 0 and num == nums[i - 1]):
                continue

            left = i + 1
            right = len(nums) - 1

            while (left < right):
                print("current: ", num, "left: ", nums[left], "right :", nums[right])
                
                threeSum = num + nums[left] + nums[right]
                
                if (threeSum > 0):
                    right -= 1
                elif (threeSum < 0 ):
                    left += 1
                elif (threeSum == 0):
                    result.append([num, nums[left], nums[right]])
                    left += 1
                    while nums[left] == nums[left - 1] and left < right:
                        left += 1

        return result 
            
                