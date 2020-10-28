import { GenericModel } from "../models/generic.model";
import { CustomerClientModel } from "../models/customer.model";

export class CustomerSuccessBalancing {

	private _customer_success: Array<GenericModel>;
	private _customers: Array<GenericModel>;
	private _customers_success_away: Array<number>;
	private _customer_customer_success: Array<CustomerClientModel> = [];

	/**
		*
		* @param customer_success
		* @param customers
		* @param customers_success_away
		*/
	constructor(customer_success: Array<GenericModel>,
		customers: Array<GenericModel>,
		customers_success_away: Array<number>) {

		this._customer_success = customer_success;
		this._customers = customers;
		this._customers_success_away = customers_success_away;
	}

	public balanceCustomersBetweenCustomersSuccess(): number {
		this.getOnlyAvailableCustomersSuccess();

		this._customers.forEach((element) => {
			this._customer_customer_success.push({
				clientId: element.id,
				customerCsId: this.getBestCustomerCsForCustomer(element)
			});
		});

		return this.getCustomerSuccessWithMoreCustomers();
	}

	private getOnlyAvailableCustomersSuccess() {
		this._customers_success_away.forEach(el => {
			const index = this._customer_success.findIndex(ccs => ccs.id == el)
			this._customer_success.splice(index, 1);
		});
	}

	public getCustomerSuccessWithMoreCustomers() {
		let aux = 0;
		let idCustomerCs = 0;

		for (let count = 0; count < this._customer_success.length; count++) {
			let totalCustomers = this._customer_customer_success.filter(ccs => {
				return ccs.customerCsId == this._customer_success[count].id;
			});

			if (totalCustomers.length > 0) {
				if (aux < totalCustomers.length) {
					aux = totalCustomers.length;
					idCustomerCs = this._customer_success[count].id;
				} else if (aux == totalCustomers.length) {
					count = this._customer_success.length;
					idCustomerCs = 0;
				}
			}
		}

		return idCustomerCs;
	}

	public getBestCustomerCsForCustomer(element): number {
		let aux = 0;
		let score = 0;
		let idCustomerCs = 0;
		for (let cont = 0; cont < this._customer_success.length; cont++) {
			if (this._customer_success[cont].score > 10) {
				score = this._customer_success[cont].score > element.score ?
					this._customer_success[cont].score - element.score :
					element.score - this._customer_success[cont].score;

				if (aux > 0) {
					if (score == 0) {
						idCustomerCs = this._customer_success[cont].id;
						aux = score;
						cont = this._customer_success.length;
					}

					if (score < aux) {
						idCustomerCs = this._customer_success[cont].id;
						aux = score;
					}
				} else {
					idCustomerCs = this._customer_success[cont].id;
					aux = score;

					if (score == 0) {
						cont = this._customer_success.length;
					}
				}
			}

		}

		return idCustomerCs;
	}
}