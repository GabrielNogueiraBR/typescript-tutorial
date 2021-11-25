"use strict";
const anchor = document.querySelector('a');
const form = document.querySelector('form');
const formAlias = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
formAlias.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent page to refresh on submit event
    console.log(type.value, toFrom.value, details.value, amount.value, amount.valueAsNumber //transform string to number
    );
});
