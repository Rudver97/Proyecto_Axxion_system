const express = require('express');
const router = express.Router();
const subcategoriasController = require('../controllers/subcategoriasController');

router.get('/', subcategoriasController.getAllSubcategorias);
router.get('/:id', subcategoriasController.getSubcategoriaById);
router.get('/categoria/:categorias_id', subcategoriasController.getByCategoriaId);
router.post('/', subcategoriasController.createSubcategoria);
router.put('/:id', subcategoriasController.updateSubcategoria);
router.delete('/:id', subcategoriasController.deleteSubcategoria);

module.exports = router;
