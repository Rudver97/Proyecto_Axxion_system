import React, { useState, useEffect } from "react";
import api from "../../api/api";

const MantenimientoForm = ({ onSave, mantenimiento, onClose }) => {
  const [tipo, setTipo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [costo, setCosto] = useState("");
  const [estado, setEstado] = useState("Activo");
  const [productoId, setProductoId] = useState("");
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const res = await api.get("/productos");
      setProductos(res.data);
    };
    fetchProductos();
  }, []);

  useEffect(() => {
    if (mantenimiento) {
      setTipo(mantenimiento.tipo_mantenimiento);
      setDescripcion(mantenimiento.descripcion);
      setCosto(mantenimiento.costo);
      setEstado(mantenimiento.estado);
      setProductoId(mantenimiento.productos_id);
    }
  }, [mantenimiento]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ 
      id: mantenimiento?.id,
      productos_id: productoId,
      tipo_mantenimiento: tipo,
      descripcion,
      costo,
      estado
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-4">{mantenimiento ? "Editar Mantenimiento" : "Nuevo Mantenimiento"}</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <select value={productoId} onChange={(e) => setProductoId(e.target.value)}
            className="w-full p-2 border rounded" required>
            <option value="">Seleccione Producto</option>
            {productos.map(p => (
              <option key={p.id} value={p.id}>{p.nombre}</option>
            ))}
          </select>
          <input type="text" placeholder="Tipo de Mantenimiento" value={tipo} onChange={(e) => setTipo(e.target.value)}
            className="w-full p-2 border rounded" required />
          <textarea placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}
            className="w-full p-2 border rounded" required />
          <input type="number" placeholder="Costo" value={costo} onChange={(e) => setCosto(e.target.value)}
            className="w-full p-2 border rounded" required />
          <input type="text" placeholder="Estado" value={estado} onChange={(e) => setEstado(e.target.value)}
            className="w-full p-2 border rounded" required />
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded border">Cancelar</button>
            <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white">{mantenimiento ? "Actualizar" : "Guardar"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MantenimientoForm;
