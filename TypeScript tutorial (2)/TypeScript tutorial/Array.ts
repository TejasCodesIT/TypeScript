// const names: string[] = [];
// names.push("Dylan"); // no error
// // names.push(3); 


// const numbers = [1, 2, 3]; // inferred to type number[]
// numbers.push(4); // no error
// numbers.push(2); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// let head: number = numbers[0]; // no error

// const names: readonly String[] = ["1","2","3","4"];
// names.push("5"); //Error: Property 'push' does not exist on type 'readonly String[]'.
// console.log(names);



const numbers = [1,2,3,4];
numbers.push(5);

//number.push("3"); //error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.


let head: number=numbers[0];
console.log(head);
console.log(numbers);