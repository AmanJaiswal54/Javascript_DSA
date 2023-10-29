function flattenObject(obj) {
  let resultObj = {};
  let str = "";
  function helper(obj) {
    if (
      obj[Object.keys(obj)] !== null &&
      typeof obj[Object.keys(obj)] === "object" &&
      !Array.isArray(obj[Object.keys(obj)])
    ) {
      str = str + `${Object.keys(obj)}_`;
      helper(obj[Object.keys(obj)]);
    } else {
      Object.keys(obj);
      resultObj[`${str}${Object.keys(obj)}`] = obj[Object.keys(obj)];
    }
  }
  helper(obj);
  console.log("result", resultObj);
}

flattenObject({ a: { b: { c: 3 } } }); // {a_b_c: 3}
