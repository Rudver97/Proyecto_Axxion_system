const db = require('../config/db');

const Categorias = {
  getAll: (callback) => {
    db.query('SELECT * FROM categorias', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM categorias WHERE id = ?', [id], callback);
  },
  create: (data, callback) => {
    db.query('INSERT INTO categorias SET ?', data, callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE categorias SET ? WHERE id = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM categorias WHERE id = ?', [id], callback);
  }
};

module.exports = Categorias;
