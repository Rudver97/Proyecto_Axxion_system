const Cliente = require('../models/Cliente');

exports.getAllClientes = (req, res) => {
  Cliente.getAll((err, data) => {
    if (err) return res.status(500).json({ error: err });
    res.json(data);
  });
};

exports.getClienteById = (req, res) => {
  const id = req.params.id;
  Cliente.getById(id, (err, data) => {
    if (err) return res.status(500).json({ error: err });
    res.json(data[0]);
  });
};

exports.createCliente = (req, res) => {
  Cliente.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Cliente creado', id: result.insertId });
  });
};

exports.updateCliente = (req, res) => {
  const id = req.params.id;
  Cliente.update(id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Cliente actualizado' });
  });
};

exports.deleteCliente = (req, res) => {
  const id = req.params.id;
  Cliente.delete(id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Cliente eliminado' });
  });
};

exports.getByAlquilerId = (req, res) => {
  const alquiler_id = req.params.alquiler_id;
  Cliente.getByAlquilerId(alquiler_id, (err, data) => {
    if (err) return res.status(500).json({ error: err });
    res.json(data);
  });
};
