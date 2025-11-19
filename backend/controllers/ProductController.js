const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const Product = require('../models/Product');

// Controlador de productos
const ProductController = {
    
    // Obtener todos los productos
    getAll(req, res) {
        Product.findAll((err, products) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error al listar productos',
                    error: err
                });
            }
            return res.status(200).json({
                success: true,
                message: 'Lista de productos obtenida correctamente',
                data: products
            });
        });
    },

    // Obtener un producto por ID
    getById(req, res) {
        const id = req.params.id;
        Product.findById(id, (err, product) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error al consultar el producto',
                    error: err
                });
            }
            if (!product) {
                return res.status(404).json({
                    success: false,
                    message: 'Producto no encontrado'
                });
            }
            return res.status(200).json({
                success: true,
                message: 'Producto encontrado',
                data: product
            });
        });
    },

    // Crear un nuevo producto
    create(req, res) {
        const product = req.body;
        Product.create(product, (err, data) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error al crear el producto',
                    error: err
                });
            }
            return res.status(201).json({
                success: true,
                message: 'Producto creado correctamente',
                data: data
            });
        });
    },

    // Actualizar producto
    update(req, res) {
        const product = req.body;
        Product.update(product, (err, data) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error al actualizar el producto',
                    error: err
                });
            }
            return res.status(200).json({
                success: true,
                message: 'Producto actualizado correctamente',
                data: data
            });
        });
    },

    // Eliminar producto
    delete(req, res) {
        const id = req.params.id;
        Product.delete(id, (err, data) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error al eliminar el producto',
                    error: err
                });
            }
            return res.status(200).json({
                success: true,
                message: 'Producto eliminado correctamente',
                data: data
            });
        });
    }
};

module.exports = ProductController;
