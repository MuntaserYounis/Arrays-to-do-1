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
    
    max() {
        if (!this.head) {
          return null; // Empty list, return null
        }
    
        let maxValue = Number.NEGATIVE_INFINITY;
        let currentNode = this.head;
    
        while (currentNode) {
        if (currentNode.data > maxValue) {
            maxValue = currentNode.data;
        }
        currentNode = currentNode.next;
        }
    
        return maxValue;
    }
    min(node) {
        if (!node) {
          return null; // Invalid node, return null
        }
    
        let minValue = Number.POSITIVE_INFINITY;
        let currentNode = node;
    
        while (currentNode) {
        if (currentNode.data < minValue) {
            minValue = currentNode.data;
        }
        currentNode = currentNode.next;
        }
    
        return minValue;
    }
    average() {
        if (!this.head) {
          return null; // Empty list, return null
        }
    
        let sum = 0;
        let count = 0;
        let currentNode = this.head;
    
        while (currentNode) {
        sum += currentNode.data;
        count++;
        currentNode = currentNode.next;
        }
    
        const average = sum / count;
        return average;
    }
}
//max
    const SLL1 = new SLL();
    SLL1.addFront(76);
    SLL1.addFront(2);
    SLL1.addFront(100);
    SLL1.addFront(42);
    //min
    const node1 = SLL1.addFront(76);
    const node2 = SLL1.addFront(2);
    const node3 = SLL1.addFront(100);
    const node4 = SLL1.addFront(42);

    console.log(SLL1.max()); 
    console.log(SLL1.min(node4));
    //avg (should be 55)
    const SLL2 = new SLL();
    SLL2.addFront(76);
    SLL2.addFront(2);
    SLL2.addFront(100);
    SLL2.addFront(42);

    console.log(SLL2.average()); 
