function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

emotions('happy', function(num) {
  let laughing = '';
  for (let i = 1; i <= num; i++) {
    laughing += 'ha';
  }
  laughing = laughing + '!';
  return laughing;
});