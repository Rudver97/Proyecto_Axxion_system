const express = require('express');
const router = express.Router();
const salidaController = require('../controllers/salidaController');

router.get('/', salidaController.getAllSalidas);
router.get('/:id', salidaController.getSalidaById);
router.get('/alquiler/:alquiler_id', salidaController.getByAlquilerId);
router.post('/', salidaController.createSalida);
router.put('/:id', salidaController.updateSalida);
router.delete('/:id', salidaController.deleteSalida);

module.exports = router;
