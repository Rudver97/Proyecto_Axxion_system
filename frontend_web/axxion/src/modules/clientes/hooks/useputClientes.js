 export function useEditClientes({ fetchClientes }) {
 
 const handleSave = async (cliente) => {
    if (cliente.id) {
      await api.put(`/clientes/${cliente.id}`, cliente);
    } else {
      await api.post("/clientes", cliente);
    }
    setShowForm(false);
    fetchClientes();
  };
  }