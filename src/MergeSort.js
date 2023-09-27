let inputArr = [14, 3, 10, 45, 33, 41, 12, 4];

function mergeSortHelper(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j++;
    } else {
      result.push(arr1[i]);
      i++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

// mergeSortHelper([2, 4, 6, 8, 10], [1, 3, 5, 7, 9, 11]);

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let midPoint = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, midPoint));
  let right = mergeSort(arr.slice(midPoint));
  return mergeSortHelper(left, right);
}

let result = mergeSort(inputArr);
console.log("MERGE SORT RESULT--", result); // [3, 4, 10, 12, 14, 33, 41, 45]
