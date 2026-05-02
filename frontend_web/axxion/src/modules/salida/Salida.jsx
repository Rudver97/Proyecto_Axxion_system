import React, { useEffect, useState } from "react";
import api from "../../api/api";
import SalidaTable from "./components/SalidaTable";
import SalidaForm from "./components/SalidaForm";

const Salida = () => {
  const [salidas, setSalidas] = useState([]);
  const [selectedSal, setSelectedSal] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const fetchSalidas = async () => {
    const res = await api.get("/salida");
    setSalidas(res.data);
  };

  useEffect(() => {
    fetchSalidas();
  }, []);

  const handleSave = async (sal) => {
    if (sal.id) {
      await api.put(`/salida/${sal.id}`, sal);
    } else {
      await api.post("/salida", sal);
    }
    setShowForm(false);
    fetchSalidas();
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Desea eliminar esta salida?")) {
      await api.delete(`/salida/${id}`);
      fetchSalidas();
    }
  };

  const handleEdit = (sal) => {
    setSelectedSal(sal);
    setShowForm(true);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Salidas</h1>
      <button onClick={() => { setSelectedSal(null); setShowForm(true); }}
        className="mb-4 px-4 py-2 bg-green-600 text-white rounded">Nueva Salida</button>
      <SalidaTable salidas={salidas} onEdit={handleEdit} onDelete={handleDelete} />
      {showForm && <SalidaForm salida={selectedSal} onSave={handleSave} onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default Salida;
