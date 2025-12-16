const db = require('../config/db');

const Rol = {
  getAll: (callback) => {
    db.query('SELECT * FROM roles', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM roles WHERE id = ?', [id], callback);
  },
  create: (data, callback) => {
    db.query('INSERT INTO roles SET ?', data, callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE roles SET ? WHERE id = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM roles WHERE id = ?', [id], callback);
  }
};

module.exports = Rol;
