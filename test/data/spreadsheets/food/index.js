'use strict';

// Imports
let mock = require('../mock');
let Info = mock.Info;
let GoogleSpreadsheet = mock.GoogleSpreadsheet;
let Worksheet = mock.Worksheet;

let fruitSheet = require('./fruit-sheet');
let meatSheet = require('./meat-sheet');

// Test Data
let error = false;

let worksheets = [fruitSheet, meatSheet];

let info = new Info(worksheets);

let spreadsheet = new GoogleSpreadsheet('food-key-123412341234', info, error);

module.exports = spreadsheet;
