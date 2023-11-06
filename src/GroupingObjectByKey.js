let initialArr = [
  {
    name: "Alice",
    age: 30
  },
  {
    name: "Charlie",
    age: 30
  },
  {
    name: "Bob",
    age: 25
  },
  {
    name: "David",
    age: 25
  }
];

function groupingObjectByKey(initialArr, keyName) {
  let resultObj = {};
  for (let i = 0; i < initialArr.length; i++) {
    let obj = initialArr[i];
    if (!resultObj[obj[keyName]]) {
      resultObj[obj[keyName]] = [obj];
    } else {
      resultObj[obj[keyName]].push(obj);
    }
  }
  console.log("resultObj", resultObj);
}

groupingObjectByKey(initialArr, "age");




