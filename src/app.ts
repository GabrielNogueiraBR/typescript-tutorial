import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('Yoshi','web work',2500);
docTwo = new Payment('Mario','plumbing work',200);

// Array with specific type
let docs: HasFormatter[] = [];
// docOne and docTwo implements the interface
docs.push(docOne);
docs.push(docTwo);

const invOne = new Invoice('Gabriel','work on R2U',999999999);
const invTwo = new Invoice('João','work on Amazon',10000);

const formAlias = document.querySelector('.new-item-form') as HTMLFormElement;

// Inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

formAlias.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent page to refresh on submit event
    
    let doc: HasFormatter;

    if(type.value === 'invoice')
        doc = new Invoice(toFrom.value,details.value,amount.valueAsNumber);
    else
        doc = new Payment(toFrom.value,details.value,amount.valueAsNumber);

    console.log(doc)

});