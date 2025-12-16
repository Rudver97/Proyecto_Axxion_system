import React from "react";

const RolesTable = ({ roles, onEdit, onDelete }) => {
  return (
    <table className="min-w-full bg-white border rounded shadow">
      <thead>
        <tr className="bg-gray-200 text-left">
          <th className="py-2 px-4 border-b">ID</th>
          <th className="py-2 px-4 border-b">Nombre Rol</th>
          <th className="py-2 px-4 border-b">Estado</th>
          <th className="py-2 px-4 border-b">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {roles.map((rol) => (
          <tr key={rol.id} className="hover:bg-gray-100">
            <td className="py-2 px-4 border-b">{rol.id}</td>
            <td className="py-2 px-4 border-b">{rol.nombre_rol}</td>
            <td className="py-2 px-4 border-b">{rol.estado}</td>
            <td className="py-2 px-4 border-b space-x-2">
              <button onClick={() => onEdit(rol)} className="bg-yellow-400 px-2 py-1 rounded">Editar</button>
              <button onClick={() => onDelete(rol.id)} className="bg-red-500 text-white px-2 py-1 rounded">Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RolesTable;
