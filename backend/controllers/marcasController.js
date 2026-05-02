const Marcas = require('../models/Marcas');

exports.getAllMarcas = (req, res) => {
  Marcas.getAll((err, data) => {
    if (err) return res.status(500).json({ error: err });
    res.json(data);
  });
};

exports.getMarcaById = (req, res) => {
  const id = req.params.id;
  Marcas.getById(id, (err, data) => {
    if (err) return res.status(500).json({ error: err });
    res.json(data[0]);
  });
};

exports.createMarcas = (req, res) => {
  Marcas.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Marca creada', id: result.insertId });
  });
};