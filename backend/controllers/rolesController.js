const Rol = require('../models/Rol');

exports.getAllRoles = (req, res) => {
  Rol.getAll((err, data) => {
    if (err) return res.status(500).json({ error: err });
    res.json(data);
  });
};

exports.getRolById = (req, res) => {
  const id = req.params.id;
  Rol.getById(id, (err, data) => {
    if (err) return res.status(500).json({ error: err });
    res.json(data[0]);
  });
};

exports.createRol = (req, res) => {
  Rol.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Rol creado', id: result.insertId });
  });
};

exports.updateRol = (req, res) => {
  const id = req.params.id;
  Rol.update(id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Rol actualizado' });
  });
};

exports.deleteRol = (req, res) => {
  const id = req.params.id;
  Rol.delete(id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Rol eliminado' });
  });
};
