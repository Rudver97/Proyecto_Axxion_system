const express = require('express');
const router = express.Router();
const entradasController = require('../controllers/entradasController');

router.get('/', entradasController.getAllEntradas);
router.get('/:id', entradasController.getEntradaById);
router.get('/proveedor/:id_proveedor', entradasController.getByProveedorId);
router.post('/', entradasController.createEntrada);
router.put('/:id', entradasController.updateEntrada);
router.delete('/:id', entradasController.deleteEntrada);

module.exports = router;
