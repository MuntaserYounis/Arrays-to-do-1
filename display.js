// Display
// Use classes, attributes, and methods in the JavaScript language for this challenge. 
// Use only a single JavaScript file for this assignment, it may be the same from the Fronts assignment. 
// All examples are done in order, starting with a new instance of the SLL class.

// Create display() that uses a while loop and a runner to return a string containing all list values.
//  Build what you wish console.log(myList) did!

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




    display() {
    let values = "";
    let currentNode = this.head;

    while (currentNode) {
        values += currentNode.data + ", ";
        currentNode = currentNode.next;
    }
    return values;
    }
}

const SLL1 = new SLL();
SLL1.addFront(76);
SLL1.addFront(2);
console.log(SLL1.display()); 

SLL1.addFront(11.41);
console.log(SLL1.display()); 
