const Producto = require('../models/Productos');

exports.getAllProductos = (req, res) => {
  Producto.getAll((err, data) => {
    if (err) return res.status(500).json({ error: err });
    res.json(data);
  });
};

exports.getProductoById = (req, res) => {
  const id = req.params.id;
  Producto.getById(id, (err, data) => {
    if (err) return res.status(500).json({ error: err });
    if (!data.length) return res.status(404).json({ msg: 'Producto no encontrado' });
    res.json(data[0]);
  });
};

exports.createProducto = (req, res) => {
  Producto.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Producto creado', id: result.insertId });
  });
};

exports.updateProducto = (req, res) => {
  const id = req.params.id;
  Producto.update(id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Producto actualizado' });
  });
};

exports.deleteProducto = (req, res) => {
  const id = req.params.id;
  Producto.delete(id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Producto eliminado' });
  });
};

exports.getBySubcategoriaId = (req, res) => {
  const subcategorias_id = req.params.subcategorias_id;
  Producto.getBySubcategoriaId(subcategorias_id, (err, data) => {
    if (err) return res.status(500).json({ error: err });
    res.json(data);
  });
};

exports.getByEntradaId = (req, res) => {
  const entradas_id = req.params.entradas_id;
  Producto.getByEntradaId(entradas_id, (err, data) => {
    if (err) return res.status(500).json({ error: err });
    res.json(data);
  });
};
