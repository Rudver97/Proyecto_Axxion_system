const bcrypt = require('bcryptjs');
const db = require('../config/db');

module.exports = () => {
  const password = bcrypt.hashSync('123456', 10);

  db.query(
    "SELECT * FROM usuarios WHERE correo_electronico = 'admin@axxion.com'",
    (err, rows) => {
      if (err) {
        console.error(err);
        return;
      }

      if (rows.length === 0) {
        db.query(
          `INSERT INTO usuarios
          (nombre, correo_electronico, contraseña, telefono, rol_id, direccion)
          VALUES ('Administrador','admin@axxion.com', ?, '3000000000', 1, 'Oficina Principal')`,
          [password],
          () => console.log('✅ Usuario admin creado')
        );
      } else {
        console.log('ℹ️ Usuario admin ya existe');
      }
    }
  );
};
