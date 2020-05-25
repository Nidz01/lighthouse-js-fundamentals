const finalPosition = function (moves) {
  let position = [0, 0];
  for(let x = 0; x < moves.length; x++)
  {
    if (moves[x] === 'north')
            { position[1]++; }
    else if(moves[x] === 'south')
            { position[1]--; }
      else if(moves[x] === 'east')
            { position[0]++; }
      else if(moves[x] === 'west')
            { position[0]--; }
  }
  return position;
}
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));

