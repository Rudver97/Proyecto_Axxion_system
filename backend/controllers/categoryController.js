const category = require('../models/Category');


module.exports = {

    // Obtener todas las categorías
    getAll(req, res) {
        category.findAll((err, categories) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Error al listar categorías',
                    error: err
                });
            }
            return res.status(200).json({
                success: true,
                message: 'Lista de categorías',
                data: categories
            });
        });
    },

    // Obtener una categoría por ID
    getById(req, res) {
        const id = req.params.id;
        category.findById(id, (err, category) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Error al consultar la categoría',
                    error: err
                });
            }
            if (!category) {
                return res.status(404).json({
                    success: false,
                    message: 'Categoría no encontrada'
                });
            }
            return res.status(200).json({
                success: true,
                message: 'Categoría encontrada',
                data: category
            });
        });
    },

    // Crear una nueva categoría
    create(req, res) {
        const category = req.body;

        if (!category.nombre || !category.descripcion) {
            return res.status(400).json({
                success: false,
                message: 'Los campos nombre y descripción son obligatorios'
            });
        }

        if (!category.estado) {
            category.estado = 'activo'; // valor por defecto
        }

        category.create(category, (err, data) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Error al crear la categoría',
                    error: err
                });
            }
            return res.status(201).json({
                success: true,
                message: 'Categoría creada correctamente',
                data: data
            });
        });
    },

    // Actualizar una categoría
    update(req, res) {
        const category = req.body;

        if (!category.id) {
            return res.status(400).json({
                success: false,
                message: 'El campo id es obligatorio para actualizar'
            });
        }

        category.update(category, (err, data) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Error al actualizar la categoría',
                    error: err
                });
            }
            return res.status(200).json({
                success: true,
                message: 'Categoría actualizada correctamente',
                data: data
            });
        });
    },

    // Eliminar una categoría
    delete(req, res) {
        const id = req.params.id;
        category.delete(id, (err, data) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Error al eliminar la categoría',
                    error: err
                });
            }
            return res.status(200).json({
                success: true,
                message: 'Categoría eliminada correctamente',
                data: data
            });
        });
    }
};

module.exports = categoryController;
