// FUNCTION IMPLEMENTATION
const eqArrays = require('./eqArray1');

const assertArraysEqual = function (array1, array2) {
  let compareResult = eqArrays(array1,array2);

  if (compareResult) {
    console.log(`😄😄😄Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`😢😢😢Assertion Failed: ${array1} !== ${array2}`);
  }
};

// const args = process.argv.slice(2);
// assertArraysEqual(args[0], args[1]);

module.exports = assertArraysEqual;

