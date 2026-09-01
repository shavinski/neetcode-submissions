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
     * @return {number[][]}
     */
    levelOrder(root) {
        // input array of numbers
        // out put 2d array of levels of the tree

        // check if our root is null
        // if it is return empty array
        // else 
        // put our root onto a queue 

        // result array
        // while queue has length
        // start loop, end at queue length
        // array for current level, 
        // pop of our node, use to reference
        // check left, if not null
        // push to queue
        // check right
        // push to queue

        // return our result array

        const result = [];  // []

        if (root === null) {
            return result;
        }

        const q = new Queue();  // [2, 3]
        q.push(root);

        while (!q.isEmpty()) {
            let subArr = []; // [2, 3]

            for (let i = q.size(); i > 0; i--) {       // i < 2
                let node = q.pop();                    // node = 1 

                if (node !== null) {
                    subArr.push(node.val);
                    q.push(node.left);
                    q.push(node.right);
                }
            }

            if (subArr.length > 0) {
                result.push(subArr);
            }
        }

        return result;
    }
}
