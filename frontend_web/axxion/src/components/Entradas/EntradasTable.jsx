import React from "react";

const EntradasTable = ({ entradas, onEdit, onDelete }) => {
  return (
    <table className="min-w-full bg-white border rounded shadow">
      <thead>
        <tr className="bg-gray-200 text-left">
          <th className="py-2 px-4 border-b">ID</th>
          <th className="py-2 px-4 border-b">Proveedor</th>
          <th className="py-2 px-4 border-b">ID Producto</th>
          <th className="py-2 px-4 border-b">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {entradas.map((ent) => (
          <tr key={ent.id} className="hover:bg-gray-100">
            <td className="py-2 px-4 border-b">{ent.id}</td>
            <td className="py-2 px-4 border-b">{ent.proveedor?.nombre}</td>
            <td className="py-2 px-4 border-b">{ent.id_producto}</td>
            <td className="py-2 px-4 border-b space-x-2">
              <button onClick={() => onEdit(ent)} className="bg-yellow-400 px-2 py-1 rounded">Editar</button>
              <button onClick={() => onDelete(ent.id)} className="bg-red-500 text-white px-2 py-1 rounded">Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EntradasTable;
