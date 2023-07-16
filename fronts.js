
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
}

const SLL1 = new SLL();
SLL1.addFront(18);
console.log(SLL1.front()); // 18

SLL1.removeFront();
console.log(SLL1.front()); 

SLL1.addFront(18)
console.log(SLL1.addFront());