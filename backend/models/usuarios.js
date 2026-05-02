const db = require('../config/db');
const bcrypt = require('bcryptjs');

const usuarios = {
  getAll: (callback) => {
    db.query('SELECT * FROM usuarios', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM usuarios WHERE id = ?', [id], callback);
  },
  create: async (data, callback) => {
    try {
      const hashPasword = await bcrypt.hash(data.contraseña, 10);
      db.query(
        'INSERT INTO usuarios (nombre, correo_electronico, contraseña, telefono, rol_id, direccion) VALUES (?,?,?,?,?,?)',
        [
          data.nombre,
          data.correo_electronico,
          hashPasword,
          data.telefono,
          data.rol_id,
          data.direccion
        ],
        callback
      );
    } catch (error) {
      callback(error, null);
    }
  },
  update: (id, data, callback) => {
    db.query('UPDATE usuarios SET ? WHERE id = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM usuarios WHERE id = ?', [id], callback);
  },
  getByRolId: (roles_id, callback) => {
    db.query('SELECT * FROM usuarios WHERE roles_id = ?', [roles_id], callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE usuarios SET ? WHERE id = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM usuarios WHERE id = ?', [id], callback);
  },
  getByRolId: (roles_id, callback) => {
    db.query('SELECT * FROM usuarios WHERE roles_id = ?', [roles_id], callback);
  },
  getByClienteId: (clientes_id, callback) => {
    db.query('SELECT * FROM usuarios WHERE clientes_id = ?', [clientes_id], callback);
  }
};

module.exports = usuarios;
