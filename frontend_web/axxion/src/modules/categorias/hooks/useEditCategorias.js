import { useState, useEffect } from "react";

export function useEditCategorias({ categoria, onSave }) {
  const [nombre, setNombre] = useState("");
  const [estado, setEstado] = useState("Activo");
  const [descripcion, setDescripcion] = useState("");

  useEffect(() => {
    if (categoria) {
      setNombre(categoria.nombre);
      setEstado(categoria.estado);
      setDescripcion(categoria.descripcion);
    } else {
      setNombre("");
      setEstado("Activo");
      setDescripcion("");
    }
  }, [categoria]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: categoria?.id, nombre, estado, descripcion });
  };

  return {
    nombre,
    estado,
    descripcion,
    setNombre,
    setEstado,
    setDescripcion,
    handleSubmit,
  };
}
