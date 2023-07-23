class BTNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    // BST: Add
    // Create an add(val) method on the BST object to add new value to the tree. 
    // This entails creating a BTNode with this value and connecting it at the appropriate place in the tree. 
    // Unless specified otherwise, BSTs can contain duplicate values.
    add(val) {
        const newNode = new BTNode(val);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.val < node.val) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
    // BST: Contains
    // Create a contains(val) method on BST that returns whether the tree contains a given value.
    //  Take advantage of the BST structure to make this a much more rapid operation than SList.
    //  contains() would be.
    contains(val) {
        return this.search(this.root, val);
    }

    search(node, val) {
        if (node === null) {
            return false;
        }

        if (node.val === val) {
            return true;
        } else if (val < node.val) {
            return this.search(node.left, val);
        } else {
            return this.search(node.right, val);
        }
    }
    // BST: Min
    // Create a min() method on the BST class that returns the smallest value found in the BST.
    min() {
        if (!this.root) {
            return null;
        }

        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.val;
    }

    max() {
        if (!this.root) {
            return null;
        }

        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.val;
    }

    size() {
        return this.countNodes(this.root);
    }

    countNodes(node) {
        if (node === null) {
            return 0;
        }
        return 1 + this.countNodes(node.left) + this.countNodes(node.right);
    }

    isEmpty() {
        return this.root === null;
    }
}

// MY examples
const exa = new BST();
exa.add(10);
exa.add(5);
exa.add(15);
exa.add(3);
exa.add(7);
exa.add(12);
exa.add(17);

console.log(exa.contains(12)); 
console.log(exa.contains(8)); 
console.log(exa.min()); 
console.log(exa.max()); 
console.log(exa.size());
console.log(exa.isEmpty());
