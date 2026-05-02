const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

router.get('/', usuariosController.getAllUsuarios);
router.get('/:id', usuariosController.getUsuarioById);
router.post('/create', usuariosController.createUsuario);
router.put('/:id', usuariosController.updateUsuario);
router.delete('/:id', usuariosController.deleteUsuario);

// Rutas adicionales
router.get('/rol/:roles_id', usuariosController.getByRolId);
router.get('/cliente/:clientes_id', usuariosController.getByClienteId);

module.exports = router;

