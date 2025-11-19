const db = require('../config/config');
const Category = {};

// Listar todas las categorías
category.findAll = (result) => {
    const sql = `
        SELECT 
            id, 
            nombre, 
            descripcion, 
            estado, 
            created_at, 
            updated_at 
        FROM categoria
    `;
    db.query(sql, (err, categories) => {
        if (err) {
            console.log('Error al listar categorías: ', err);
            result(err, null);
        } else {
            console.log('Categorías encontradas: ', categories.length);
            result(null, categories);
        }
    });
};

// Buscar una categoría por ID
Category.findById = (id, result) => {
    const sql = `
        SELECT 
            id, 
            nombre, 
            descripcion, 
            estado, 
            created_at, 
            updated_at 
        FROM categoria 
        WHERE id = ?
    `;
    db.query(sql, [id], (err, category) => {
        if (err) {
            console.log('Error al consultar categoría: ', err);
            result(err, null);
        } else {
            console.log('Categoría consultada: ', category[0]);
            result(null, category[0]);
        }
    });
};

// Crear una nueva categoría
Category.create = (category, result) => {
    const sql = `
        INSERT INTO categoria (
            nombre, 
            descripcion, 
            estado
        ) VALUES (?, ?, ?)
    `;
    db.query(sql, [category.nombre, category.descripcion, category.estado], (err, res) => {
        if (err) {
            console.log('Error al crear categoría: ', err);
            result(err, null);
        } else {
            console.log('Categoría creada: ', { id: res.insertId, ...category });
            result(null, { id: res.insertId, ...category });
        }
    });
};

// Actualizar una categoría
Category.update = (category, result) => {
    const sql = `
        UPDATE categoria 
        SET nombre = ?, descripcion = ?, estado = ?, updated_at = NOW() 
        WHERE id = ?
    `;
    db.query(sql, [category.nombre, category.descripcion, category.estado, category.id], (err, res) => {
        if (err) {
            console.log('Error al actualizar categoría: ', err);
            result(err, null);
        } else {
            console.log('Categoría actualizada: ', { id: category.id, ...category });
            result(null, { id: category.id, ...category });
        }
    });
};

// Eliminar una categoría
Category.delete = (id, result) => {
    const sql = `DELETE FROM categoria WHERE id = ?`;
    db.query(sql, [id], (err, res) => {
        if (err) {
            console.log('Error al eliminar categoría: ', err);
            result(err, null);
        } else {
            console.log('Categoría eliminada con id: ', id);
            result(null, res);
        }
    });
};

module.exports = Category;
