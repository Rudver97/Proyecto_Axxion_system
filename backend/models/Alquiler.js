const db = require('../config/db');

const Alquiler = {
  getAll: (callback) => {
    db.query('SELECT * FROM alquiler', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM alquiler WHERE id = ?', [id], callback);
  },
  create: (data, callback) => {
    db.query('INSERT INTO alquiler SET ?', data, callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE alquiler SET ? WHERE id = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM alquiler WHERE id = ?', [id], callback);
  }
};

module.exports = Alquiler;
