class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        result = []

        listCounted = self.getCount(nums)

        sortedTuples = sorted(listCounted.items(), key = lambda item: item[1], reverse = True)
        result = [tup[0] for tup in sortedTuples[:k]]

        return result

    def getCount(self, nums: List[int]) -> Dict[int, int]:
        count = {}
        for i, num in enumerate(nums): 

            count[num] = count.get(num, 0) + 1

        return count