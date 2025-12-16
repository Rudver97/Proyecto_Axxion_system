const Categoria = require('../models/Categoria');

exports.getAllCategorias = (req, res) => {
  Categoria.getAll((err, data) => {
    if (err) return res.status(500).json({ error: err });
    res.json(data);
  });
};

exports.getCategoriaById = (req, res) => {
  const id = req.params.id;
  Categoria.getById(id, (err, data) => {
    if (err) return res.status(500).json({ error: err });
    res.json(data[0]);
  });
};

exports.createCategoria = (req, res) => {
  Categoria.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Categoría creada', id: result.insertId });
  });
};

exports.updateCategoria = (req, res) => {
  const id = req.params.id;
  Categoria.update(id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Categoría actualizada' });
  });
};

exports.deleteCategoria = (req, res) => {
  const id = req.params.id;
  Categoria.delete(id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Categoría eliminada' });
  });
};

