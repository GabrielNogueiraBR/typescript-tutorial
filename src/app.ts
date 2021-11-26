import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

const formAlias = document.querySelector('.new-item-form') as HTMLFormElement;

// Inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// List template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);


formAlias.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent page to refresh on submit event
    
    let doc: HasFormatter;

    if(type.value === 'invoice')
        doc = new Invoice(toFrom.value,details.value,amount.valueAsNumber);
    else
        doc = new Payment(toFrom.value,details.value,amount.valueAsNumber);

    list.render(doc,type.value,'end');

});

// Generics
const addUID = <T extends {name: string}>(obj: T) =>{
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

// Generics with interfaces
interface Resource<T>{
    uid: number,
    resourceName: string;
    data: T
}

const docOne : Resource<object> = {
    uid: 1, 
    resourceName: 'person', 
    data: {name: 'mario'}
};

const docTwo : Resource<string[]> = {
    uid: 2, 
    resourceName: 'list', 
    data: ['milk','bread','egg']
}