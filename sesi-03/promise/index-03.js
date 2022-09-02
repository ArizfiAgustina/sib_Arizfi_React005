import _, { map } from "underscore";

const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

var arrayOfNumeric = [35, 2, 90, 3, 55, 42, 88, 1, 23, 10, 5];

function makeAllCaps(arrayOfWords) {
  return new Promise((resolve, reject) => {
    let newWords = arrayOfWords.map((f) => {
      return f.toUpperCase();
    });

    if (newWords) resolve(newWords);
    else reject("terjadi error");
  });
}

function sortWords(arrayOfWords) {
  return new Promise((resolve, reject) => {
    let newWords = arrayOfWords.sort((a, b) => a.localeCompare(b));
    if (newWords) resolve(newWords);
    else reject("terjadi error");
  });
}

function sortNum(myArray) {
  return new Promise((resolve, reject) => {
    let descNum = _.sortBy(myArray).reverse();
    if (descNum) resolve(descNum);
    else reject("terjadi error");
  });
}

async function callCaps() {
  let resultCaps = await makeAllCaps(arrayOfWords);
  console.log("caps lock : " + resultCaps);

  let resultSort = await sortWords(resultCaps);
  console.log("caps lock with sort words : " + resultSort);

  let resultNum = await sortNum(arrayOfNumeric);
  console.log("caps lock with sort numeric : " + resultNum);
}

callCaps();
