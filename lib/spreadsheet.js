'use strict';

let _ = require('lodash');

let Spreadsheet = class Spreadsheet {
	constructor(googleSpreadsheet) {
		this.googleSpreadsheet = googleSpreadsheet;
	}

	getInfo() {
		return new Promise((resolve, reject) => {
			this.googleSpreadsheet.getInfo((err, info) => {
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
