const Subcategoria = require('../models/Subcategoria');

exports.getAllSubcategorias = (req, res) => {
  Subcategoria.getAll((err, data) => {
    if (err) return res.status(500).json({ error: err });
    res.json(data);
  });
};

exports.getSubcategoriaById = (req, res) => {
  const id = req.params.id;
  Subcategoria.getById(id, (err, data) => {
    if (err) return res.status(500).json({ error: err });
    res.json(data[0]);
  });
};

exports.createSubcategoria = (req, res) => {
  Subcategoria.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Subcategoría creada', id: result.insertId });
  });
};

exports.updateSubcategoria = (req, res) => {
  const id = req.params.id;
  Subcategoria.update(id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Subcategoría actualizada' });
  });
};

exports.deleteSubcategoria = (req, res) => {
  const id = req.params.id;
  Subcategoria.delete(id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Subcategoría eliminada' });
  });
};

exports.getByCategoriaId = (req, res) => {
  const categorias_id = req.params.categorias_id;
  Subcategoria.getByCategoriaId(categorias_id, (err, data) => {
    if (err) return res.status(500).json({ error: err });
    res.json(data);
  });
};
