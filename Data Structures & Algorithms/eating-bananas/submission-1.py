class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        # h = 9
        # eating rate of 2
        #         [1, 4, 3, 2]

        # hour 1: [0, 4, 3, 2]
        # hour 2: [0, 2, 3, 2]
        # hour 3: [0, 0, 3, 2]
        # hour 4: [0, 0, 1, 2]
        # hour 5: [0, 0, 0, 2]
        # hour 6: [0, 0, 0, 0]

        # [1, 5, 3, 2], h = 4
        # l = 1, r = 4
        # k = 5 / 2 = 2 

        # 1 + 3 + 2 + 1 = 7
        # 7 > 4 

        # 

        l = 1
        r = max(piles)

        res = r

        while l <= r:
            k = (l + r) // 2
            hours = 0

            # Need to calculate time it takes to eat the nanas
            for p in piles:
                hours += math.ceil(p/k)

            if hours <= h:
                res = min(k, res)
                r = k - 1
            else:
                l = k + 1
        return res
            
            






