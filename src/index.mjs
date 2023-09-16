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
      console.log('Empty'); 
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

  shift() {
    if(!this.length) {
      console.log('Empty'); 
      return;
    }
    if(this.length === 1) {
      this.tail = null;
    }
    let current = this.head;
    this.head = current.next;
    this.length--;
    console.log('Shift--', this);
  }

  unshift(val) {
    let newNode = new Node(val);
    let current = this.head;
    this.head = newNode;
    newNode.next = current;
    this.length++;
    console.log('Unshift--', this);
  }

  get(index) {
    if(index<0) {
      console.log('Negative index not present');
      return;
    }
    if(index >= this.length) {
      console.log('index is greater than length of linked list');
      return;
    }
    let count = 0;
    let current = this.head;
    while(index !== count && current.next) {
      current = current.next;
      count++;
    }
    console.log('Get--', current);
    return current;
  }

  set(index, value) {
    let current = this.get(index);
    current.val = value;
    console.log('Set--', this);
  }

  insert(index, value) {
    let newNode = new Node(value);
    let prev = this.get(index-1);
    let current = prev.next;
    prev.next = newNode;
    newNode.next = current;
    this.length++;
    console.log('Insert--', this);
  }

  remove(index) {
    let prev = this.get(index-1);
    let current = prev.next;
    let nextNode = current.next;
    prev.next = nextNode;
    this.length--;
    console.log('Remove--', this);
  }
}

let linkedList = new SingleLL();
linkedList.push(12);
linkedList.push(22);
linkedList.push(32);
linkedList.push(42);
linkedList.pop();
linkedList.shift();
linkedList.unshift(12);
linkedList.unshift(2);
linkedList.get(2);
linkedList.set(3, 42);
linkedList.insert(3, 32);
linkedList.remove(2);
