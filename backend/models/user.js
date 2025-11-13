const db = require('../config/config');
const bcrypt = require('bcryptjs');
const User = {};

User.findAll = (result) => {
    const sql = `SELECT id,nombre,correo_electronico, rol_id, ,direccion, created_at, updated_at FROM usuario`;
    db.query(sql, (err, users) => {
        if (err) {
            console.log('Error al listar usuario: ', err);
            result(err, null);
        } else {
            console.log('Usuarios encontrados: ', users.length);
            result(null, users);
        }
    });
};

User.findById = (id, result) => {
    const sql = `SELECT id,nombre,correo_electronico, rol_id, contraseña,direccion,FROM usuario WHERE id = ?`;
    db.query(sql, [id], (err, user) => {
        if (err) {
            console.log('Error al consultar: ', err);
            result(err, null);
        }
        else {
            console.log('Usuario consultado: ',  user[0] );
            result(null, user[0]);
        }
    });
};

User.findByEmail = (correo_electrónico, result) => {
    const sql = `SELECT id,nombre,correo_electronico, rol_id, contraseña hash FROM usuario WHERE correo_electrónico = ?`;
    db.query(sql, [correo_electrónico], (err, user) => {
        if (err) {
            console.log('Error al consultar: ', err);
            result(err, null);
        }
        else {
            console.log('Usuario consultado: ',  user[0] );
            result(null, user[0]);
        }
    });
};

User.create = async (user, result) => {
    const hash = await bcrypt.hash(user.contraseña, 10)  
    const validRoles = [1,2];
    const role = validRoles.includes(user.role) ? user.role : 2;
    const sql = `INSERT INTO usuarios (
                    nombre,
                    correo,
                    contraseña,
                    rol_id, 
                    direccion,
                    telefono
                ) VALUES (?,?,?,?,?,?)`;
    db.query(sql,
        [
            user.nombre,
            user.correo,
            hash,
            role,
            user.direccion,
            user.telefono,
        ], (err, res) => {
            if (err) {
                console.log('Error al crear al Usuario: ', err);
                result(err, null);
            } else {
                console.log('Usuario creado: ', {id: res.insertId, ...user});
                result(null, {id: res.insertId, ...user});
            }
        }
    );
};

User.update = async (user, result) => {
    let fields = [];
    let values = [];

    if (user.contraseña) {
        const hash = await bcrypt.hash(user.contraseña, 10);
        fields.push("contraseña = ?");
        values.push(hash);
    }

    if (user.correo) {
        fields.push("correo = ?");
        values.push(user.correo);
    }
    if (user.nombre) {
        fields.push("nombre = ?");
        values.push(user.nombre);
    }
    if (user.direccion) {
        fields.push("direccion = ?");
        values.push(user.direccion);
    }
    if (user.rol_id) {
        fields.push("rol_id = ?");
        values.push(user.rol_id);
    }
    if (user.telefono) {
        fields.push("telefono = ?");
        values.push(user.telefono);
    }

    fields.push("updated_at = ?");
    values.push(new Date());

    const sql = `UPDATE users SET ${fields.join(", ")} WHERE id = ?`;
    values.push(user.id);

    db.query(sql, values, (err, res) => {
        if (err) {
            console.log('Error al actualizar usuario: ', err);
            result(err, null);
        } else {
            console.log('Usuario actualizado: ', { id: user.id, ...user });
            result(null, { id: user.id, ...user });
        }
    });
};

User.delete = (id, result) => {
    const sql = `DELETE FROM users WHERE id = ?`;
    db.query(sql, [id], (err, res) => {
        if (err) {
            console.log('Error al eliminar usuario: ', err);
            result(err, null);
        } else {
            console.log('Usuario eliminado con id: ', id);
            result(null, res);
        }
    });
};

module.exports = User;
