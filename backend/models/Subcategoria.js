const db = require('../config/db');

const Subcategoria = {
  getAll: (callback) => {
    db.query('SELECT * FROM subcategorias', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM subcategorias WHERE id = ?', [id], callback);
  },
  create: (data, callback) => {
    db.query('INSERT INTO subcategorias SET ?', data, callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE subcategorias SET ? WHERE id = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM subcategorias WHERE id = ?', [id], callback);
  },
  getByCategoriaId: (categorias_id, callback) => {
    db.query('SELECT * FROM subcategorias WHERE categorias_id = ?', [categorias_id], callback);
  }
};

module.exports = Subcategoria;
