class Node {
    constructor(data) {
    this.data = data;
    this.next = null;
    }
}

class SLL {
    addFront(value) {
        const newNode = new Node(value);
    
        newNode.next = this.head;
        this.head = newNode;
    
        return this.head;
    }
    constructor() {
    this.head = null;
    }
    length() {
        let count = 0;
        let currentNode = this.head;
    
        while (currentNode) {
        count++;
        currentNode = currentNode.next;
        }
    
        return count;
    }
    }

    const SLL1 = new SLL();
SLL1.addFront(18);
SLL1.addFront(5);
SLL1.addFront(73);

console.log(SLL1.length()); 
