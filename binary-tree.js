/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (this.root === null) {
      return (0);
    }
    let toVisitQueue = [{ "node": this.root, "depth": 1 }];

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();

      if (current.node.left === null) {
        if (current.node.right === null) {
          return (current.depth);
        }
        else {
          toVisitQueue.push({ "node": current.node.right, "depth": (current.depth + 1) })
        }
      }
      else {
        if (current.node.right === null) {
          toVisitQueue.push({ "node": current.node.left, "depth": (current.depth + 1) })
        }
        else {
          toVisitQueue.push({ "node": current.node.left, "depth": (current.depth + 1) })
          toVisitQueue.push({ "node": current.node.right, "depth": (current.depth + 1) })
        }
      }
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    let maximumDepth = 0;

    if (this.root === null) {
      return (maximumDepth);
    }

    let toVisitQueue = [{ "node": this.root, "depth": 1 }];

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();

      if (current.node.left === null) {
        if (current.node.right === null) {
          if (current.depth > maximumDepth) {
            maximumDepth = current.depth;
          }
        }
        else {
          toVisitQueue.push({ "node": current.node.right, "depth": (current.depth + 1) })
        }
      }
      else {
        if (current.node.right === null) {
          toVisitQueue.push({ "node": current.node.left, "depth": (current.depth + 1) })
        }
        else {
          toVisitQueue.push({ "node": current.node.left, "depth": (current.depth + 1) })
          toVisitQueue.push({ "node": current.node.right, "depth": (current.depth + 1) })
        }
      }
    }

    return (maximumDepth);
  }


  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let result = 0;

    function helper(root) {
      if (root === null) {
        return (0);
      }

      let value = root.val;
      let left = helper(root.left);
      let right = helper(root.right);

      result = Math.max(result, value + left + right);
      return value + Math.max(left, right);
    }

    helper(this.root);
    return (result);
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;
    let queue = [this.root];
    let closest = null;

    while (queue.length) {
      let currentNode = queue.shift();
      let currentVal = currentNode.val;
      let higherThanLowerBound = currentVal > lowerBound;
      let shouldReassignClosest = currentVal < closest || closest === null;

      if (higherThanLowerBound && shouldReassignClosest) {
        closest = currentVal;
      }

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    return closest;
  }
  
  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
