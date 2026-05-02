import React, { useState, useEffect } from "react";
import api from "../../../api/api";

const EntradaForm = ({ onSave, entrada, onClose }) => {
  const [idProveedor, setIdProveedor] = useState("");
  const [idProducto, setIdProducto] = useState("");
  const [cantidad, setCantidad] = useState(1);
  const [fechaEntrada, setFechaEntrada] = useState("");
  const [proveedores, setProveedores] = useState([]);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProveedores = async () => {
      try {
        const res = await api.get("/proveedores");
        setProveedores(res.data);
      } catch (error) {
        console.error("Error fetching proveedores:", error);
      }
    };
    fetchProveedores();
  }, []);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const res = await api.get("/productos");
        setProductos(res.data);
      } catch (error) {
        console.error("Error fetching productos:", error);
      }
    };
    fetchProductos();
  }, []);

  useEffect(() => {
    if (entrada) {
      setIdProveedor(entrada.id_proveedor);
      setIdProducto(entrada.id_producto);
      setCantidad(entrada.cantidad);
      setFechaEntrada(entrada.fecha_entrada);
    } else {
  
      setFechaEntrada(new Date().toISOString().split('T')[0]);
    }
  }, [entrada]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ 
      id: entrada?.id, 
      id_proveedor: idProveedor, 
      id_producto: idProducto,
      cantidad: parseInt(cantidad),
      fecha_entrada: fechaEntrada 
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-4">{entrada ? "Editar Entrada" : "Nueva Entrada"}</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Selección de Proveedor */}
          <select 
            value={idProveedor} 
            onChange={(e) => setIdProveedor(e.target.value)}
            className="w-full p-2 border rounded" 
            required
          >
            <option value="">Seleccione Proveedor</option>
            {proveedores.map(p => (
              <option key={p.id} value={p.id}>{p.nombre || p.id}</option>
            ))}
          </select>

          <select 
            value={idProducto} 
            onChange={(e) => setIdProducto(e.target.value)}
            className="w-full p-2 border rounded" 
            required
          >
            <option value="">Seleccione Producto</option>
            {productos.map(p => (
              <option key={p.id} value={p.id}>{p.nombre || p.serial || p.id}</option>
            ))}
          </select>

          {/* Cantidad */}
          <input 
            type="number" 
            placeholder="Cantidad" 
            value={cantidad} 
            onChange={(e) => setCantidad(e.target.value)}
            className="w-full p-2 border rounded" 
            min="1"
            required 
          />

          <input 
            type="date" 
            placeholder="Fecha Entrada" 
            value={fechaEntrada} 
            onChange={(e) => setFechaEntrada(e.target.value)}
            className="w-full p-2 border rounded" 
            required 
          />

          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded border">Cancelar</button>
            <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white">
              {entrada ? "Actualizar" : "Guardar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EntradaForm;