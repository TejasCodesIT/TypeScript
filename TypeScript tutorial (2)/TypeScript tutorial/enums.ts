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

enum CardinalDirections {
    North = "North",
    East="East",
    South="SOuth",
    West="West"
  }
  // logs 1
  console.log(CardinalDirections.North);
  // logs 4
  console.log(CardinalDirections.West);