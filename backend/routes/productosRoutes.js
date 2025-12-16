const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productosController");

// CRUD
router.get("/", productosController.getAllProductos);
router.get("/:id", productosController.getProductoById);
router.post("/", productosController.createProducto);
router.put("/:id", productosController.updateProducto);
router.delete("/:id", productosController.deleteProducto);

// Rutas adicionales
router.get("/subcategoria/:subcategorias_id", productosController.getBySubcategoriaId);
router.get("/entrada/:entradas_id", productosController.getByEntradaId);

module.exports = router;
