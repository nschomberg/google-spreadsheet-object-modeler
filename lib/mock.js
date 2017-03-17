'use strict';

let GoogleSpreadsheet = class GoogleSpreadsheet {
  constructor(sheetKey, info, error) {
    this.sheetKey = sheetKey;
    this.info = info;
    this.error = error;
  }

  getInfo(callback) {
    setTimeout(() => {
      callback(this.error, this.info);
    }, 0);
  }
};
module.exports.GoogleSpreadsheet = GoogleSpreadsheet;

let Info = class Info {
  constructor(worksheets) {
    this.worksheets = worksheets;
  }
};
module.exports.Info = Info;

let Worksheet = class Worksheet {
  constructor(title, id, rows, error) {
    this.title = title;
    this.id = id;
    this.rows = rows;
    this.error = error;
  }

  setError(error) {
    this.error = error;
  }

  getRows(options, callback) {
    setTimeout(() => {
      callback(this.error, this.rows);
    }, 0);
  }
};
module.exports.Worksheet = Worksheet;
