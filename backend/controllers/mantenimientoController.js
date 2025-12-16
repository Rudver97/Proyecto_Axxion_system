const Mantenimiento = require('../models/Mantenimiento');

exports.getAllMantenimientos = (req, res) => {
  Mantenimiento.getAll((err, data) => {
    if (err) return res.status(500).json({ error: err });
    res.json(data);
  });
};

exports.getMantenimientoById = (req, res) => {
  const { id, productos_id } = req.params;
  Mantenimiento.getById(id, productos_id, (err, data) => {
    if (err) return res.status(500).json({ error: err });
    res.json(data[0]);
  });
};

exports.createMantenimiento = (req, res) => {
  Mantenimiento.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Mantenimiento creado', id: result.insertId });
  });
};

exports.updateMantenimiento = (req, res) => {
  const { id, productos_id } = req.params;
  Mantenimiento.update(id, productos_id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Mantenimiento actualizado' });
  });
};

exports.deleteMantenimiento = (req, res) => {
  const { id, productos_id } = req.params;
  Mantenimiento.delete(id, productos_id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Mantenimiento eliminado' });
  });
};

exports.getByProductoId = (req, res) => {
  const productos_id = req.params.productos_id;
  Mantenimiento.getByProductoId(productos_id, (err, data) => {
    if (err) return res.status(500).json({ error: err });
    res.json(data);
  });
};
