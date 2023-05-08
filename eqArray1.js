const assertEqual = function (actual, expected) {
    if (actual === expected) {
      console.log(`😄😄😄Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`😢😢😢Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  const eqArrays = function (array1, array2) {
    let result = false;

    for(let i = 0; i<array1.length; i++){
        if(Array.isArray(array1[i]) && Array.isArray(array2[i])){
            result = eqArrays(array1[i], array2[i]);
            if(!result){
                return false;
            }
        }else{
            if(array1[i] === array2[i]){
                result = true;
            }else{
                return false;
            }
        }
    }

    return true;
  };

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false