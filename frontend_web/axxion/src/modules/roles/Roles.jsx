import React, { useEffect, useState } from "react";
import api from "../../api/api";
import RolesTable from "./components/RolesTable";
import RolesForm from "./components/RolesForm";

const Roles = () => {
  const [roles, setRoles] = useState([]);
  const [selectedRol, setSelectedRol] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const fetchRoles = async () => {
    const res = await api.get("/roles");
    setRoles(res.data);
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  const handleSave = async (rol) => {
    if (rol.id) {
      await api.put(`/roles/${rol.id}`, rol);
    } else {
      await api.post("/roles", rol);
    }
    setShowForm(false);
    fetchRoles();
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Desea eliminar este rol?")) {
      await api.delete(`/roles/${id}`);
      fetchRoles();
    }
  };

  const handleEdit = (rol) => {
    setSelectedRol(rol);
    setShowForm(true);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Roles</h1>
      <button onClick={() => { setSelectedRol(null); setShowForm(true); }}
        className="mb-4 px-4 py-2 bg-green-600 text-white rounded">Nuevo Rol</button>
      <RolesTable roles={roles} onEdit={handleEdit} onDelete={handleDelete} />
      {showForm && <RolesForm rol={selectedRol} onSave={handleSave} onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default Roles;
