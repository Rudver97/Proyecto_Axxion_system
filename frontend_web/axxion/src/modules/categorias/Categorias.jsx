import React, { useEffect, useState } from "react";
import api from "../../api/api";
import CategoriasTable from "./components/CategoriasTable";
import CategoriasForm from "./components/CategoriasForm";

const Categorias = () => {
  const [Categorias, setCategorias] = useState([]);
  const [selectedCategoria, setSelectedCategoria] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const fetchCategorias = async () => {
    const res = await api.get("/Categorias");
    setCategorias(res.data);
  };

  useEffect(() => {
    fetchCategorias();
  }, []);

  const handleSave = async (categoria) => {
    if (selectedCategoria.id) {
      await api.put(`/Categorias/${categoria.id}`, categoria);
    } else {
      await api.post("/Categorias", categoria);
    }
    setShowForm(false);
    fetchCategorias();
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Desea eliminar esta categoría?")) {
      await api.delete(`/Categorias/${id}`);
      fetchCategorias();
    }
  };

  const handleEdit = (categoria) => {
    setSelectedCategoria(categoria);
    setShowForm(true);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Categorías</h1>
      <button
        onClick={() => {
          setSelectedCategoria(null);
          setShowForm(true);
        }}
        className="mb-4 px-4 py-2 bg-green-600 text-white rounded"
      >
        Nueva Categoría
      </button>
      <CategoriasTable
        categoria={selectedCategoria}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {showForm && (
        <CategoriasForm
          categoria={selectedCategoria}
          onSave={handleSave}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default Categorias;
