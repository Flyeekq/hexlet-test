var _ = require("lodash");

const text1 = "";
const text2 = "one two three two ONE one wow";
const text3 = "another one sentence with strange Words words";
const countWords = (text) => {
  let result = {};
  if (text === "") {
    return result;
  } else {
    let wordsArr = _.words(text.toLowerCase());
    for (let i = 0; i < wordsArr.length; i += 1) {
      result[wordsArr[i]] = result[wordsArr[i]] + 1 || 1;
    }
    return result;
  }
};

console.log(countWords(text1));
console.log(countWords(text2));
console.log(countWords(text3));