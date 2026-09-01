import math

class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
    
        top = 0
        bottom = len(matrix) - 1

        lastEl = len(matrix[0]) - 1

        while top <= bottom:
            m = math.floor((top + bottom) / 2)
        
            if matrix[m][lastEl] < target:
                top = m + 1
            elif matrix[m][0] > target:
                bottom = m - 1
            else:
                break
        
        found = math.floor((top + bottom) / 2)
        l = 0
        r = len(matrix[0]) - 1

        while l <= r:
            m = math.floor((l + r) / 2)

            if matrix[found][m] == target:
                return True            
            elif matrix[found][l] < target:
                l = m + 1
            elif matrix[found][r] > target:
                r = m - 1
        
        return False
                
            
    
            
