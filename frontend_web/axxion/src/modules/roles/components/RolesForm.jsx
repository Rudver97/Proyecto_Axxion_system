import React, { useState, useEffect } from "react";

const RolesForm = ({ onSave, rol, onClose }) => {
  const [nombreRol, setNombreRol] = useState("");
  const [estado, setEstado] = useState("Activo");

  useEffect(() => {
    if (rol) {
      setNombreRol(rol.nombre_rol);
      setEstado(rol.estado);
    }
  }, [rol]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: rol?.id, nombre_rol: nombreRol, estado });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-4">{rol ? "Editar Rol" : "Nuevo Rol"}</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input type="text" placeholder="Nombre Rol" value={nombreRol} onChange={(e) => setNombreRol(e.target.value)}
            className="w-full p-2 border rounded" required />
          <input type="text" placeholder="Estado" value={estado} onChange={(e) => setEstado(e.target.value)}
            className="w-full p-2 border rounded" required />
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded border">Cancelar</button>
            <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white">{rol ? "Actualizar" : "Guardar"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RolesForm;
