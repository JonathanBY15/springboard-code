class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */
  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */
  insertRecursively(val, current = this.root) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    if (val < current.val) {
      if (current.left === null) {
        current.left = new Node(val);
        return this;
      } else {
        return this.insertRecursively(val, current.left);
      }
    } else {
      if (current.right === null) {
        current.right = new Node(val);
        return this;
      } else {
        return this.insertRecursively(val, current.right);
      }
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */
  find(val) {
    let current = this.root;

    while (current) {
      if (val === current.val) return current;
      if (val < current.val) current = current.left;
      else current = current.right;
    }

    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */
  findRecursively(val, current = this.root) {
    if (current === null) return undefined;

    if (val === current.val) return current;

    if (val < current.val) {
      return this.findRecursively(val, current.left);
    } else {
      return this.findRecursively(val, current.right);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */
  dfsPreOrder() {
    let visited = [];
    function traverse(node) {
      visited.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */
  dfsInOrder() {
    let visited = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */
  dfsPostOrder() {
    let visited = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.val);
    }
    traverse(this.root);
    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */
  bfs() {
    let node = this.root,
      queue = [],
      visited = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      visited.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */
  remove(val) {
    // Implementation needed
  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */
  isBalanced() {
    function height(node) {
      if (!node) return 0;
      return 1 + Math.max(height(node.left), height(node.right));
    }

    function checkBalance(node) {
      if (!node) return true;

      let leftHeight = height(node.left);
      let rightHeight = height(node.right);

      if (Math.abs(leftHeight - rightHeight) > 1) return false;

      return checkBalance(node.left) && checkBalance(node.right);
    }

    return checkBalance(this.root);
  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */
  findSecondHighest() {
    if (!this.root || (!this.root.left && !this.root.right)) {
      return undefined;
    }

    let current = this.root;
    while (current.right && current.right.right) {
      current = current.right;
    }

    if (!current.right) {
      return this.findMax(current.left);
    }

    if (!current.right.left) {
      return current.val;
    }

    return this.findMax(current.right.left);
  }

  /** Helper function to find max value */
  findMax(node) {
    while (node.right) {
      node = node.right;
    }
    return node.val;
  }
}

module.exports = BinarySearchTree;
