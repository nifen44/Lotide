const eqObjects = function (object1, object2) {
  const objArr1 = Object.entries(object1);
  const objArr2 = Object.entries(object2);

  // console.log(objArr1);
  // console.log(objArr2);

  let isSame = false;
  if (objArr1.length == objArr2.length) {
    objArr1.forEach((ele) => {
      isSame = objArr2.some((subarr) => subarr.every((v, i) => v === ele[i]));
    });
  }

  return isSame;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  // Implement me!
  //   const inspect = require("util").inspect;

  //   console.log(`Example label: ${inspect(actual)}`);

  if (eqObjects(actual, expected)) {
    console.log(`🥰🥰🥰Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😵😵😵Assertion Failed: ${actual} !== ${expected}`);
  }
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};

assertObjectsEqual(shirtObject, longSleeveShirtObject);
assertObjectsEqual(shirtObject, anotherShirtObject);
