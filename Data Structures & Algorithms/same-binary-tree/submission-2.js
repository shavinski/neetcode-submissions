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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        // do bfs? 
        // check each level is equal to one another?

        let pQueue = new Queue();
        let qQueue = new Queue();

        pQueue.push(p);
        qQueue.push(q);

        // edit break case
        while (!pQueue.isEmpty() && !qQueue.isEmpty()) {
            let node1 = pQueue.pop();
            let node2 = qQueue.pop();

            if (node1 === null && node2 === null) continue;
            if (node1 === null || node2 === null || node1.val !== node2.val) return false;

            pQueue.push(node1.left)
            pQueue.push(node1.right)
            qQueue.push(node2.left)
            qQueue.push(node2.right)
        }

        return true;
    }
}
