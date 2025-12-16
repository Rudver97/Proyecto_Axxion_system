const db = require('../config/db');

const Mantenimiento = {
  getAll: (callback) => {
    db.query('SELECT * FROM mantenimiento', callback);
  },
  getById: (id, productos_id, callback) => {
    db.query('SELECT * FROM mantenimiento WHERE id = ? AND productos_id = ?', [id, productos_id], callback);
  },
  create: (data, callback) => {
    db.query('INSERT INTO mantenimiento SET ?', data, callback);
  },
  update: (id, productos_id, data, callback) => {
    db.query('UPDATE mantenimiento SET ? WHERE id = ? AND productos_id = ?', [data, id, productos_id], callback);
  },
  delete: (id, productos_id, callback) => {
    db.query('DELETE FROM mantenimiento WHERE id = ? AND productos_id = ?', [id, productos_id], callback);
  },
  getByProductoId: (productos_id, callback) => {
    db.query('SELECT * FROM mantenimiento WHERE productos_id = ?', [productos_id], callback);
  }
};

module.exports = Mantenimiento;
