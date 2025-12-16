const Salida = require('../models/Salida');

exports.getAllSalidas = (req, res) => {
  Salida.getAll((err, data) => {
    if (err) return res.status(500).json({ error: err });
    res.json(data);
  });
};

exports.getSalidaById = (req, res) => {
  const id = req.params.id;
  Salida.getById(id, (err, data) => {
    if (err) return res.status(500).json({ error: err });
    res.json(data[0]);
  });
};

exports.createSalida = (req, res) => {
  Salida.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Salida creada', id: result.insertId });
  });
};

exports.updateSalida = (req, res) => {
  const id = req.params.id;
  Salida.update(id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Salida actualizada' });
  });
};

exports.deleteSalida = (req, res) => {
  const id = req.params.id;
  Salida.delete(id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Salida eliminada' });
  });
};

exports.getByAlquilerId = (req, res) => {
  const alquiler_id = req.params.alquiler_id;
  Salida.getByAlquilerId(alquiler_id, (err, data) => {
    if (err) return res.status(500).json({ error: err });
    res.json(data);
  });
};
