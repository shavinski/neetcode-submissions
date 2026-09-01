/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */

    cloneGraph(node) {
        const oldNew = new Map();
        return this.dfs(node, oldNew);
    }
       
    dfs(node, oldNew) {
        if (node === null) return null;

        if (oldNew.has(node)) {
            return oldNew.get(node);
        }

        const copy = new Node(node.val);
        oldNew.set(node, copy);

        for (const n of node.neighbors) {
            copy.neighbors.push(this.dfs(n, oldNew));
        }

        return copy;
    }
}
