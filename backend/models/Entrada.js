const db = require('../config/db');

const Entrada = {
  getAll: (callback) => {
    db.query('SELECT * FROM entradas', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM entradas WHERE id = ?', [id], callback);
  },
  create: (data, callback) => {
    db.query('INSERT INTO entradas SET ?', data, callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE entradas SET ? WHERE id = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM entradas WHERE id = ?', [id], callback);
  },
  getByProveedorId: (id_proveedor, callback) => {
    db.query('SELECT * FROM entradas WHERE id_proveedor = ?', [id_proveedor], callback);
  }
};

module.exports = Entrada;
