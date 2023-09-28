let inputArr = [14, 3, 10, 45, 33, 41, 12, 4];

function BubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

let result = BubbleSort(inputArr);
console.log('BUBBLE SORT RESULT--', result); // [3, 4, 10, 12, 14, 33, 41, 45]
