// Interface
interface IsPerson{
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: 'shaun',
    age: 30,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log('I spent', amount);
        return amount;
    },
};

const greetPerson = (person: IsPerson)=>{
    console.log(`Hello ${person.name}`);
}

greetPerson(me);


import { Invoice } from "./classes/Invoice";

const invOne = new Invoice('Gabriel','work on R2U',999999999);
const invTwo = new Invoice('João','work on Amazon',10000);