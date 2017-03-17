'use strict';

// Imports
let db = require('../../../index');

let Mock = db.Mock;
let Info = Mock.Info;
let GoogleSpreadsheet = Mock.GoogleSpreadsheet;
let Worksheet = Mock.Worksheet;

let fruitSheet = require('./worksheets/fruit-sheet');
let meatSheet = require('./worksheets/meat-sheet');

// Test Data
let error = false;

let worksheets = [fruitSheet, meatSheet];

let info = new Info(worksheets);

let spreadsheet = new GoogleSpreadsheet('food-key-123412341234', info, error);

module.exports = spreadsheet;
