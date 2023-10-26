function removeDuplicate(arr) {
  let obj = {};
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }

  console.log(Object.keys(obj)); //  ["1", "3", "5", "7", "8"]
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    for (let j = 0; j < Math.min(obj[keys[i]], 2); j++) {
      resultArr.push(keys[i]);
    }
  }
  console.log("RESULT", resultArr);
}
removeDuplicate([1, 1, 1, 1, 3, 3, 3, 5, 7, 7, 7, 7, 7, 8]); // ["1", "1", "3", "3", "5", "7", "7", "8"]
