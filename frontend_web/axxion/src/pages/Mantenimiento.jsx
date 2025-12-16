import React, { useEffect, useState } from "react";
import api from "../api/api";
import MantenimientoTable from "../components/Mantenimiento/MantenimmientoTable";
import MantenimientoForm from "../components/Mantenimiento/MantenimientoForm";

const Mantenimiento = () => {
  const [mantenimientos, setMantenimientos] = useState([]);
  const [selectedMan, setSelectedMan] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const fetchMantenimientos = async () => {
    const res = await api.get("/mantenimiento");
    setMantenimientos(res.data);
  };

  useEffect(() => {
    fetchMantenimientos();
  }, []);

  const handleSave = async (man) => {
    if (man.id) {
      await api.put(`/mantenimiento/${man.id}`, man);
    } else {
      await api.post("/mantenimiento", man);
    }
    setShowForm(false);
    fetchMantenimientos();
  };

  const handleDelete = async (id, productos_id) => {
    if (window.confirm("¿Desea eliminar este mantenimiento?")) {
      await api.delete(`/mantenimiento/${id}/${productos_id}`);
      fetchMantenimientos();
    }
  };

  const handleEdit = (man) => {
    setSelectedMan(man);
    setShowForm(true);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Mantenimientos</h1>
      <button onClick={() => { setSelectedMan(null); setShowForm(true); }}
        className="mb-4 px-4 py-2 bg-green-600 text-white rounded">Nuevo Mantenimiento</button>
      <MantenimientoTable mantenimientos={mantenimientos} onEdit={handleEdit} onDelete={handleDelete} />
      {showForm && <MantenimientoForm mantenimiento={selectedMan} onSave={handleSave} onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default Mantenimiento;
