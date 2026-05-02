 export function useDeleteClientes({ fetchClientes }) {
 
 const handleDelete = async (id) => {
    if (window.confirm("¿Desea eliminar este cliente?")) {
      await api.delete(`/clientes/${id}`);
      fetchClientes();
    }
  };
  return { handleDelete };
  }
