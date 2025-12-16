import React, { useState, useEffect } from "react";
import api from "../../api/api";

const EntradasForm = ({ onSave, entrada, onClose }) => {
  const [idProveedor, setIdProveedor] = useState("");
  const [idProducto, setIdProducto] = useState("");
  const [proveedores, setProveedores] = useState([]);

  useEffect(() => {
    const fetchProveedores = async () => {
      const res = await api.get("/proveedores");
      setProveedores(res.data);
    };
    fetchProveedores();
  }, []);

  useEffect(() => {
    if (entrada) {
      setIdProveedor(entrada.id_proveedor);
      setIdProducto(entrada.id_producto);
    }
  }, [entrada]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: entrada?.id, id_proveedor: idProveedor, id_producto: idProducto });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-4">{entrada ? "Editar Entrada" : "Nueva Entrada"}</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <select value={idProveedor} onChange={(e) => setIdProveedor(e.target.value)}
            className="w-full p-2 border rounded" required>
            <option value="">Seleccione Proveedor</option>
            {proveedores.map(p => (
              <option key={p.id} value={p.id}>{p.nombre}</option>
            ))}
          </select>
          <input type="text" placeholder="ID Producto" value={idProducto} onChange={(e) => setIdProducto(e.target.value)}
            className="w-full p-2 border rounded" required />
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded border">Cancelar</button>
            <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white">{entrada ? "Actualizar" : "Guardar"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EntradasForm;
