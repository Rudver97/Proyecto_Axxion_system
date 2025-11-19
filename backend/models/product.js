const db = require('../config/config');

const Product = {};

// Obtener todos los productos
Product.findAll = (result) => {
    const sql = `
        SELECT * FROM productos
    `;
    db.query(sql, (err, products) => {
        if (err) {
            console.log('Error al obtener productos:', err);
            result(err, null);
        } else {
            console.log('Productos encontrados:', products.length);
            result(null, products);
        }
    });
};

// Buscar producto por ID
Product.findById = (id, result) => {
    const sql = `
        SELECT 
        *
        FROM productos
        WHERE id = ?
    `;
    db.query(sql, [id], (err, product) => {
        if (err) {
            console.log('Error al consultar producto:', err);
            result(err, null);
        } else if (product.length === 0) {
            console.log('Producto no encontrado');
            result(null, null);
        } else {
            console.log('Producto consultado:', product[0]);
            result(null, product[0]);
        }
    });
};

// Crear producto
Product.create = (product, result) => {
    const sql = `
        INSERT INTO producto (
            nombre,
            detalle,
            estado,
            direccion,
            stok_id,
            subcategorias_id,
            salida_id,
            entradas_id
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    db.query(sql, [
        product.nombre,
        product.detalle,
        product.estado,
        product.direccion,
        product.stok_id,
        product.subcategorias_id,
        product.salida_id,
        product.entradas_id
    ], (err, res) => {
        if (err) {
            console.log('Error al crear producto:', err);
            result(err, null);
        } else {
            console.log('Producto creado:', { id: res.insertId, ...product });
            result(null, { id: res.insertId, ...product });
        }
    });
};

// Actualizar producto
Product.update = (product, result) => {
    const fields = [];
    const values = [];

    if (product.nombre) {
        fields.push("nombre = ?");
        values.push(product.nombre);
    }
    if (product.detalle) {
        fields.push("detalle = ?");
        values.push(product.detalle);
    }
    if (product.estado) {
        fields.push("estado = ?");
        values.push(product.estado);
    }
    if (product.direccion) {
        fields.push("direccion = ?");
        values.push(product.direccion);
    }
    if (product.stok_id) {
        fields.push("stok_id = ?");
        values.push(product.stok_id);
    }
    if (product.subcategorias_id) {
        fields.push("subcategorias_id = ?");
        values.push(product.subcategorias_id);
    }
    if (product.salida_id) {
        fields.push("salida_id = ?");
        values.push(product.salida_id);
    }
    if (product.entradas_id) {
        fields.push("entradas_id = ?");
        values.push(product.entradas_id);
    }

    fields.push("updated_at = NOW()");
    const sql = `UPDATE producto SET ${fields.join(", ")} WHERE id = ?`;
    values.push(product.id);

    db.query(sql, values, (err, res) => {
        if (err) {
            console.log('Error al actualizar producto:', err);
            result(err, null);
        } else {
            console.log('Producto actualizado:', { id: product.id, ...product });
            result(null, { id: product.id, ...product });
        }
    });
};

// Eliminar producto
Product.delete = (id, result) => {
    const sql = `DELETE FROM producto WHERE id = ?`;
    db.query(sql, [id], (err, res) => {
        if (err) {
            console.log('Error al eliminar producto:', err);
            result(err, null);
        } else {
            console.log('Producto eliminado con id:', id);
            result(null, res);
        }
    });
};

module.exports = Product;
