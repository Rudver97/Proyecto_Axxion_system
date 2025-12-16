import React, { useEffect, useState } from "react";
import api from "../api/api";
import SubcategoriasTable from "../components/Subcategorias/SubcategoriasTable";
import SubcategoriasForm from "../components/Subcategorias/SubcategoriaForm";

const Subcategorias = () => {
  const [subcategorias, setSubcategorias] = useState([]);
  const [selectedSub, setSelectedSub] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const fetchSubcategorias = async () => {
    const res = await api.get("/subcategorias");
    setSubcategorias(res.data);
  };

  useEffect(() => {
    fetchSubcategorias();
  }, []);

  const handleSave = async (sub) => {
    if (sub.id) {
      await api.put(`/subcategorias/${sub.id}`, sub);
    } else {
      await api.post("/subcategorias", sub);
    }
    setShowForm(false);
    fetchSubcategorias();
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Desea eliminar esta subcategoría?")) {
      await api.delete(`/subcategorias/${id}`);
      fetchSubcategorias();
    }
  };

  const handleEdit = (sub) => {
    setSelectedSub(sub);
    setShowForm(true);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Subcategorías</h1>
      <button onClick={() => { setSelectedSub(null); setShowForm(true); }}
        className="mb-4 px-4 py-2 bg-green-600 text-white rounded">Nueva Subcategoría</button>
      <SubcategoriasTable subcategorias={subcategorias} onEdit={handleEdit} onDelete={handleDelete} />
      {showForm && <SubcategoriasForm subcategoria={selectedSub} onSave={handleSave} onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default Subcategorias;

