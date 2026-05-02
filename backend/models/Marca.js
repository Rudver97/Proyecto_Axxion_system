const db =require('../config/db')

const Marca = {
  getAll: (callback) => {
    db.query('SELECT * FROM marca', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM marca WHERE id = ?', [id], callback);
  },
  create: (data, callback) => {
    db.query('INSERT INTO marca SET ?', data, callback);
  },
}

module.exports = Marca;