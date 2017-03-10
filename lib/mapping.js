'use strict';

let _ = require('lodash');

let Mapping = class Mapping {
	constructor(spreadsheetKey, objectKey, transform) {
		this.objectKey = objectKey;
		this.spreadsheetKey = spreadsheetKey;
		this.transform = transform ? transform : (value) => (value);
	}

	get formattedSpreadsheetKey() {
		return _.toLower(_.camelCase(this.spreadsheetKey));
	}

	map(row) {
		try {
			if (_.has(row, this.formattedSpreadsheetKey)) {
				return {
					[this.objectKey]: this.transform(row[this.formattedSpreadsheetKey]),
				};
			}
			return {};
		} catch (e) {
			console.log(e);
		}
	}
};
module.exports = Mapping;
