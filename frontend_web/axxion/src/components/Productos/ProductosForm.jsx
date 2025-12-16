import React, { useState, useEffect } from "react";
import api from "../../api/api";

const ProductosForm = ({ onSave, producto, onClose }) => {
  const [nombre, setNombre] = useState("");
  const [modelo, setModelo] = useState("");
  const [serial, setSerial] = useState("");
  const [marca, setMarca] = useState("");
  const [subcategoriaId, setSubcategoriaId] = useState("");
  const [entradaId, setEntradaId] = useState("");
  const [subcategorias, setSubcategorias] = useState([]);
  const [entradas, setEntradas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const subRes = await api.get("/subcategorias");
      const entRes = await api.get("/entradas");
      setSubcategorias(subRes.data);
      setEntradas(entRes.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (producto) {
      setNombre(producto.nombre);
      setModelo(producto.modelo);
      setSerial(producto.serial);
      setMarca(producto.marca);
      setSubcategoriaId(producto.subcategorias_id);
      setEntradaId(producto.entradas_id);
    }
  }, [producto]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ 
      id: producto?.id,
      nombre,
      modelo,
      serial,
      marca,
      subcategorias_id: subcategoriaId,
      entradas_id: entradaId
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-4">{producto ? "Editar Producto" : "Nuevo Producto"}</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}
            className="w-full p-2 border rounded" required />
          <textarea placeholder="Modelo" value={modelo} onChange={(e) => setModelo(e.target.value)}
            className="w-full p-2 border rounded" required />
          <input type="text" placeholder="Serial" value={serial} onChange={(e) => setSerial(e.target.value)}
            className="w-full p-2 border rounded" required />
          <input type="text" placeholder="Marca" value={marca} onChange={(e) => setMarca(e.target.value)}
            className="w-full p-2 border rounded" required />
          <select value={subcategoriaId} onChange={(e) => setSubcategoriaId(e.target.value)}
            className="w-full p-2 border rounded" required>
            <option value="">Seleccione Subcategoría</option>
            {subcategorias.map(s => (
              <option key={s.id} value={s.id}>{s.nombre}</option>
            ))}
          </select>
          <select value={entradaId} onChange={(e) => setEntradaId(e.target.value)}
            className="w-full p-2 border rounded" required>
            <option value="">Seleccione Entrada</option>
            {entradas.map(ent => (
              <option key={ent.id} value={ent.id}>{ent.id}</option>
            ))}
          </select>
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded border">Cancelar</button>
            <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white">{producto ? "Actualizar" : "Guardar"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductosForm;
