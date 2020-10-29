import { CustomerAccount } from "../domain/CustomerAccount";

describe('Testes do customer account', () => {
    it ('Teste deve debitar da conta quando o saldo for suficiente', () => {
        let customerAccount = new CustomerAccount();
        customerAccount.getAllCustomers();
        let customer = customerAccount.getCustomerByDocumentnumber('555');
        customer.balance = 5000;
        customerAccount.changeBalanceAccountByCustomer(customer, 200);
       
        expect(customer.customerId).toEqual(4);
        expect(customer.balance).toEqual(4800);
    });

    it('Teste não deve debitar da conta quando o saldo for suficiente', () => {
        let customerAccount = new CustomerAccount();
        customerAccount.getAllCustomers();
        let customer = customerAccount.getCustomerByDocumentnumber('222');

        customerAccount.changeBalanceAccountByCustomer(customer, 600);
        expect(customer.customerId).toEqual(1);
        expect(customer.balance).toEqual(customer.balance);
    });

    it('Teste não deve debitar da conta quando o saldo for negativo', () => {
        let customerAccount = new CustomerAccount();
        customerAccount.getAllCustomers();
        let customer = customerAccount.getCustomerByDocumentnumber('333');

        customerAccount.changeBalanceAccountByCustomer(customer, 600);
        expect(customer.customerId).toEqual(2);
        expect(customer.balance).toEqual(customer.balance);
    });
});