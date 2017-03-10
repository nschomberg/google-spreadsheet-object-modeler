'use strict';

// Imports
let mock = require('../mock');
let Worksheet = mock.Worksheet;

let fruitSheet = new Worksheet('fruit sheet', '987654321', [{
		fruitname: 'orange',
		fruitcolor: 'orange',
		rating: '1',
	},
	{
		fruitname: 'apple',
		fruitcolor: 'red',
		rating: '4',
	},
	{
		fruitname: 'banana',
		fruitcolor: 'yellow',
		rating: '3',
	},
	{
		fruitname: 'kiwi',
		fruitcolor: 'green',
		rating: '2.5',
	},
], false);
module.exports = fruitSheet;
