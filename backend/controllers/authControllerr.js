const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../config/db');

exports.login = (req, res) => {
  const { correo_electronico, contraseña } = req.body;

  db.query(
    `SELECT u.*, r.nombre_rol 
     FROM usuarios u 
     JOIN roles r ON u.rol_id = r.id 
     WHERE u.correo_electronico = ?`,
    [correo_electronico],
    async (err, rows) => {
      if (err) return res.status(500).json(err);

      if (rows.length === 0) {
        return res.status(401).json({ message: 'Usuario no existe' });
      }

      const usuario = rows[0];

      const valid = await bcrypt.compare(contraseña, usuario.contraseña);
      if (!valid) return res.status(401).json({ message: 'Contraseña incorrecta' });

      const token = jwt.sign(
        { id: usuario.id, rol: usuario.nombre_rol },
        'SECRET_AXXION',
        { expiresIn: '8h' }
      );

      res.json({
        token,
        usuario: {
          id: usuario.id,
          nombre: usuario.nombre,
          rol: usuario.nombre_rol
        }
      });
    }
  );
};
