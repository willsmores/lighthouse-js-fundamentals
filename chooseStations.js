// array of stations
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

// const chooseStations = function (stations) {
//   let goodStations = []; // new empty array to hold the good stations
//   for (let i = 0; i < stations.length; i++) { // iterate through top array
//     for (let j = 0; j < stations[i].length; j++) { // iterate through inner array
//       if (stations[j][1] >= 20 && (stations[j][2] === 'school' || stations[j][2] === 'community centre')) {
//         goodStations.push(stations[j][0]); // populate the empty array
//       } 
//     }
//     return goodStations;
//   }
// }


// refactored using a for...of loop

const chooseStations = function (stations) {
  let goodStations = []; // new empty array to hold the good stations
  
  for (const station of stations) { // iterate through stations
    const name = station[0];
    const capacity = station[1];
    const type = station[2];
    
    if (capacity >= 20 && (type === 'school' || type === 'community centre')) {
      goodStations.push(name); // populate the empty array
    } 
  }
  return goodStations;
}

console.log(chooseStations(stations));