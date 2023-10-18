class HashTable {
  constructor(length = 7) {
    this.length = length;
    this.arr = new Array(this.length);
  }
  _hash(key, value) {
    let total = 0;
    let CONST_NUM = 96;
    let PRIME_NUM = 31;
    let length = key.length;
    for (let i = 0; i < length; i++) {
      total =
        (total * PRIME_NUM + (key[i].charCodeAt(0) - CONST_NUM)) % this.length;
    }
    if (!this.arr[total]) {
      this.arr[total] = [];
    }
    this.arr[total].push([key, value]);
    console.log("this.arr[total]", this.arr);
  }
}

let hashInstance = new HashTable(10);
hashInstance._hash("cyan", "#000");
hashInstance._hash("red", "#001");
hashInstance._hash("yellow", "#002");
hashInstance._hash("blue", "#003");
hashInstance._hash("maroon", "#004");
hashInstance._hash("orange", "#005");
hashInstance._hash("purple", "#006");
hashInstance._hash("black", "#007");
hashInstance._hash("pink", "#008");
hashInstance._hash("green", "#009");
hashInstance._hash("grny", "#010");
