const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']
let yAxis = 0;
let xAxis = 0;
for (let move of moves){
  if (move === "north"){
    ++yAxis;
  } else if (move === "south"){
    --yAxis;
  } else if (move === "west"){
    --xAxis;
  } else {++xAxis)
console.log xAxis;
}


console.log(finalPosition(moves));
