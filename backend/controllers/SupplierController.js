const Supplier = require('../models/supplier');
const SupplierController = {

    // Obtener todos los proveedores
    getAll(req, res) {
        Supplier.findAll((err, suppliers) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error al listar proveedores',
                    error: err
                });
            }
            return res.status(200).json({
                success: true,
                message: 'Lista de proveedores obtenida correctamente',
                data: suppliers
            });
        });
    },

    // Obtener proveedor por ID
    getById(req, res) {
        const id = req.params.id;
        Supplier.findById(id, (err, supplier) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error al consultar proveedor',
                    error: err
                });
            }
            if (!supplier) {
                return res.status(404).json({
                    success: false,
                    message: 'Proveedor no encontrado'
                });
            }
            return res.status(200).json({
                success: true,
                message: 'Proveedor encontrado',
                data: supplier
            });
        });
    },

    // Crear proveedor
    create(req, res) {
        const supplier = req.body;

        if (!supplier.nombre || !supplier.telefono || !supplier.direccion) {
            return res.status(400).json({
                success: false,
                message: 'Faltan campos obligatorios: nombre, teléfono o dirección'
            });
        }

        Supplier.create(supplier, (err, data) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error al crear proveedor',
                    error: err
                });
            }
            return res.status(201).json({
                success: true,
                message: 'Proveedor creado correctamente',
                data
            });
        });
    },

    // Actualizar proveedor
    update(req, res) {
        const supplier = req.body;

        if (!supplier.id) {
            return res.status(400).json({
                success: false,
                message: 'Debe proporcionar el ID del proveedor para actualizar'
            });
        }

        Supplier.update(supplier, (err, data) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error al actualizar proveedor',
                    error: err
                });
            }
            return res.status(200).json({
                success: true,
                message: 'Proveedor actualizado correctamente',
                data
            });
        });
    },

    // Eliminar proveedor
    delete(req, res) {
        const id = req.params.id;
        Supplier.delete(id, (err, data) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error al eliminar proveedor',
                    error: err
                });
            }
            return res.status(200).json({
                success: true,
                message: 'Proveedor eliminado correctamente',
                data
            });
        });
    }
};

module.exports = SupplierController;
