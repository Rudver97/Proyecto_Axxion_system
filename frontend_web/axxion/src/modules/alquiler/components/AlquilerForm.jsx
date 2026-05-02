import React, { useState, useEffect } from "react";
import api from "../../api/api";

const AlquilerForm = ({ onSave, alquiler, onClose }) => {
  const [idCliente, setIdCliente] = useState("");
  const [idProducto, setIdProducto] = useState("");
  const [fechaSalida, setFechaSalida] = useState("");
  const [clientes, setClientes] = useState([]);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const clientesRes = await api.get("/clientes");
      const productosRes = await api.get("/productos");
      setClientes(clientesRes.data);
      setProductos(productosRes.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (alquiler) {
      setIdCliente(alquiler.id_cliente);
      setIdProducto(alquiler.id_producto);
      setFechaSalida(alquiler.fecha_salida);
    }
  }, [alquiler]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: alquiler?.id, id_cliente: idCliente, id_producto: idProducto, fecha_salida: fechaSalida });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-4">{alquiler ? "Editar Alquiler" : "Nuevo Alquiler"}</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <select value={idCliente} onChange={(e) => setIdCliente(e.target.value)}
            className="w-full p-2 border rounded" required>
            <option value="">Seleccione Cliente</option>
            {clientes.map(c => (
              <option key={c.id} value={c.id}>{c.id}</option> 
              /* si tu tabla clientes tiene nombre, puedes usar c.nombre */
            ))}
          </select>
          <select value={idProducto} onChange={(e) => setIdProducto(e.target.value)}
            className="w-full p-2 border rounded" required>
            <option value="">Seleccione Producto</option>
            {productos.map(p => (
              <option key={p.id} value={p.id}>{p.nombre}</option>
            ))}
          </select>
          <input type="date" placeholder="Fecha Salida" value={fechaSalida} onChange={(e) => setFechaSalida(e.target.value)}
            className="w-full p-2 border rounded" required />
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded border">Cancelar</button>
            <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white">{alquiler ? "Actualizar" : "Guardar"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AlquilerForm;
