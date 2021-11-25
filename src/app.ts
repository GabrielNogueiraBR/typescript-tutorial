const anchor = document.querySelector('a')!;

const form = document.querySelector('form')!;

const formAlias = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

formAlias.addEventListener('submit',(e:Event)=>{
    e.preventDefault(); // prevent page to refresh on submit event

    console.log(
            type.value,
            toFrom.value,
            details.value,
            amount.value,
            amount.valueAsNumber //transform string to number
        );
})