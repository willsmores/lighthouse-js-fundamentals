const concat = function(arr1, arr2) {
  const combinedArray = [];
  for (let i = 0; i < arr1.length; i++) {
    combinedArray.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    combinedArray.push(arr2[i]);
  }
  return combinedArray;
}

concat([ 0, 3, 1 ], [ 9, 7, 2 ]);