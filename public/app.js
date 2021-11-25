"use strict";
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('Gabriel', 'work on R2U', 999999999);
const invTwo = new Invoice('João', 'work on Amazon', 10000);
// Just Invoice Objects
let invoices = [];
// invoices.push('hello');
invoices.push(invOne);
invoices.push(invTwo);
