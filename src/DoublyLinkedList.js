class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let endNode = this.tail;
      endNode.next = newNode;
      newNode.prev = endNode;
      this.tail = newNode;
    }
    this.length++;
    console.log("PUSH--", this);
  }
  pop() {
    if (this.length <= 0) {
      console.log("Negative index not present");
      return;
    }
    let endNode = this.tail;
    let secondLastNode = endNode.prev;
    secondLastNode.next = null;
    endNode.prev = null;
    this.tail = secondLastNode;
    this.length--;
    console.log("POP--", this);
  }
  unshift(val) {
    let newNode = new Node(val);
    let startNode = this.head;
    startNode.prev = newNode;
    newNode.next = startNode;
    this.head = newNode;
    this.length++;
    console.log("UNSHIFT--", this);
  }
  shift() {
    if (this.length <= 0) {
      console.log("Negative index not present");
      return;
    }
    let startNode = this.head;
    let secondNode = startNode.next;
    startNode.next = null;
    secondNode.prev = null;
    this.head = secondNode;
    this.length--;
    console.log("SHIFT--", this);
  }
  get(index) {
    if (index >= this.length) {
      console.log("Index is greater than length of LL");
      return;
    }
    if (index < 0) {
      console.log("Negative index not present");
      return;
    }
    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
    console.log("GET--", current);
    return current;
  }

  set(index, value) {
    let currentNode = this.get(index);
    currentNode.value = value;
    console.log("SET--", currentNode);
  }
}

let doublyLL = new DoublyLinkedList();
doublyLL.push(1);
doublyLL.push(3);
doublyLL.push(5);
doublyLL.push(7);
doublyLL.pop();
doublyLL.unshift(7);
doublyLL.unshift(9);
doublyLL.shift();
doublyLL.get(2);
doublyLL.set(2, 10);
