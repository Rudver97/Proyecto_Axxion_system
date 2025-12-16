import React, { useState, useEffect } from "react";

const CategoriasForm = ({ onSave, categoria, onClose }) => {
  const [nombre, setNombre] = useState("");
  const [estado, setEstado] = useState("Activo");
  const [descripcion, setDescripcion] = useState("");

  useEffect(() => {
    if (categoria) {
      setNombre(categoria.nombre);
      setEstado(categoria.estado);
      setDescripcion(categoria.descripcion);
    }
  }, [categoria]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: categoria?.id, nombre, estado, descripcion });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-4">{categoria ? "Editar Categoría" : "Nueva Categoría"}</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}
            className="w-full p-2 border rounded" required />
          <input type="text" placeholder="Estado" value={estado} onChange={(e) => setEstado(e.target.value)}
            className="w-full p-2 border rounded" required />
          <textarea placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}
            className="w-full p-2 border rounded" required />
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded border">Cancelar</button>
            <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white">{categoria ? "Actualizar" : "Guardar"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoriasForm;
