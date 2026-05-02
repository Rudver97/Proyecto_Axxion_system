const db = require('../config/db');

exports.getAll = (callback) => {
  const sql = `
    SELECT p.*, s.nombre AS subcategoria_nombre, e.id_proveedor
    FROM productos p
    LEFT JOIN subcategorias s ON p.subcategorias_id = s.id
    LEFT JOIN entradas e ON p.entradas_id = e.id
  `;
  db.query(sql, callback);
};

exports.getById = (id, callback) => {
  const sql = `SELECT * FROM productos WHERE id = ?`;
  db.query(sql, [id], callback);
};

exports.create = (data, callback) => {
  const { nombre, subcategorias_id, entradas_id } = data;
  const sql = `
    INSERT INTO productos (nombre, subcategorias_id, entradas_id)
    VALUES (?, ?, ?, ?)
  `;
  db.query(sql, [nombre, subcategorias_id, entradas_id], callback);
};

exports.update = (id, data, callback) => {
  const { nombre, detalle, estado, subcategorias_id, entradas_id } = data;
  const sql = `
    UPDATE productos
    SET nombre=?, subcategorias_id=?, entradas_id=?
    WHERE id=?
  `;
  db.query(sql, [nombre, subcategorias_id, entradas_id, id], callback);
};

exports.delete = (id, callback) => {
  const sql = `DELETE FROM productos WHERE id = ?`;
  db.query(sql, [id], callback);
};

exports.getBySubcategoriaId = (subcategorias_id, callback) => {
  const sql = `SELECT * FROM productos WHERE subcategorias_id = ?`;
  db.query(sql, [subcategorias_id], callback);
};

exports.getByEntradaId = (entradas_id, callback) => {
  const sql = `SELECT * FROM productos WHERE entradas_id = ?`;
  db.query(sql, [entradas_id], callback);
};
