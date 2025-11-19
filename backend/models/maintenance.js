const db = require('../config/config');
const bcrypt = require('bcryptjs');
const maintenance = {};

// Obtener todos los mantenimientos
maintenance.findAll = (result) => {
    const sql = `
        SELECT 
            *
        FROM mantenimiento
    `;
    db.query(sql, (err, maintenances) => {
        if (err) {
            console.log('Error al listar mantenimientos:', err);
            result(err, null);
        } else {
            console.log('Mantenimientos encontrados:', maintenances.length);
            result(null, maintenances);
        }
    });
};

// Obtener mantenimiento por ID
maintenance.findById = (id, result) => {
    const sql = `SELECT * FROM mantenimiento WHERE id = ?`;
    db.query(sql, [id], (err, maintenance) => {
        if (err) {
            console.log('Error al consultar mantenimiento:', err);
            result(err, null);
        } else if (maintenance.length === 0) {
            result(null, null);
        } else {
            result(null, maintenance[0]);
        }
    });
};

// Crear mantenimiento
maintenance.create = (maintenance, result) => {
    const sql = `
        INSERT INTO mantenimiento (
            tipo_mantenimiento,
            descripcion,
            costo,
            estado,
            productos_id
        ) VALUES (?, ?, ?, ?, ?)
    `;
    db.query(sql, [
        maintenance.tipo_mantenimiento,
        maintenance.descripcion,
        maintenance.costo,
        maintenance.estado || 'pendiente',
        maintenance.productos_id
    ], (err, res) => {
        if (err) {
            console.log('Error al crear mantenimiento:', err);
            result(err, null);
        } else {
            console.log('Mantenimiento creado:', { id: res.insertId, ...maintenance });
            result(null, { id: res.insertId, ...maintenance });
        }
    });
};

// Actualizar mantenimiento
maintenance.update = (maintenance, result) => {
    const fields = [];
    const values = [];

    if (maintenance.tipo_mantenimiento) {
        fields.push("tipo_mantenimiento = ?");
        values.push(maintenance.tipo_mantenimiento);
    }
    if (maintenance.descripcion) {
        fields.push("descripcion = ?");
        values.push(maintenance.descripcion);
    }
    if (maintenance.costo) {
        fields.push("costo = ?");
        values.push(maintenance.costo);
    }
    if (maintenance.estado) {
        fields.push("estado = ?");
        values.push(maintenance.estado);
    }
    if (maintenance.productos_id) {
        fields.push("productos_id = ?");
        values.push(maintenance.productos_id);
    }

    fields.push("updated_at = NOW()");
    const sql = `UPDATE mantenimiento SET ${fields.join(", ")} WHERE id = ?`;
    values.push(maintenance.id);

    db.query(sql, values, (err, res) => {
        if (err) {
            console.log('Error al actualizar mantenimiento:', err);
            result(err, null);
        } else {
            console.log('Mantenimiento actualizado:', { id: maintenance.id, ...maintenance });
            result(null, { id: maintenance.id, ...maintenance });
        }
    });
};

// Eliminar mantenimiento
maintenance.delete = (id, result) => {
    const sql = `DELETE FROM mantenimiento WHERE id = ?`;
    db.query(sql, [id], (err, res) => {
        if (err) {
            console.log('Error al eliminar mantenimiento:', err);
            result(err, null);
        } else {
            console.log('Mantenimiento eliminado con id:', id);
            result(null, res);
        }
    });
};

module.exports = maintenance;
