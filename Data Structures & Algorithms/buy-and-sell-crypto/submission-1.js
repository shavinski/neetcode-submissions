class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     * [10, 1, 5, 6, 7, 1]
     *  i   l
     * want max profit 
     * buy will be on left, sell on right
     * if our left is less than right then move the index to left
     * 
     * we will want to get max between set max we have and two pointers
     * return the max at the end 
     */
    maxProfit(prices) {
        let max = 0;
        let l = 0;
        let r = l + 1;

        while (r < prices.length) {
            console.log("Buy: ", prices[l], "Sell: ", prices[r])
            if (prices[l] > prices[r]) {
                l = r;
            }

            max = Math.max(max, prices[r] - prices[l]);
            r++;
        }

        return max;
    }
}
