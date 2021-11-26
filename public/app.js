import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
const formAlias = document.querySelector('.new-item-form');
// Inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// List template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
formAlias.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent page to refresh on submit event
    let doc;
    if (type.value === 'invoice')
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    else
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    list.render(doc, type.value, 'end');
});
// Generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
// Enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docOne = {
    uid: 1,
    resourceType: ResourceType.PERSON,
    data: { name: 'mario' }
};
const docTwo = {
    uid: 2,
    resourceType: ResourceType.BOOK,
    data: { title: 'Name of the Wind' }
};
