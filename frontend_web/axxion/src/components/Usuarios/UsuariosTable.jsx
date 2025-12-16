import React from "react";

const UsuariosTable = ({ usuarios, onEdit, onDelete }) => {
  return (
    <table className="min-w-full bg-white border rounded shadow">
      <thead>
        <tr className="bg-gray-200 text-left">
          <th className="py-2 px-4 border-b">ID</th>
          <th className="py-2 px-4 border-b">Nombre</th>
          <th className="py-2 px-4 border-b">Correo</th>
          <th className="py-2 px-4 border-b">Teléfono</th>
          <th className="py-2 px-4 border-b">Rol</th>
          <th className="py-2 px-4 border-b">Dirección</th>
          <th className="py-2 px-4 border-b">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map((usr) => (
          <tr key={usr.id} className="hover:bg-gray-100">
            <td className="py-2 px-4 border-b">{usr.id}</td>
            <td className="py-2 px-4 border-b">{usr.nombre}</td>
            <td className="py-2 px-4 border-b">{usr.correo_electronico}</td>
            <td className="py-2 px-4 border-b">{usr.telefono}</td>
            <td className="py-2 px-4 border-b">{usr.rol?.nombre_rol}</td>
            <td className="py-2 px-4 border-b">{usr.direccion}</td>
            <td className="py-2 px-4 border-b space-x-2">
              <button onClick={() => onEdit(usr)} className="bg-yellow-400 px-2 py-1 rounded">Editar</button>
              <button onClick={() => onDelete(usr.id)} className="bg-red-500 text-white px-2 py-1 rounded">Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsuariosTable;
