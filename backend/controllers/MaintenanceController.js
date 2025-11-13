const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const Maintenance = require('../models/maintenance');

// Controlador de mantenimiento
const MaintenanceController = {

    //Obtener todos los mantenimientos
    getAll(req, res) {
        Maintenance.findAll((err, maintenances) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error al listar mantenimientos',
                    error: err
                });
            }
            return res.status(200).json({
                success: true,
                message: 'Lista de mantenimientos obtenida correctamente',
                data: maintenances
            });
        });
    },

    //  Obtener mantenimiento por ID
    getById(req, res) {
        const id = req.params.id;
        Maintenance.findById(id, (err, maintenance) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error al consultar el mantenimiento',
                    error: err
                });
            }
            if (!maintenance) {
                return res.status(404).json({
                    success: false,
                    message: 'Mantenimiento no encontrado'
                });
            }
            return res.status(200).json({
                success: true,
                message: 'Mantenimiento encontrado',
                data: maintenance
            });
        });
    },

    // Crear mantenimiento
    create(req, res) {
        const maintenance = req.body;

        if (!maintenance.tipo_mantenimiento || !maintenance.descripcion || !maintenance.costo) {
            return res.status(400).json({
                success: false,
                message: 'Faltan campos obligatorios: tipo_mantenimiento, descripcion o costo'
            });
        }

        Maintenance.create(maintenance, (err, data) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error al crear el mantenimiento',
                    error: err
                });
            }
            return res.status(201).json({
                success: true,
                message: 'Mantenimiento creado correctamente',
                data
            });
        });
    },

    // Actualizar mantenimiento
    update(req, res) {
        const maintenance = req.body;

        if (!maintenance.id) {
            return res.status(400).json({
                success: false,
                message: 'Debe proporcionar el ID del mantenimiento para actualizar'
            });
        }

        Maintenance.update(maintenance, (err, data) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error al actualizar el mantenimiento',
                    error: err
                });
            }
            return res.status(200).json({
                success: true,
                message: 'Mantenimiento actualizado correctamente',
                data
            });
        });
    },

    // Eliminar mantenimiento
    delete(req, res) {
        const id = req.params.id;
        Maintenance.delete(id, (err, data) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error al eliminar el mantenimiento',
                    error: err
                });
            }
            return res.status(200).json({
                success: true,
                message: 'Mantenimiento eliminado correctamente',
                data
            });
        });
    }
};

module.exports = MaintenanceController;
