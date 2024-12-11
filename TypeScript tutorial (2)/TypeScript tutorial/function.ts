// function getTime(): number {
//     return new Date().getTime();
//   }
//   console.log(getTime())

function add(a: number, b: number, c?: number) {
    return a + b + (c || 2);
  }
  
  console.log(add(2,5))