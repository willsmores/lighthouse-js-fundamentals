const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

// const finalPosition = function (moves) {
//   let position = [0,0];
//   for (let i = 0; i < moves.length; i++) {
//     switch (moves[i]) {
//       case 'north':
//         position[1]++;
//         break;
//       case 'east':
//         position[0]++;
//         break;
//       case 'south':
//         position[1]--;
//         break;
//       case 'west':
//         position[0]--;
//         break;
//     }
//   }
//   return position;
// }


// refactored with for...of loop
const finalPosition = function (moves) {
  let position = [0,0]; // set initial position
  for (const move of moves) {
    if (move === 'north') {
      position[1]++;
    } else if (move === 'east') {
      position[0]++;
    } else if (move === 'south') {
      position[1]--;
    } else if (move === 'west') {
      position[0]--;
    }
  }
  return position;
}


console.log(finalPosition(moves));