class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    // basically its a unshift method of SinglyLL to get constant Omega(1) time complexity
    let newNode = new Node(val);
    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let current = this.first;
      this.first = newNode;
      newNode.next = current;
    }
    this.size++;
    console.log("PUSH__", this);
  }

  pop() {
    // basically its a unshift method of SinglyLL to get constant Omega(1) time complexity
    if (this.size <= 0) {
      console.log("Negative Index not allowed");
      return;
    }
    let current = this.first;
    let temp = current.next;
    this.first = temp;
    current.next = null;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    }
    this.size--;
    console.log("POP--", this);
  }
}

let stack1 = new Stack();
stack1.push(2);
stack1.push(4);
stack1.push(6);
stack1.push(8);
stack1.pop();
stack1.pop();
