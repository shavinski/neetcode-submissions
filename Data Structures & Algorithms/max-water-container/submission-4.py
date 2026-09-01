class Solution:
    def maxArea(self, heights: List[int]) -> int:
        # need distance variable 
        # need to keep l and r pointers 
        # maxArea variable 

        # being while looop 
            # need to get update distance between two pointers 
            # get the min between the two pointers num

            # determine the area by distance * min of the l and r

            # have current area 
            # update the maxArea variable if the currentArea is greater 
        
        # return the maxArea

        distance = 0
        l = 0
        r = len(heights) - 1
        maxArea = 0

        while l < r:
            distance = r - l
            minBucket = min(heights[l], heights[r])

            # print('left: ', heights[l], 'right: ', heights[r], "distance: ", distance)

            currentArea = distance * minBucket
            if (currentArea > maxArea):
                maxArea = currentArea

            if heights[r] > heights[l]:
                l += 1
            else:
                r -= 1
        
        return maxArea
            

