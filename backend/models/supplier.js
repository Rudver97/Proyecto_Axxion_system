const db = require('../config/config');
const Supplier = {};

// Obtener todos los proveedores
Supplier.findAll = (result) => {
    const sql = `
        SELECT 
            id,
            nombre,
            telefono,
            direccion,
            estado,
            created_at,
            updated_at
        FROM proveedor
    `;
    db.query(sql, (err, suppliers) => {
        if (err) {
            console.log('Error al listar proveedores:', err);
            result(err, null);
        } else {
            console.log('Proveedores encontrados:', suppliers.length);
            result(null, suppliers);
        }
    });
};

// 🔍 Obtener proveedor por ID
Supplier.findById = (id, result) => {
    const sql = `
        SELECT 
            id,
            nombre,
            telefono,
            direccion,
            estado,
            created_at,
            updated_at
        FROM proveedor
        WHERE id = ?
    `;
    db.query(sql, [id], (err, supplier) => {
        if (err) {
            console.log('Error al consultar proveedor:', err);
            result(err, null);
        } else if (supplier.length === 0) {
            console.log('Proveedor no encontrado con id:', id);
            result(null, null);
        } else {
            console.log('Proveedor consultado:', supplier[0]);
            result(null, supplier[0]);
        }
    });
};

// Crear proveedor
Supplier.create = (supplier, result) => {
    const sql = `
        INSERT INTO proveedor (
            nombre,
            telefono,
            direccion,
            estado
        ) VALUES (?, ?, ?, ?)
    `;
    db.query(sql, [
        supplier.nombre,
        supplier.telefono,
        supplier.direccion,
        supplier.estado || 'activo'
    ], (err, res) => {
        if (err) {
            console.log('Error al crear proveedor:', err);
            result(err, null);
        } else {
            console.log('Proveedor creado:', { id: res.insertId, ...supplier });
            result(null, { id: res.insertId, ...supplier });
        }
    });
};

// Actualizar proveedor
Supplier.update = (supplier, result) => {
    const fields = [];
    const values = [];

    if (supplier.nombre) {
        fields.push("nombre = ?");
        values.push(supplier.nombre);
    }
    if (supplier.telefono) {
        fields.push("telefono = ?");
        values.push(supplier.telefono);
    }
    if (supplier.direccion) {
        fields.push("direccion = ?");
        values.push(supplier.direccion);
    }
    if (supplier.estado) {
        fields.push("estado = ?");
        values.push(supplier.estado);
    }

    fields.push("updated_at = NOW()");
    const sql = `UPDATE proveedor SET ${fields.join(", ")} WHERE id = ?`;
    values.push(supplier.id);

    db.query(sql, values, (err, res) => {
        if (err) {
            console.log('Error al actualizar proveedor:', err);
            result(err, null);
        } else {
            console.log('Proveedor actualizado:', { id: supplier.id, ...supplier });
            result(null, { id: supplier.id, ...supplier });
        }
    });
};

// Eliminar proveedor
Supplier.delete = (id, result) => {
    const sql = `DELETE FROM proveedor WHERE id = ?`;
    db.query(sql, [id], (err, res) => {
        if (err) {
            console.log('Error al eliminar proveedor:', err);
            result(err, null);
        } else {
            console.log('Proveedor eliminado con id:', id);
            result(null, res);
        }
    });
};

module.exports = Supplier;
