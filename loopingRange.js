const range = function (start, end, step) {
  const rangeArray = []; // make empty array
  if ((start || end || step ) && (start < end) && (step > 0)) { // checking the parameters
    for (let i = start; i <= end; i += step) {
      rangeArray.push(i);
    } 
  }
  return rangeArray;
}

console.log(range(10, 30, 5));