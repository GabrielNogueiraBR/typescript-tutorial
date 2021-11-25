class Invoice {

    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ){};

    format(){
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}

const invOne = new Invoice('Gabriel','work on R2U',999999999);
const invTwo = new Invoice('João','work on Amazon',10000);