const Proveedor = require('../models/Proveedor');

exports.getAllProveedores = (req, res) => {
  Proveedor.getAll((err, data) => {
    if (err) return res.status(500).json({ error: err });
    res.json(data);
  });
};

exports.getProveedorById = (req, res) => {
  const id = req.params.id;
  Proveedor.getById(id, (err, data) => {
    if (err) return res.status(500).json({ error: err });
    res.json(data[0]);
  });
};

exports.createProveedor = (req, res) => {
  Proveedor.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Proveedor creado', id: result.insertId });
  });
};

exports.updateProveedor = (req, res) => {
  const id = req.params.id;
  Proveedor.update(id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Proveedor actualizado' });
  });
};

exports.deleteProveedor = (req, res) => {
  const id = req.params.id;
  Proveedor.delete(id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Proveedor eliminado' });
  });
};
