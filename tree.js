/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let sum = 0;
    let toVisitStack = [this.root];

    while (toVisitStack.length) {
      let current = toVisitStack.pop();
      if (current === null) {
        continue;
      }

      sum += current.val;

      for (let index = 0; index < current.children.length; index++) {
        toVisitStack.push(current.children[index]);
      }
    }

    return (sum);
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let count = 0;
    let toVisitStack = [this.root];

    while (toVisitStack.length) {
      let current = toVisitStack.pop();
      if (current === null) {
        continue;
      }

      if ((current.val % 2) === 0) {
        count++;
      }

      for (let index = 0; index < current.children.length; index++) {
        toVisitStack.push(current.children[index]);
      }
    }

    return (count);
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let count = 0;
    let toVisitStack = [this.root];

    while (toVisitStack.length) {
      let current = toVisitStack.pop();
      if (current === null) {
        continue;
      }

      if (current.val > lowerBound) {
        count++;
      }

      for (let index = 0; index < current.children.length; index++) {
        toVisitStack.push(current.children[index]);
      }
    }

    return (count);
  }
}

module.exports = { Tree, TreeNode };
