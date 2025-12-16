const db = require('../config/db');

const Cliente = {
  getAll: (callback) => {
    db.query('SELECT * FROM clientes', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM clientes WHERE id = ?', [id], callback);
  },
  create: (data, callback) => {
    db.query('INSERT INTO clientes SET ?', data, callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE clientes SET ? WHERE id = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM clientes WHERE id = ?', [id], callback);
  },
  getByAlquilerId: (alquiler_id, callback) => {
    db.query('SELECT * FROM clientes WHERE alquiler_id = ?', [alquiler_id], callback);
  }
};

module.exports = Cliente;
