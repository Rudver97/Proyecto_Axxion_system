import React, { useEffect, useState } from "react";
import api from "../api/api";
import EntradasTable from "../components/Entradas/EntradasTable";
import EntradasForm from "../components/Entradas/EntradasForm";

const Entradas = () => {
  const [entradas, setEntradas] = useState([]);
  const [selectedEnt, setSelectedEnt] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const fetchEntradas = async () => {
    const res = await api.get("/entradas");
    setEntradas(res.data);
  };

  useEffect(() => {
    fetchEntradas();
  }, []);

  const handleSave = async (ent) => {
    if (ent.id) {
      await api.put(`/entradas/${ent.id}`, ent);
    } else {
      await api.post("/entradas", ent);
    }
    setShowForm(false);
    fetchEntradas();
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Desea eliminar esta entrada?")) {
      await api.delete(`/entradas/${id}`);
      fetchEntradas();
    }
  };

  const handleEdit = (ent) => {
    setSelectedEnt(ent);
    setShowForm(true);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Entradas</h1>
      <button onClick={() => { setSelectedEnt(null); setShowForm(true); }}
        className="mb-4 px-4 py-2 bg-green-600 text-white rounded">Nueva Entrada</button>
      <EntradasTable entradas={entradas} onEdit={handleEdit} onDelete={handleDelete} />
      {showForm && <EntradasForm entrada={selectedEnt} onSave={handleSave} onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default Entradas;
