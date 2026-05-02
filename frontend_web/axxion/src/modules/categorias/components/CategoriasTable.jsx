import React from "react";

const CategoriasTable = ({ categorias, onEdit, onDelete }) => {
  return (
    <table className="min-w-full bg-white border rounded shadow">
      <thead>
        <tr className="bg-gray-200 text-left">
          <th className="py-2 px-4 border-b">ID</th>
          <th className="py-2 px-4 border-b">Nombre</th>
          <th className="py-2 px-4 border-b">Estado</th>
          <th className="py-2 px-4 border-b">Descripción</th>
          <th className="py-2 px-4 border-b">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {categorias.map((cat) => (
          <tr key={cat.id} className="hover:bg-gray-100">
            <td className="py-2 px-4 border-b">{cat.id}</td>
            <td className="py-2 px-4 border-b">{cat.nombre}</td>
            <td className="py-2 px-4 border-b">{cat.estado}</td>
            <td className="py-2 px-4 border-b">{cat.descripcion}</td>
            <td className="py-2 px-4 border-b space-x-2">
              <button onClick={() => onEdit(cat)} className="bg-yellow-400 px-2 py-1 rounded">Editar</button>
              <button onClick={() => onDelete(cat.id)} className="bg-red-500 text-white px-2 py-1 rounded">Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CategoriasTable;
