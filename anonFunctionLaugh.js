var laughing = '';

var laugh = function(num) {
  for (let i = 1; i <= num; i++) {
    laughing += 'ha';
  }
  laughing = laughing + '!';
  return laughing;
}

console.log(laugh(3));