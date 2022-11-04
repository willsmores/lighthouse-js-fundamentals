const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness';

const judgeVegetable = function(arr, metric) {
  if (metric === 'redness') {
     // sort based on value of redness key
    arr.sort((a,b) => (a.redness < b.redness ? 1 : -1));
    // return submitter in first item in array
    return arr[0].submitter;
  }
  if (metric === 'plumpness') {
    // sorts based on value of plumpness key
    arr.sort((a,b) => (a.plumpness < b.plumpness ? 1 : -1));
    // return submitter in first item in array
    return arr[0].submitter;
  }
};

console.log(judgeVegetable(vegetables, metric));