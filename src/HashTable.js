// HashTable - Hashing a key into array indices

class HashTable {
  constructor(length = 7) {
    this.length = length;
    this.arr = new Array(this.length);
  }
  _hash(key) {
    let total = 0; // total is equal to index of array arr.
    let CONST_NUM = 96;
    let PRIME_NUM = 31;
    let length = key.length;
    for (let i = 0; i < length; i++) {
      total =
        (total * PRIME_NUM + (key[i].charCodeAt(0) - CONST_NUM)) % this.length;
    }
    return total;
  }
  set(key, value) {
    const index = this._hash(key);

    // using Seperate_Chaining strategy we are storing the array of [key, value] into final array.
    if (!this.arr[index]) {
      this.arr[index] = [];
    }
    this.arr[index].push([key, value]);
    console.log("result", this.arr);
  }
  get(key) {
    const index = this._hash(key);
    console.log("index", index);
    // return index;
  }
}

let hashInstance = new HashTable(10);
hashInstance.set("cyan", "#000");
hashInstance.set("red", "#001");
hashInstance.set("yellow", "#002");
hashInstance.set("blue", "#003");
hashInstance.set("maroon", "#004");
hashInstance.set("orange", "#005");
hashInstance.set("purple", "#006");
hashInstance.set("black", "#007");
hashInstance.set("pink", "#008");
hashInstance.set("green", "#009");
hashInstance.set("grny", "#010");
hashInstance.set("a", "#011"); // index 1
hashInstance.set("e", "#012"); // set to index 5 of array

hashInstance.get("black");
hashInstance.get("e"); // will return index 5
