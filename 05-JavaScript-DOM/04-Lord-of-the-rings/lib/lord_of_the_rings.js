function isGood(soldierType) {
  // TODO: return `true` if the soldierType is Good.
  const good = [ "Hobbits", "Elves", "Dwarves", "Eagles"]

  return good.includes(soldierType);
}

function buildSoldierMap(battlefield) {
  // TODO: Given a battlefield (String), return a Map of forces.
   const teams = battlefield.split(",");

   const map = new Map()
   teams.forEach((team) => {
     let teamMembers = team.split(":");
     console.log(teamMembers[0])
     map.set(teamMembers[0], Number.parseInt(teamMembers[1], 10));
    // map [teamMembers[0]] =  Number.parseInt(teamMembers[1], 10);
    });
   console.log(map);
   return map
  // const map {
  //   "elves" => 3,
  //   "Orcs" => 2
  // }
}

// const battlefield = "Elves:3,Orcs:2"
// buildSoldierMap(battlefield)  //=> { "Elves" => 3, "Orcs" => 2 }

// keys = Array.from( myMap.keys() );
const pointsArray = []
function logMapElements(value, key, map) {

  let points = 0
  if (isGood(key)){
    points = value;
  } else {
    points = - value;
  }
  pointsArray.push(points)
   console.log(points)
  return points
}
function whoWinsTheWar(battlefield) {
  // TODO: Based on the battlefield's description (it's a String), return "Good", "Evil" or "Tie".
  let map = buildSoldierMap(battlefield);
  console.log(map)
  map.forEach(logMapElements);
  result = 0;
  pointsArray.forEach((number) => {
      result += number;
  });
  console.log(pointsArray);
  console.log(result);
  if (result > 0){
    return "good";
  } else if  (result = 0){
    return "tie";
  }else{
    return "evil";
  }

}

module.exports = { whoWinsTheWar, buildSoldierMap, isGood }; // Do not remove this line

// console.log(isGood("Hobbits"));
// console.log(buildSoldierMap("Elves:3,Orcs:2"))
console.log(whoWinsTheWar("Hobbits:4,Dwarves:1,Elves:1,Goblins:100,Uruk Hai:1"))
