const express = require('express');
const router = express.Router();
const mantenimientoController = require('../controllers/mantenimientoController');

router.get('/', mantenimientoController.getAllMantenimientos);
router.get('/:id/:productos_id', mantenimientoController.getMantenimientoById);
router.get('/producto/:productos_id', mantenimientoController.getByProductoId);
router.post('/', mantenimientoController.createMantenimiento);
router.put('/:id/:productos_id', mantenimientoController.updateMantenimiento);
router.delete('/:id/:productos_id', mantenimientoController.deleteMantenimiento);

module.exports = router;
