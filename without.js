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

const without = function (array1, array2) {
  return array1.filter((ele) => {
    return array2.indexOf(ele) !== 0;
  });
  8;
};

const words = ["hello", "world", "lighthouse"];
//without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(without(words, ["lighthouse"]), [
  "hello",
  "world",
  "lighthouse",
]);
