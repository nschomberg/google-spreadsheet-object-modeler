'use strict';

let _ = require('lodash');
let Spreadsheet = require('./spreadsheet');
let Mapping = require('./mapping');
let Model = require('./model');
let Schema = require('./schema');

let Database = class Database {
	constructor() {
		this.worksheets = [];
		this.worksheetsById = new Map();
		this.worksheetsByName = new Map();
		this.worksheetNamesById = new Map();
	}

	static get Spreadsheet() {
		return Spreadsheet;
	}

	static get Schema() {
		return Schema;
	}

	static get Mapping() {
		return Mapping;
	}

	static get Model() {
		return Model;
	}

	loadSpreadsheet(key) {
		let spreadsheet = new Database.Spreadsheet(key);
		return spreadsheet.getWorksheets()
			.then((worksheets) => {
				this.worksheets = _.concat(this.worksheets, worksheets);
				_.forEach(this.worksheets, (worksheet) => {
					this.worksheetsByName.set(worksheet.title, worksheet);
					this.worksheetsById.set(worksheet.id, worksheet);
					worksheetIdsByName.set(worksheet.title, worksheet.id);
				});
			});
	}

};
module.exports = Database;
