const usuarios = require('../models/usuarios');  // <--- IMPORTACIÓN CORRECTA

exports.getAllUsuarios = (req, res) => {
  usuarios.getAll((err, data) => {
    if (err) return res.status(404).json({ error: err });
    res.json(data);
  });
};

exports.getUsuarioById = (req, res) => {
  const id = req.params.id;
  usuarios.getById(id, (err, data) => {
    if (err) return res.status(500).json({ error: err });
    res.json(data[0]);
  });
};

exports.createUsuario = (req, res) => {
  usuarios.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Usuario creado', id: result.insertId });
  });
};

exports.updateUsuario = (req, res) => {
  const id = req.params.id;
  usuarios.update(id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Usuario actualizado' });
  });
};

exports.deleteUsuario = (req, res) => {
  const id = req.params.id;
  usuarios.delete(id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Usuario eliminado' });
  });
};

exports.getByRolId = (req, res) => {
  const roles_id = req.params.roles_id;
  usuarios.getByRolId(roles_id, (err, data) => {
    if (err) return res.status(500).json({ error: err });
    res.json(data);
  });
};

exports.getByClienteId = (req, res) => {
  const clientes_id = req.params.clientes_id;
  usuarios.getByClienteId(clientes_id, (err, data) => {
    if (err) return res.status(500).json({ error: err });
    res.json(data);
  });
};

