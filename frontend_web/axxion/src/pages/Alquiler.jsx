import React, { useEffect, useState } from "react";
import api from "../api/api";
import AlquilerTable from "../components/Alquiler/AlquilerTable";
import AlquilerForm from "../components/Alquiler/AlquilerForm";

const Alquiler = () => {
  const [alquileres, setAlquileres] = useState([]);
  const [selectedAlq, setSelectedAlq] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const fetchAlquileres = async () => {
    const res = await api.get("/alquiler");
    setAlquileres(res.data);
  };

  useEffect(() => {
    fetchAlquileres();
  }, []);

  const handleSave = async (alq) => {
    if (alq.id) {
      await api.put(`/alquiler/${alq.id}`, alq);
    } else {
      await api.post("/alquiler", alq);
    }
    setShowForm(false);
    fetchAlquileres();
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Desea eliminar este alquiler?")) {
      await api.delete(`/alquiler/${id}`);
      fetchAlquileres();
    }
  };

  const handleEdit = (alq) => {
    setSelectedAlq(alq);
    setShowForm(true);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Alquileres</h1>
      <button onClick={() => { setSelectedAlq(null); setShowForm(true); }}
        className="mb-4 px-4 py-2 bg-green-600 text-white rounded">Nuevo Alquiler</button>
      <AlquilerTable alquileres={alquileres} onEdit={handleEdit} onDelete={handleDelete} />
      {showForm && <AlquilerForm alquiler={selectedAlq} onSave={handleSave} onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default Alquiler;
