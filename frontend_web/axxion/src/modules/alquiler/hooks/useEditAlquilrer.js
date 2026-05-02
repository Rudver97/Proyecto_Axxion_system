export function useEditAlquiler({ fetchAlquileres }) {
  const [showForm, setShowForm] = useState(false);
  const [selectedAlq, setSelectedAlq] = useState(null);

  const handleSave = async (alq) => {
    if (alq.id) {
      await api.put(`/alquiler/${alq.id}`, alq);
    } else {
      await api.post("/alquiler", alq);
    }
    setShowForm(false);
    fetchAlquileres();
  };

  const handleEdit = (alq) => {
    setSelectedAlq(alq);
    setShowForm(true);
  };

  return { handleSave, handleEdit };
}
