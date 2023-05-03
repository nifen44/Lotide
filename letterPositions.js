const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😄😄😄Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😢😢😢Assertion Failed: ${actual} !== ${expected}`);
  }
};

const assertion = function (array1, array2) {
  const compareResult = true;

  if (array1.length !== array2.length) {
    compareResult = false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        compareResult = false;
        break;
      }
    }
  }

  if (compareResult) {
    console.log(`😄😄😄Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`😢😢😢Assertion Failed: ${array1} !== ${array2}`);
  }
};

// ("lighthouse in the house")
// {
//     l: [0],
//     i: [1, 11],
//      ........
// }
const letterPositions = function (sentence) {
  const results = {};

  let i = 0;
  // logic to update results here
  for (let letter of sentence) {
    if (results[letter]) {
      console.log(letter);
      console.log(sentence);
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
    i++;
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));
