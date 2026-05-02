import { useEffect, useState } from "react";
import api from "../../api/api";

export function useAlquileres() {
  const [alquileres, setAlquileres] = useState([]);
  const [selectedAlq, setSelectedAlq] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const fetchAlquileres = async () => {
    const res = await api.get("/alquiler");
    setAlquileres(res.data);
  };

  useEffect(() => {
    fetchAlquileres();
  }, []);

  return {
    alquileres,
    selectedAlq,
    setSelectedAlq,
    showForm,
    setShowForm,
    fetchAlquileres,
  };
}
