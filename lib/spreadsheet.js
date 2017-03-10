'use strict';

let _ = require('lodash');
let GoogleSpreadsheet = require('google-spreadsheet');

let Spreadsheet = class Spreadsheet {
	constructor(key) {
		this.key = key;
	}

	static get(key) {
		return new GoogleSpreadsheet(key);
	}

	getInfo() {
		return new Promise((resolve, reject) => {
			Spreadsheet.get(this.key)
				.getInfo((err, info) => {
					if (err) {
						reject(err);
					}
					resolve(info);
				});
		});
	}

	getWorksheets() {
		return this.getInfo()
			.then((info) => {
				return info.worksheets;
			})
			.catch((error) => {
				console.dir(error);
			});
	}
};
module.exports = Spreadsheet;
