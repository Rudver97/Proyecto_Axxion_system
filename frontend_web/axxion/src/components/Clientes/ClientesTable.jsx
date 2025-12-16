import React from "react";

const ClientesTable = ({ clientes, onEdit, onDelete }) => {
  return (
    <table className="min-w-full bg-white border rounded shadow">
      <thead>
        <tr className="bg-gray-200 text-left">
          <th className="py-2 px-4 border-b">ID</th>
          <th className="py-2 px-4 border-b">Alquiler</th>
          <th className="py-2 px-4 border-b">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map((cliente) => (
          <tr key={cliente.id} className="hover:bg-gray-100">
            <td className="py-2 px-4 border-b">{cliente.id}</td>
            <td className="py-2 px-4 border-b">{cliente.alquiler?.id}</td>
            <td className="py-2 px-4 border-b space-x-2">
              <button onClick={() => onEdit(cliente)} className="bg-yellow-400 px-2 py-1 rounded">Editar</button>
              <button onClick={() => onDelete(cliente.id)} className="bg-red-500 text-white px-2 py-1 rounded">Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClientesTable;
