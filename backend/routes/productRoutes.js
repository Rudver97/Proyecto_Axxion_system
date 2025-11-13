const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');

// Rutas CRUD
router.get('/', ProductController.getAll);
router.get('/:id', ProductController.getById);
router.post('/', ProductController.create);
router.put('/', ProductController.update);
router.delete('/:id', ProductController.delete);

module.exports = router;
