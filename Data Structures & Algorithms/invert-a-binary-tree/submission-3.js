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
     * @return {TreeNode}
     */
    invertTree(root) {
        // go level by level and swap the left and right of current node

        // start with 1 
        //  1 
        // 2 3
        // current node is one 
        // we pop 1 off queue
        // we then swap the left and right of them
        // as long as they are not null
        // then we can push the left and right to the queue
        // and repeate

        let q = new Queue();
        q.push(root)

        while (q.size() > 0) {
            let node = q.pop();

            if (!node) continue;
            console.log(node);
            let temp = node.right;
            node.right = node.left;
            node.left = temp;
            // [node.left, node.right] = [node.right, node.left];

            q.push(node.left);
            q.push(node.right);
            console.log(q);
        }

        return root;
    }
}
