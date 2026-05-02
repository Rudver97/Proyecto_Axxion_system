import React, { useEffect, useState } from "react";
import api from "../../api/api";
import UsuariosTable from "./components/UsuariosTable";
import UsuariosForm from "./components/UsuariosForm";

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [selectedUsr, setSelectedUsr] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const fetchUsuarios = async () => {
    const res = await api.get("/usuarios");
    setUsuarios(res.data);
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const handleSave = async (usr) => {
    if (usr.id) {
      await api.put(`/usuarios/${usr.id}`, usr);
    } else {
      await api.post("/usuarios", usr);
    }
    setShowForm(false);
    fetchUsuarios();
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Desea eliminar este usuario?")) {
      await api.delete(`/usuarios/${id}`);
      fetchUsuarios();
    }
  };

  const handleEdit = (usr) => {
    setSelectedUsr(usr);
    setShowForm(true);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Usuarios</h1>
      <button onClick={() => { setSelectedUsr(null); setShowForm(true); }}
        className="mb-4 px-4 py-2 bg-green-600 text-white rounded">Nuevo Usuario</button>
      <UsuariosTable usuarios={usuarios} onEdit={handleEdit} onDelete={handleDelete} />
      {showForm && <UsuariosForm usuario={selectedUsr} onSave={handleSave} onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default Usuarios;
