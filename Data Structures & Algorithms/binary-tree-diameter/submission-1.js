/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    /**
     * Goal is to find longest path even if its not through root
     * 
     * keep track of diameter 
     * will need to run dfs on both right and left nodes?
     * from that return the max ?
     * 
     * we start with 1 - > 2 -> 4 -> null 
     *                          1 
     *        1      dfs(1) -> 
     *      2         dfs(2), dfs(null) 
     *    3          dfs(3) ->  dfs(null)
     *              dfs(null) -> , dfs(null) -> 0
     */           


    diameterOfBinaryTree(root) {

        let diameter = 0;

        function dfs(node) {
            if (!node) return 0;

            const left = dfs(node.left);
            const right = dfs(node.right);
            diameter = Math.max(diameter, left + right);

            return 1 + Math.max(left, right);
        }

        dfs(root);

        return diameter;
    }
}
