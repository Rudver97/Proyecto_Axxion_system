  export function useEditClientes({ fetchClientes }) {
  
  const fetchClientes = async () => {
    const res = await api.get("/clientes");
    setClientes(res.data);
     useEffect(() => {
    fetchClientes();
  }, []);
  };
   return { fetchClientes };
  }