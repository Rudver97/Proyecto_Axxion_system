import React, { useState, useEffect } from "react";
import api from "../../api/api";

const SalidaForm = ({ onSave, salida, onClose }) => {
  const [serialProducto, setSerialProducto] = useState("");
  const [fechaCreacion, setFechaCreacion] = useState("");
  const [alquilerId, setAlquilerId] = useState("");
  const [alquileres, setAlquileres] = useState([]);

  useEffect(() => {
    const fetchAlquileres = async () => {
      const res = await api.get("/alquiler");
      setAlquileres(res.data);
    };
    fetchAlquileres();
  }, []);

  useEffect(() => {
    if (salida) {
      setSerialProducto(salida.serial_producto);
      setFechaCreacion(salida.fecha_creacion);
      setAlquilerId(salida.alquiler_id);
    }
  }, [salida]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: salida?.id, serial_producto: serialProducto, fecha_creacion: fechaCreacion, alquiler_id: alquilerId });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-4">{salida ? "Editar Salida" : "Nueva Salida"}</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input type="text" placeholder="Serial Producto" value={serialProducto} onChange={(e) => setSerialProducto(e.target.value)}
            className="w-full p-2 border rounded" required />
          <input type="date" placeholder="Fecha Creación" value={fechaCreacion} onChange={(e) => setFechaCreacion(e.target.value)}
            className="w-full p-2 border rounded" required />
          <select value={alquilerId} onChange={(e) => setAlquilerId(e.target.value)}
            className="w-full p-2 border rounded" required>
            <option value="">Seleccione Alquiler</option>
            {alquileres.map(a => (
              <option key={a.id} value={a.id}>{a.id}</option>
            ))}
          </select>
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded border">Cancelar</button>
            <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white">{salida ? "Actualizar" : "Guardar"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SalidaForm;
