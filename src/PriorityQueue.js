class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

// MinBinaryHeap/PriorityQueue - lower the priority number, higher the priority.
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  
  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUpHelper();
    console.log("insert", this.values);
  }
  bubbleUpHelper() {
    let insertedIndex = this.values.length - 1;
    let insertedElement = this.values[insertedIndex];
    while (insertedIndex > 0) {
      let parentIndex = Math.floor((insertedIndex - 1) / 2);
      let parentElement = this.values[parentIndex];
      if (insertedElement.priority > parentElement.priority) {
        break;
      }
      this.values[insertedIndex] = parentElement;
      this.values[parentIndex] = insertedElement;
      insertedIndex = parentIndex;
    }
  }
  
  dequeue() {
    this.tickleDownHelper();
    console.log("remove", this.values);
  }
  tickleDownHelper() {
    let currIndex = 0;
    let rootElement = this.values[currIndex];
    console.log("popped", rootElement);
    let lastElement = this.values.pop();
    this.values[currIndex] = lastElement;
    while (true) {
      let leftIndex = 2 * currIndex + 1;
      let leftElement = this.values[leftIndex];
      let rightIndex = 2 * currIndex + 2;
      let rightElement = this.values[rightIndex];

      if (!leftElement || !rightElement) {
        break;
      }

      let maxChildElement = leftElement;
      let maxChildIndex = leftIndex;
      if (leftElement.priority > rightElement.priority) {
        maxChildElement = rightElement;
        maxChildIndex = rightIndex;
      }
      if (maxChildElement.priority > lastElement.priority) {
        break; // break the loop is no swapping
      }
      this.values[currIndex] = maxChildElement;
      this.values[maxChildIndex] = lastElement;
      currIndex = maxChildIndex;
    }
  }
}

let instance = new PriorityQueue();
instance.enqueue(55, 1);
instance.enqueue(61, 2);
instance.enqueue(39, 3);
instance.enqueue(14, 4);
instance.enqueue(6, 1);
instance.enqueue(17, 2);
instance.enqueue(25, 3);
instance.enqueue(75, 4);
instance.enqueue(35, 1);

instance.dequeue();
instance.dequeue();
instance.dequeue();
instance.dequeue();
instance.dequeue();
instance.dequeue();
instance.dequeue();
instance.dequeue();
