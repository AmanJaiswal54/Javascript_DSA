function flatten(arr) {
  let result_arr = [];

  function helper(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (!Array.isArray(arr[i])) {
        result_arr.push(arr[i]);
      } else {
        helper(arr[i]);
      }
    }
  }
  helper(arr);
  console.log("result_arr", result_arr);

  //method 2: using inbuilt array method
  // console.log(arr.flat(Infinity));
}

flatten([1, [2, [3, 4]]]);   // [1,2,3, 4]
