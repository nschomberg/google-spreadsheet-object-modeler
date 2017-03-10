'use strict';

let _ = require('lodash');

let Model = class Model {
	constructor(schema, db, worksheetId) {
		this.schema = schema;
		this.db = db;
		this.worksheetId = worksheetId;
	}

	query(options) {
		return new Promise((resolve, reject) => {
			try {
				let results;
				this.worksheet.getRows(options, (err, rows) => {
					results = _.map(rows, (row) => (this.schema.map(row)));
				});
				resolve(results);
			} catch (e) {
				reject(e);
			}
		});
	}

	get worksheet() {
		return this.db.worksheetsById.has(this.worksheetId) ? this.db.worksheetsById.get(this.worksheetId) : this.db.worksheetsByName.get(this.worksheetId);
	}

};
module.exports = Model;
