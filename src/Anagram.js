function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    console.log("NOT A ANAGRAM");
    return;
  }
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    if (obj1[letter]) {
      obj1[letter]++;
    } else {
      obj1[letter] = 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str1[i];
    if (obj2[letter]) {
      obj2[letter]++;
    } else {
      obj2[letter] = 1;
    }
  }

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    if (obj2[letter]) {
      obj2[letter]--;
    }
  }

  if (!Object.keys(obj2).length) {
    console.log("ITS A ANAGRAM");
  } else {
    console.log("NOT A ANAGRAM");
  }
}

anagram("cheater", "teacher");
