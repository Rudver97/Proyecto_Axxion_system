import React, { useEffect, useState } from "react";
import api from "../api/api";
import ClientesTable from "../components/Clientes/ClientesTable";
import ClientesForm from "../components/Clientes/ClientesForm";

const Clientes = () => {
  const [clientes, setClientes] = useState([]);
  const [selectedCliente, setSelectedCliente] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const fetchClientes = async () => {
    const res = await api.get("/clientes");
    setClientes(res.data);
  };

  useEffect(() => {
    fetchClientes();
  }, []);

  const handleSave = async (cliente) => {
    if (cliente.id) {
      await api.put(`/clientes/${cliente.id}`, cliente);
    } else {
      await api.post("/clientes", cliente);
    }
    setShowForm(false);
    fetchClientes();
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Desea eliminar este cliente?")) {
      await api.delete(`/clientes/${id}`);
      fetchClientes();
    }
  };

  const handleEdit = (cliente) => {
    setSelectedCliente(cliente);
    setShowForm(true);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Clientes</h1>
      <button onClick={() => { setSelectedCliente(null); setShowForm(true); }}
        className="mb-4 px-4 py-2 bg-green-600 text-white rounded">Nuevo Cliente</button>
      <ClientesTable clientes={clientes} onEdit={handleEdit} onDelete={handleDelete} />
      {showForm && <ClientesForm cliente={selectedCliente} onSave={handleSave} onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default Clientes;
