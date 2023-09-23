class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  
  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      console.log("ADDED at ROOT--", this);
    } else {
      let current = this.root;
      while (true) {
        if (current.value > val) {
          if (!current.left) {
            current.left = newNode;
            console.log("ADDED at LEFT--", this);
            return;
          }
          current = current.left;
        } else if (current.value < val) {
          if (!current.right) {
            current.right = newNode;
            console.log("ADDED at RIGHT--", this);
            return;
          }
          current = current.right;
        } else {
          return;
        }
      }
    }
  }

  find(val) {
    if (this.root.value === val) {
      console.log("FOUND--", this.root);
    } else {
      let current = this.root;
      let found = false;
      while (!found && current) {
        if (current.value < val) {
          current = current.right;
        } else if (current.value > val) {
          current = current.left;
        } else if (current.value === val) {
          found = true;
          console.log("FOUND--", current);
          return;
        }
      }

      if (!found) {
        console.log("NOT FOUND--");
        return;
      }
    }
  }
}

let binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(5);
binarySearchTree.insert(15);
binarySearchTree.insert(3);
binarySearchTree.insert(4);
binarySearchTree.insert(25);
binarySearchTree.insert(8);
binarySearchTree.insert(1);

binarySearchTree.find(14);
binarySearchTree.find(10);
binarySearchTree.find(25);
binarySearchTree.find(5);
