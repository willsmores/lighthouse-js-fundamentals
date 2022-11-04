const smartGarbage = function (trash, bins) {
  switch (trash) {
  case 'recycling':
    bins.recycling++;
    break;
  case 'waste':
    bins.waste++;
    break;
  case 'compost':
    bins.compost++;
    break;
  default:
    return 'Please enter a valid type.'
  }
  return bins;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));