import React, { useState, useEffect } from "react";
import api from "../../api/api";

const UsuariosForm = ({ onSave, usuario, onClose }) => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [rolId, setRolId] = useState("");
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const fetchRoles = async () => {
      const res = await api.get("/roles");
      setRoles(res.data);
    };
    fetchRoles();
  }, []);

  useEffect(() => {
    if (usuario) {
      setNombre(usuario.nombre);
      setCorreo(usuario.correo_electronico);
      setContraseña(""); // no mostrar contraseña
      setTelefono(usuario.telefono);
      setDireccion(usuario.direccion);
      setRolId(usuario.rol_id);
    }
  }, [usuario]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ 
      id: usuario?.id,
      nombre,
      correo_electronico: correo,
      contraseña,
      telefono,
      direccion,
      rol_id: rolId
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-4">{usuario ? "Editar Usuario" : "Nuevo Usuario"}</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}
            className="w-full p-2 border rounded" required />
          <input type="email" placeholder="Correo Electrónico" value={correo} onChange={(e) => setCorreo(e.target.value)}
            className="w-full p-2 border rounded" required />
          <input type="password" placeholder="Contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)}
            className="w-full p-2 border rounded" required={!usuario} />
          <input type="text" placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)}
            className="w-full p-2 border rounded" required />
          <input type="text" placeholder="Dirección" value={direccion} onChange={(e) => setDireccion(e.target.value)}
            className="w-full p-2 border rounded" />
          <select value={rolId} onChange={(e) => setRolId(e.target.value)}
            className="w-full p-2 border rounded" required>
            <option value="">Seleccione Rol</option>
            {roles.map(r => (
              <option key={r.id} value={r.id}>{r.nombre_rol}</option>
            ))}
          </select>
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded border">Cancelar</button>
            <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white">{usuario ? "Actualizar" : "Guardar"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UsuariosForm;
