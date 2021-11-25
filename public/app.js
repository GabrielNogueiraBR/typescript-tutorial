const me = {
    name: 'shaun',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    },
};
const greetPerson = (person) => {
    console.log(`Hello ${person.name}`);
};
greetPerson(me);
import { Invoice } from "./classes/Invoice";
const invOne = new Invoice('Gabriel', 'work on R2U', 999999999);
const invTwo = new Invoice('João', 'work on Amazon', 10000);
