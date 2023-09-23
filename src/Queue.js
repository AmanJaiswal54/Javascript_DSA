class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  
  // either we can use push/shift or unshift/pop methods to follow First In First Out [FIFO] for QUEUE.
  
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    console.log("ENQUEUE/PUSH--", this);
  }
  dequeue() {
    if (this.size <= 0) {
      console.log("Negative Index not allowed");
      return;
    }
    if (this.size === 1) {
      this.last = null;
    }
    let current = this.first;
    let temp = current.next;
    this.first = temp;
    current.next = null;
    this.size--;
    console.log("DEQUEUE/SHIFT--", this);
  }
}

let queue1 = new Queue();
queue1.enqueue(2);
queue1.enqueue(4);
queue1.enqueue(6);
queue1.enqueue(8);
queue1.dequeue();
queue1.dequeue();
