'use strict';

// Imports
let db = require('../../../../index');
let Worksheet = db.Mock.Worksheet;

let meatSheet = new Worksheet('meat sheet', '1234321', [{
    name: 'steak',
    calories: '350',
    pairsWith: 'red wine',
  },
  {
    name: 'pork chop',
    calories: '375',
    pairsWith: 'red wine, beer',
  },
  {
    name: 'hot dog',
    calories: '200',
    pairsWith: 'beer',
  },
], false);
module.exports = meatSheet;
