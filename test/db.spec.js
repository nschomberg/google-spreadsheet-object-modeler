'use strict';

let chai = require('chai');
chai.should();
let _ = require('lodash');

let Database = require('../index');
let foodSpreadsheet = require('./data/spreadsheets/food');

describe('Database', function() {
	it('should load worksheets', function(done) {
		// Given
		let db = new Database();

		// When
		db.loadSpreadsheet(foodSpreadsheet)
			.then(() => {
				// Then
				db.worksheets.length.should.equal(2);

				db.worksheetsByName.get('fruit sheet')
					.should.equal(db.worksheetsById.get('987654321'));
				db.worksheetsByName.get('meat sheet')
					.should.equal(db.worksheetsById.get('1234321'));

				done();
			})
			.catch((error) => {
				console.dir(error);
			});
	});
});
