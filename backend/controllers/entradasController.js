const Entrada = require('../models/Entrada');

exports.getAllEntradas = (req, res) => {
  Entrada.getAll((err, data) => {
    if (err) return res.status(500).json({ error: err });
    res.json(data);
  });
};

exports.getEntradaById = (req, res) => {
  const id = req.params.id;
  Entrada.getById(id, (err, data) => {
    if (err) return res.status(500).json({ error: err });
    res.json(data[0]);
  });
};

exports.createEntrada = (req, res) => {
  Entrada.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Entrada creada', id: result.insertId });
  });
};

exports.updateEntrada = (req, res) => {
  const id = req.params.id;
  Entrada.update(id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Entrada actualizada' });
  });
};

exports.deleteEntrada = (req, res) => {
  const id = req.params.id;
  Entrada.delete(id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Entrada eliminada' });
  });
};

exports.getByProveedorId = (req, res) => {
  const id_proveedor = req.params.id_proveedor;
  Entrada.getByProveedorId(id_proveedor, (err, data) => {
    if (err) return res.status(500).json({ error: err });
    res.json(data);
  });
};
