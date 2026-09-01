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
     * @return {boolean}
     */
    // isBalanced(root) {
    //     if (root === null) return true;

    //     let leftDiff = this.dfs(root.left);
    //     let rightDiff = this.dfs(root.right);

    //     console.log("Left: ", leftDiff, "Right: ", rightDiff);

    //     return Math.abs(leftDiff - rightDiff) < 2;
    // }

    // dfs(curr) {
    //     if (curr === null) {
    //         return 0;
    //     }

    //     return (
    //         1 + Math.max(this.dfs(curr.left), this.dfs(curr.right))
    //     );
    // }

    isBalanced(root) {
        return this.dfs(root) !== -1;
    }

    dfs(curr) {
        if (curr === null) {
            return 0; // Base case: empty tree has a height of 0
        }

        let leftHeight = this.dfs(curr.left);
        if (leftHeight === -1) return -1; // Left subtree is unbalanced

        let rightHeight = this.dfs(curr.right);
        if (rightHeight === -1) return -1; // Right subtree is unbalanced

        // If the current node is unbalanced, return -1
        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }

        // Otherwise, return the height of the subtree rooted at this node
        return 1 + Math.max(leftHeight, rightHeight);
    }
}
