import React, { useState, useEffect } from "react";

const ProveedoresForm = ({ onSave, proveedor, onClose }) => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [estado, setEstado] = useState("Activo");

  useEffect(() => {
    if (proveedor) {
      setNombre(proveedor.nombre);
      setTelefono(proveedor.telefono);
      setDireccion(proveedor.direccion);
      setEstado(proveedor.estado);
    }
  }, [proveedor]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: proveedor?.id, nombre, telefono, direccion, estado });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-4">{proveedor ? "Editar Proveedor" : "Nuevo Proveedor"}</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}
            className="w-full p-2 border rounded" required />
          <input type="text" placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)}
            className="w-full p-2 border rounded" required />
          <textarea placeholder="Dirección" value={direccion} onChange={(e) => setDireccion(e.target.value)}
            className="w-full p-2 border rounded" required />
          <input type="text" placeholder="Estado" value={estado} onChange={(e) => setEstado(e.target.value)}
            className="w-full p-2 border rounded" required />
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded border">Cancelar</button>
            <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white">{proveedor ? "Actualizar" : "Guardar"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProveedoresForm;
