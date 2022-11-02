const lastIndexOf = function (array, value) {
  //iterate through array from end to start
  for (let i = array.length; i >= 0; i--) {
    if (array[i] === value) {
      return i;
    }
  }  
  return -1; // if no matching value
}

console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);