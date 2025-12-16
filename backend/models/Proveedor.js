const db = require('../config/db');

const Proveedor = {
  getAll: (callback) => {
    db.query('SELECT * FROM proveedores', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM proveedores WHERE id = ?', [id], callback);
  },
  create: (data, callback) => {
    db.query('INSERT INTO proveedores SET ?', data, callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE proveedores SET ? WHERE id = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM proveedores WHERE id = ?', [id], callback);
  }
};

module.exports = Proveedor;
