// enum CardinalDirections {
//     North,
//     East,
//     South,
//     West
//   }
//   let currentDirection = CardinalDirections.North;
//   // logs 0
//   console.log(currentDirection);
//   // throws error as 'North' is not a valid enum
//   //currentDirection = 'North';
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections["North"] = "North";
    CardinalDirections["East"] = "East";
    CardinalDirections["South"] = "SOuth";
    CardinalDirections["West"] = "West";
})(CardinalDirections || (CardinalDirections = {}));
// logs 1
console.log(CardinalDirections.North);
// logs 4
console.log(CardinalDirections.West);
