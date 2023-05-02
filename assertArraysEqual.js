// FUNCTION IMPLEMENTATION
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

const args = process.argv.slice(2);
assertion(args[0], args[1]);
