import React, { useEffect, useState } from "react";
import api from "../../api/api";
import { useAlquileres } from "./hooks/useAlquileres";
import { useEditAlquiler } from "./hooks/useEditAlquilrer";
import { useDeleteAlquiler } from "./hooks/useDeleteAlquiler";
import AlquilerTable from "../../components/Alquiler/AlquilerTable";
import AlquilerForm from "../../components/Alquiler/AlquilerForm";

const Alquiler = () => {
  const { alquileres, fetchAlquileres } = useAlquileres();
  const {
    handleSave,
    handleEdit,
    showForm,
    setShowForm,
    selectedAlq,
    setSelectedAlq,
  } = useEditAlquiler({ fetchAlquileres });
  const { handleDelete } = useDeleteAlquiler();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Alquileres</h1>
      <button
        onClick={() => {
          setSelectedAlq(null);
          setShowForm(true);
        }}
        className="mb-4 px-4 py-2 bg-green-600 text-white rounded"
      >
        Nuevo Alquiler
      </button>
      <AlquilerTable
        alquileres={alquileres}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {showForm && (
        <AlquilerForm
          alquiler={selectedAlq}
          onSave={handleSave}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default Alquiler;
