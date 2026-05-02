export function useDeleteAlquiler() {
  const handleDelete = async (id) => {
    if (window.confirm("¿Desea eliminar este alquiler?")) {
      await api.delete(`/alquiler/${id}`);
      fetchAlquileres();
    }
  };

  return { handleDelete };
}
