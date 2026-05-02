import React, { useState, useEffect } from "react";
import api from "../../../api/api";
import { useEditClientes } from "../hooks/useEditClientes";

const ClientesForm = ({ onSave, cliente, onClose }) => {
  const { handleSubmit } = useEditClientes({
    cliente
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-4">
          {cliente ? "Editar Cliente" : "Nuevo Cliente"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <select
            value={alquilerId}
            onChange={(e) => setAlquilerId(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Seleccione Alquiler</option>
            {alquileres.map((a) => (
              <option key={a.id} value={a.id}>
                {a.id}
              </option>
            ))}
          </select>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded border"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-600 text-white"
            >
              {cliente ? "Actualizar" : "Guardar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClientesForm;
