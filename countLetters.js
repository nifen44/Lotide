const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😄😄😄Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😢😢😢Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (str) {
  let result = {};

  for (let letter of str) {
    result[letter] = result[letter] ? ++result[letter] : 1;
  }

  return result;
};

console.log(countLetters("Hello world!"));
