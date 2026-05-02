export function useClientes() {
  const [clientes, setClientes] = useState([]);


useEffect(() => {
    const fetchClientesData = async () => {
      const res = await api.get("/clientes");
      setClientes(res.data);
    };
    fetchClientesData();
  }, []);
  {}
  }