class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    this.values.push(val);
    this.bubbleUp();
    console.log("insert", this.values);
  }
  bubbleUp() {
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
}

let instance = new MaxBinaryHeap();
instance.insert(55);
instance.insert(61);
instance.insert(39);
instance.insert(14);
instance.insert(6);
instance.insert(17);
instance.insert(25);
instance.insert(75);
instance.insert(35);
