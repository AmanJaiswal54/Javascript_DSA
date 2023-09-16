class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLL {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    let newNode = new Node(val);
    if(!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    console.log('Push--', this);
  }

  pop() {
    if(!this.length) {
      console.log(''); 
      return;
    }
    let current = this.head;
    let temp = current;
    while(current.next) {
      temp=current;
      current = current.next;
    }
    this.tail = temp;
    this.tail.next = null;
    this.length--;
    console.log('Pop--', this);
  }
}

let linkedList = new SingleLL();
linkedList.push(12);
linkedList.push(22);
linkedList.push(32);
linkedList.push(42);
linkedList.pop();