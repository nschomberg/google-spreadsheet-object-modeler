'use strict';

let _ = require('lodash');

let Schema = class Schema {
	constructor(mappings) {
		this.mappings = mappings;
	}

	map(row) {
		let obj = {};
		_.forEach(this.mappings, (mapping) => {
			_.assign(obj, mapping.map(row));
		});
		return obj;
	}
};
module.exports = Schema;
