import { Customer } from "../models/customer-account.model";

export class CustomerAccount {

    private _customers: Array<Customer> = Array<Customer>();

    constructor() {

    }

    getAllCustomers() {
        this._customers.push({ customerId: 1, balance: 500, name: 'Maiara Garcia', documentNumber: '222' });
        this._customers.push({ customerId: 2, balance: -50, name: 'Tatiane Garcia', documentNumber: '333' });
        this._customers.push({ customerId: 3, balance: 0, name: 'Edmilson Garcia', documentNumber: '444' });
        this._customers.push({ customerId: 4, balance: 5000, name: 'Cirlene Garcia', documentNumber: '555' });
    }

    /**
     * 
     * @param customer 
     * @param newValue 
     */
    changeBalanceAccountByCustomer(customer: Customer, newValue:number) {
        if (customer.customerId > 0) {
            if (customer.balance > newValue){
                customer.balance -= newValue;
            }
        }
    }

    /**
     * 
     * @param documentNumber 
     */
    getCustomerByDocumentnumber(documentNumber: string): Customer {
        return this._customers.find(element => 
            element.documentNumber == documentNumber
        );
    }
}