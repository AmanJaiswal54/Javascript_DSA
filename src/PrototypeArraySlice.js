let arr = [2, 5, 12, 30, 25, 40];

Array.prototype.myOwnSlice = function (lowerLimit, upperLimit) {
  let result = [];
  let arr = this;
  
  // scenario is pending, if upperLimit or lowerLimit is -ve.
  
  if (upperLimit > lowerLimit) {
    for (let i = lowerLimit; i < upperLimit; i++) {
      result.push(arr[i]);
    }
    return result;
  } else if (!upperLimit && lowerLimit < arr.length) {
    for (let i = lowerLimit; i < arr.length; i++) {
      result.push(arr[i]);
    }
    return result;
  } else {
    return ["INVALID INPUT"];
  }
};

let result = arr.myOwnSlice(6);
console.log("result 1", result);
