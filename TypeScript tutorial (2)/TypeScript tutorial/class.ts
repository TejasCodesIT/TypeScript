// class Person {
//     private readonly name: string;
  
//     public constructor(name1: string) {
//       this.name = name1;
//     }
  
//     public getName(): string {
//       return this.name;
//     }
//   }
  
//   const person = new Person("Jane");

//   console.log(person.getName()); 


interface Shape {
    getArea: () => number;
  }
  
  class Rectangle implements Shape {
    // using protected for these members allows access from classes that extend from this class, such as Square
    public constructor(protected readonly width1: number, protected readonly height1: number) {}
  
    public getArea(): number {
      return this.width1 * this.height1;
    }
  
    public toString(): string {
      return `Rectangle[width=${this.width1}, height=${this.height1}]`;
    }
  }
  
  class Square extends Rectangle {
    public constructor(width1: number) {
      super(width1, width1);
    }
  
    // this toString replaces the toString from Rectangle
    public override toString(): string {
      return `Square[width=${this.width1}]`;
    }
  }
  const mySq = new Square(20);
  const myRec = new Rectangle(30,60);


    console.log(mySq.toString());
    console.log(myRec.toString());