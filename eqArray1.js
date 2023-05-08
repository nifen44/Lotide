
  
  const eqArrays = function (array1, array2) {
    let result = false;

    for(let i = 0; i<array1.length; i++){
        if(array1.length === array2.length){
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
      }else{
        return false;
      }
        
    }

    return true;
  };

  module.exports = eqArrays;
 // TEST


