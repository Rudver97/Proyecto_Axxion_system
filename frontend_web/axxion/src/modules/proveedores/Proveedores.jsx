import React, { useEffect, useState } from "react";
import api from "../../api/api";
import ProveedoresTable from "./components/ProveedoresTable";
import ProveedoresForm from "./components/ProveedoresForm";

const Proveedores = () => {
  const [proveedores, setProveedores] = useState([]);
  const [selectedProv, setSelectedProv] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const fetchProveedores = async () => {
    const res = await api.get("/proveedores");
    setProveedores(res.data);
  };

  useEffect(() => {
    fetchProveedores();
  }, []);

  const handleSave = async (prov) => {
    if (prov.id) {
      await api.put(`/proveedores/${prov.id}`, prov);
    } else {
      await api.post("/proveedores", prov);
    }
    setShowForm(false);
    fetchProveedores();
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Desea eliminar este proveedor?")) {
      await api.delete(`/proveedores/${id}`);
      fetchProveedores();
    }
  };

  const handleEdit = (prov) => {
    setSelectedProv(prov);
    setShowForm(true);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Proveedores</h1>
      <button onClick={() => { setSelectedProv(null); setShowForm(true); }}
        className="mb-4 px-4 py-2 bg-green-600 text-white rounded">Nuevo Proveedor</button>
      <ProveedoresTable proveedores={proveedores} onEdit={handleEdit} onDelete={handleDelete} />
      {showForm && <ProveedoresForm proveedor={selectedProv} onSave={handleSave} onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default Proveedores;
