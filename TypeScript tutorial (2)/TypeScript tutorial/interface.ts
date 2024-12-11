// interface Rectangle { //Apply only on object
//     height: number,
//     width: number
//   }
  
//   const rectangle: Rectangle = {
//     height: 20,
//     width: 10
//   };

//   console.log(rectangle);

// Try creating a new interface and extending it like below
interface Rectangle {
    height: number,
    width: number
  }
  
  interface ColoredRectangle extends Rectangle {
    color: string
  }
  
  const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
  };
  
  console.log(coloredRectangle);