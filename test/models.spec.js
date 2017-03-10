'use strict';

let chai = require('chai');
chai.should();
let _ = require('lodash');

let Database = require('../index');
let foodSpreadsheet = require('./data/spreadsheets/food');

describe('Models', function() {
	let fruitSchema;

	before(() => {
		fruitSchema = new Database.Schema([
			new Database.Mapping('fruit name', 'name', _.upperFirst),
			new Database.Mapping('Fruit Color', 'color'),
			new Database.Mapping('Rating', 'rating', parseInt),
		]);
	});

	it('should map schemas', function(done) {
		// Given
		let db = new Database();

		// When
		db.loadSpreadsheet(foodSpreadsheet)
			.then(() => {
				let Fruit = new Database.Model(fruitSchema, db, '987654321');

				Fruit.query({})
					.then((fruits) => {
						// Then
						fruits.should.have.length(4);

						let orange = _.find(fruits, {
							name: 'Orange'
						});
						orange.name.should.equal('Orange');
						orange.color.should.equal('orange');
						orange.rating.should.equal(1);

						let kiwi = _.find(fruits, {
							name: 'Kiwi'
						});
						kiwi.name.should.equal('Kiwi');
						kiwi.color.should.equal('green');
						kiwi.rating.should.equal(2);

						let apple = _.find(fruits, {
							name: 'Apple'
						});
						apple.name.should.equal('Apple');
						apple.color.should.equal('red');
						apple.rating.should.equal(4);

						let banana = _.find(fruits, {
							name: 'Banana'
						});
						banana.name.should.equal('Banana');
						banana.color.should.equal('yellow');
						banana.rating.should.equal(3);

						done();
					})
					.catch((error) => {
						console.dir(error);
					});
			})
			.catch((error) => {
				console.dir(error);
			});
	});
});
