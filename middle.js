// FUNCTION IMPLEMENTATION
const assertArraysEqual = function (array1, array2) {
  let compareResult = true;

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

const middle = function (array) {
  if (array.length <= 2) {
    return [];
  } else {
    if (array.length % 2 === 0) {
      console.log(`even length ${array.slice(array.length / 2 - 1, 3)}`);
      return array.slice(array.length / 2 - 1, 3);
    } else {
      console.log(`odd length ${array.slice(array.length / 2 - 1, 1)}`);
      return array.slice(
        Math.floor(array.length / 2),
        Math.ceil(array.length / 2)
      );
    }
  }
};

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
