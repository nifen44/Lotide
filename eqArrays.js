// FUNCTION IMPLEMENTATION

const eqArrays = function (array1, array2) {
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

  return compareResult;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), true);


