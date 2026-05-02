import React from "react";

const ProveedoresTable = ({ proveedores, onEdit, onDelete }) => {
  return (
    <table className="min-w-full bg-white border rounded shadow">
      <thead>
        <tr className="bg-gray-200 text-left">
          <th className="py-2 px-4 border-b">ID</th>
          <th className="py-2 px-4 border-b">Nombre</th>
          <th className="py-2 px-4 border-b">Teléfono</th>
          <th className="py-2 px-4 border-b">Dirección</th>
          <th className="py-2 px-4 border-b">Estado</th>
          <th className="py-2 px-4 border-b">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {proveedores.map((prov) => (
          <tr key={prov.id} className="hover:bg-gray-100">
            <td className="py-2 px-4 border-b">{prov.id}</td>
            <td className="py-2 px-4 border-b">{prov.nombre}</td>
            <td className="py-2 px-4 border-b">{prov.telefono}</td>
            <td className="py-2 px-4 border-b">{prov.direccion}</td>
            <td className="py-2 px-4 border-b">{prov.estado}</td>
            <td className="py-2 px-4 border-b space-x-2">
              <button onClick={() => onEdit(prov)} className="bg-yellow-400 px-2 py-1 rounded">Editar</button>
              <button onClick={() => onDelete(prov.id)} className="bg-red-500 text-white px-2 py-1 rounded">Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProveedoresTable;
