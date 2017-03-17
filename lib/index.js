'use strict';

let _ = require('lodash');
let GoogleSpreadsheet = require('google-spreadsheet');

let Spreadsheet = require('./spreadsheet');
let Mapping = require('./mapping');
let Model = require('./model');
let Schema = require('./schema');
let Mock = require('./mock');

let Database = class Database {
  constructor() {
    this.spreadsheets = [];
    this.worksheets = [];
    this.worksheetsById = new Map();
    this.worksheetsByName = new Map();
    this.worksheetIdsByName = new Map();
  }

  static get GoogleSpreadsheet() {
    return GoogleSpreadsheet;
  }

  static get Mapping() {
    return Mapping;
  }

  static get Mock() {
    return Mock;
  }

  static get Model() {
    return Model;
  }

  static get Schema() {
    return Schema;
  }

  static get Spreadsheet() {
    return Spreadsheet;
  }

  loadSpreadsheet(googleSpreadsheet) {
    let spreadsheet = new Database.Spreadsheet(googleSpreadsheet);
    this.spreadsheets.push(spreadsheet);
    return spreadsheet.getWorksheets()
      .then((worksheets) => {
        this.worksheets = _.concat(this.worksheets, worksheets);
        _.forEach(this.worksheets, (worksheet) => {
          this.worksheetsByName.set(worksheet.title, worksheet);
          this.worksheetsById.set(worksheet.id, worksheet);
          this.worksheetIdsByName.set(worksheet.title, worksheet.id);
        });
        return worksheets;
      });
  }

};
module.exports = Database;
