import React, { useEffect, useState } from "react";
import api from "../../api/api";
import ProductosTable from "./components/ProductosTable";
import ProductosForm from "./components/ProductosForm";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [selectedProd, setSelectedProd] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const fetchProductos = async () => {
    const res = await api.get("/productos");
    setProductos(res.data);
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  const handleSave = async (prod) => {
    if (prod.id) {
      await api.put(`/productos/${prod.id}`, prod);
    } else {
      await api.post("/productos", prod);
    }
    setShowForm(false);
    fetchProductos();
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Desea eliminar este producto?")) {
      await api.delete(`/productos/${id}`);
      fetchProductos();
    }
  };

  const handleEdit = (prod) => {
    setSelectedProd(prod);
    setShowForm(true);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Productos</h1>
      <button onClick={() => { setSelectedProd(null); setShowForm(true); }}
        className="mb-4 px-4 py-2 bg-green-600 text-white rounded">Nuevo Producto</button>
      <ProductosTable productos={productos} onEdit={handleEdit} onDelete={handleDelete} />
      {showForm && <ProductosForm producto={selectedProd} onSave={handleSave} onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default Productos;
