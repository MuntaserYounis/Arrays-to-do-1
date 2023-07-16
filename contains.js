class Node {
    constructor(data) {
    this.data = data;
    this.next = null;
    }
}

class SLL {
    constructor() {
    this.head = null;
    }

    addFront(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;

    return this.head;
    }

    removeFront() {
    if (!this.head) {
        return null; // Empty list, return null
    }

    const removedNode = this.head;
    this.head = this.head.next;
    removedNode.next = null;

    return removedNode;
    }

    front() {
    if (!this.head) {
        return null; // Empty list, return null
    }

    return this.head.data;
    }

    contains(value) {
    let currentNode = this.head;

    while (currentNode) {
        if (currentNode.data === value) {
          return true; // Found the value
        }
        currentNode = currentNode.next;
    }

    return false;
    }
}
const SLL1 = new SLL();
SLL1.addFront(18);
SLL1.addFront(5);
SLL1.addFront(73);

console.log(SLL1.contains(5)); 
console.log(SLL1.contains(18)); 
console.log(SLL1.contains(73)); 
console.log(SLL1.contains(10)); 
