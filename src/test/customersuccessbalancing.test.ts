import { CustomerSuccessBalancing } from "../domain/CustomerSuccessBalancing";
const helperFuctions = require('./functions');

describe('testes da classe customer success', () => {
	it('teste should be 1', () => {

		const customer_success = [{ id: 1, score: 60 }, { id: 2, score: 20 }, {
			id: 3,
			score: 95
		}, { id: 4, score: 75 }];
		const customers = [{ id: 1, score: 90 }, { id: 2, score: 20 }, { id: 3, score: 70 }, {
			id: 4,
			score: 40
		}, { id: 5, score: 60 }, { id: 5, score: 10 }];

		let customerSuccessBalancingObject = new CustomerSuccessBalancing(customer_success, customers, [2, 4]);
		expect(customerSuccessBalancingObject.balanceCustomersBetweenCustomersSuccess()).toEqual(1);
	})

	it('teste should be 0', () => {
		const customer_success = [{ id: 1, score: 11 }, { id: 2, score: 21 }, { id: 3, score: 31 }, { id: 4, score: 3 }, {
			id: 5,
			score: 4
		}, { id: 6, score: 5 }];
		const customers = [{ id: 1, score: 10 }, { id: 2, score: 10 }, { id: 3, score: 10 }, { id: 4, score: 20 }, {
			id: 5,
			score: 20
		}, { id: 6, score: 30 }, { id: 7, score: 30 }, { id: 8, score: 20 }, { id: 9, score: 60 }];

		let customerSuccessBalancingObject = new CustomerSuccessBalancing(customer_success, customers, []);
		expect(customerSuccessBalancingObject.balanceCustomersBetweenCustomersSuccess()).toEqual(0);
	})

	it('teste should bem 999', () => {
		const customer_success = helperFuctions.fillArrayCCS();
		const customers = helperFuctions.fillArrayCustomer();
		let customerSuccessBalancingObject = new CustomerSuccessBalancing(customer_success, customers, [1000]);
		expect(customerSuccessBalancingObject.balanceCustomersBetweenCustomersSuccess()).toEqual(999);
	})
});

