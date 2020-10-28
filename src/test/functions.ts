module.exports = {
	fillArrayCCS(): Array<any> {
		let array = [];
		for (var i = 0; i < 1000; i++) {
						array.push({ id: i + 1, score: 0 });
		}

		array[998] = { id: 999, score: 100 };

		return array;
},

fillArrayCustomer(): Array<any> {
		let array = [];
		for (var i = 0; i < 1000; i++) {
						array.push({ id: i + 1, score: 10 });
		}

		return array;
}
};