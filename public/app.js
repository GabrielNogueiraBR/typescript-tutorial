import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
let docOne;
let docTwo;
docOne = new Invoice('Yoshi', 'web work', 2500);
docTwo = new Payment('Mario', 'plumbing work', 200);
// Array with specific type
let docs = [];
// docOne and docTwo implements the interface
docs.push(docOne);
docs.push(docTwo);
const invOne = new Invoice('Gabriel', 'work on R2U', 999999999);
const invTwo = new Invoice('João', 'work on Amazon', 10000);
const formAlias = document.querySelector('.new-item-form');
// Inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
formAlias.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent page to refresh on submit event
    let doc;
    if (type.value === 'invoice')
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    else
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    console.log(doc);
});
