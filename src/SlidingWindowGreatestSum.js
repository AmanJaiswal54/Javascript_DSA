function slidingWindowGreatestSum(arr, windowSize) {
  let sum = 0;
  if (!Array.isArray(arr) || !arr.length) {
    console.log("ARRAY IS NOT PRESENT");
    return;
  }
  for (let i = 0; i < windowSize; i++) {
    sum = sum + arr[i];
  }
  let temp = sum;
  for (let i = windowSize; i < arr.length; i++) {
    temp = temp + arr[i] - arr[i - windowSize];
    sum = Math.max(temp, sum);
  }

  console.log("GREATEST SUM RESULT", sum);
}
slidingWindowGreatestSum([2, 5, 4, 11, -6, 3], 3);
