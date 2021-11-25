// Example 1
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

console.log(greet('Gabriel','hello'));

// Example 2
let cal: (a: number, b: number, c:string) => number;

// Example 3
let logDetails: (obj: {name: string, age: number}) => void;