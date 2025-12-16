const express = require('express');
const router = express.Router();
const alquilerController = require('../controllers/alquilerController');

router.get('/', alquilerController.getAllAlquileres);
router.get('/:id', alquilerController.getAlquilerById);
router.post('/', alquilerController.createAlquiler);
router.put('/:id', alquilerController.updateAlquiler);
router.delete('/:id', alquilerController.deleteAlquiler);

module.exports = router;
