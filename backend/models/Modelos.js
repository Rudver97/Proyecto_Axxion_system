const db = require('../config/db');

const Mdelos = {
  getAll: (callback) => {
    db.query('SELECT * FROM modelos', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM modelos WHERE id = ?', [id], callback);
  },
  create: (data, callback) => {
    db.query('INSERT INTO modelos SET ?', data, callback);
  },
}

module.exports = Mdelos;