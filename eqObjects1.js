const assertEqual = function (actual, expected) {
    if (actual === expected) {
      console.log(`😄😄😄Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`😢😢😢Assertion Failed: ${actual} !== ${expected}`);
    }
  };

const eqObjects = function (object1, object2) {
    
    let result = false;
    for(const ele in object1){
        if(typeof(object1[ele]) === 'object' && typeof(object2[ele]) === 'object'){
            result = eqObjects(object1[ele],object2[ele]);
            if(!result){
                return false;
            }
        }else{
            if(object1[ele] === object2[ele]){
                result = true;
            }else{
                return false;
            }
        }
    }

    return true;
  };

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false