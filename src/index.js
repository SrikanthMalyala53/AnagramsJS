let str1 = "fired";
let str2 = "fried";

const areAnagrams = (str1, str2) => {
  if (str1.length === str2.length) {
    let sortedStr1 = str1.split("").sort().join("");
    let sortedStr2 = str2.split("").sort().join("");
    if (sortedStr1 === sortedStr2) {
      return true;
    }
  } else {
    return false;
  }
};

let myObj2 = areAnagrams(str1, str2);
console.log(myObj2);
