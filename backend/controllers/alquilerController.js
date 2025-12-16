const Alquiler = require('../models/Alquiler');

exports.getAllAlquileres = (req, res) => {
  Alquiler.getAll((err, data) => {
    if (err) return res.status(500).json({ error: err });
    res.json(data);
  });
};

exports.getAlquilerById = (req, res) => {
  const id = req.params.id;
  Alquiler.getById(id, (err, data) => {
    if (err) return res.status(500).json({ error: err });
    res.json(data[0]);
  });
};

exports.createAlquiler = (req, res) => {
  Alquiler.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Alquiler creado', id: result.insertId });
  });
};

exports.updateAlquiler = (req, res) => {
  const id = req.params.id;
  Alquiler.update(id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Alquiler actualizado' });
  });
};

exports.deleteAlquiler = (req, res) => {
  const id = req.params.id;
  Alquiler.delete(id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Alquiler eliminado' });
  });
};
