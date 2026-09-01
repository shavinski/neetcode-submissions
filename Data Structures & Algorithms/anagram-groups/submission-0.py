class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        result = []
        inputted = []
        
        for i, str1 in enumerate(strs):
            subList = [str1]

            if str1 in inputted:
                continue

            currentStrCount = self.getLetterCount(str1)

            for j, str2 in enumerate(strs):
                if i == j:
                    continue

                print("str1:", str1, "str2", str2)
                str2Count = self.getLetterCount(str2)

                if str2Count == currentStrCount:
                    # print("match: ", str2Count, "currentStr", currentStrCount)
                    subList.append(str2)
                    inputted.append(str2)
            
            result.append(subList)

            print("Inputted after:", inputted)
        return result
                

    def getLetterCount(self, str: str) -> Dict[int, int]:
        letterCount = {}

        for char in str:
            letterCount[char] = letterCount.get(char, 0) + 1

        return letterCount   