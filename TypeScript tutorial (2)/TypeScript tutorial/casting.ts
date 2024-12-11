let x1: unknown = 'hello';
console.log((x1 as string).length);

let x2: unknown = 'hello1111';
console.log((<string>x2).length);

let x3 = 'hello';
console.log(((x3 as unknown) as number).length); //Property 'length' does not exist on type 'number'.