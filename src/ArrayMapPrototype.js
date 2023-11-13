let arr = [2, 5, 12, 30, 25, 40];
let multipier = 2;

Array.prototype.myOwnMapMultiplier = function (arg) {
  let result = [];
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * arg);
  }
  return result;
};
let result = arr.myOwnMapMultiplier(multipier);
console.log("result 1", result);

result = arr.myOwnMapMultiplier(3);
console.log("result 2", result);

result = arr.myOwnMapMultiplier(5);
console.log("result 3", result);
