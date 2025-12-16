const db = require('../config/db');

const Salida = {
  getAll: (callback) => {
    db.query('SELECT * FROM salida', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM salida WHERE id = ?', [id], callback);
  },
  create: (data, callback) => {
    db.query('INSERT INTO salida SET ?', data, callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE salida SET ? WHERE id = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM salida WHERE id = ?', [id], callback);
  },
  getByAlquilerId: (alquiler_id, callback) => {
    db.query('SELECT * FROM salida WHERE alquiler_id = ?', [alquiler_id], callback);
  }
};

module.exports = Salida;
