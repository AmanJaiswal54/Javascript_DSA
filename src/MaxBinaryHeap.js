class BinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    this.values.push(val);
    this.bubbleUpHelper();
    console.log("insert", this.values);
  }
  bubbleUpHelper() {
    let insertedIndex = this.values.length - 1;
    let insertedElement = this.values[insertedIndex];
    while (insertedIndex > 0) {
      let parentIndex = Math.floor((insertedIndex - 1) / 2);
      let parentElement = this.values[parentIndex];
      if (insertedElement < parentElement) {
        break;
      }
      this.values[insertedIndex] = parentElement;
      this.values[parentIndex] = insertedElement;
      insertedIndex = parentIndex;
    }
  }
  // remove method
  extractMax() {
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
      if (leftElement < rightElement) {
        maxChildElement = rightElement;
        maxChildIndex = rightIndex;
      }
      if (maxChildElement < lastElement) {
        break; // break the loop is no swapping
      }
      this.values[currIndex] = maxChildElement;
      this.values[maxChildIndex] = lastElement;
      currIndex = maxChildIndex;
    }
  }
}

let instance = new BinaryHeap();
instance.insert(55);
instance.insert(61);
instance.insert(39);
instance.insert(14);
instance.insert(6);
instance.insert(17);
instance.insert(25);
instance.insert(75);
instance.insert(35);

instance.extractMax();
instance.extractMax();
instance.extractMax();
instance.extractMax();
