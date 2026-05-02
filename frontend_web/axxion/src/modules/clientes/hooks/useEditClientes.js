import { useState } from "react";
import { updateCliente } from "../../../api/clientesApi";

export function useEditClientes({ fetchClientes, cliente }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    updateCliente({ id: cliente?.id });
  };

  const handleEdit = (cliente) => {
    setShowForm(true);
  };

  return {
    handleEdit,
    handleSubmit,
  };
}
