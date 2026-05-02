import React, { useEffect, useState } from "react";
import api from "../../api/api";
import ClientesTable from "./components/ClientesTable";
import ClientesForm from "./components/ClientesForm";

const Clientes = () => {
  const [clientes, setClientes] = useState([]);
  const [selectedCliente, setSelectedCliente] = useState(null);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Clientes</h1>
      <button
        onClick={() => {
          setSelectedCliente(null);
          setShowForm(true);
        }}
        className="mb-4 px-4 py-2 bg-green-600 text-white rounded"
      >
        Nuevo Cliente
      </button>
      <ClientesTable
        clientes={clientes}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {showForm && (
        <ClientesForm
          cliente={selectedCliente}
          onSave={handleSave}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default Clientes;
