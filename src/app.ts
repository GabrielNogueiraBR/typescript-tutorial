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
    
    let values : [string,string,number];
    values = [toFrom.value,details.value,amount.valueAsNumber];

    let doc: HasFormatter;

    if(type.value === 'invoice')
        doc = new Invoice(...values);
    else
        doc = new Payment(...values);

    list.render(doc,type.value,'end');

});

// Generics
const addUID = <T extends {name: string}>(obj: T) =>{
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

// Enums
enum ResourceType{
    BOOK,
    AUTHOR,
    FILM,
    DIRECTOR,
    PERSON
}

// Generics with interfaces
interface Resource<T>{
    uid: number,
    resourceType: ResourceType;
    data: T
}

const docOne : Resource<object> = {
    uid: 1, 
    resourceType: ResourceType.PERSON, 
    data: {name: 'mario'}
};

const docTwo : Resource<object> = {
    uid: 2, 
    resourceType: ResourceType.BOOK, 
    data: {title: 'Name of the Wind'}
}

// TUPLES
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];

let tupple: [string, number, boolean];
tupple = ['ryu',25,true];
//tupple = [25,'ryu',true]; // errado

let student: [string,number];
student = ['Gabriel',0943875];
