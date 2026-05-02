import React from "react";

const AlquilerTable = ({ alquileres, onEdit, onDelete }) => {
  return (
    <table className="min-w-full bg-white border rounded shadow">
      <thead>
        <tr className="bg-gray-200 text-left">
          <th className="py-2 px-4 border-b">ID</th>
          <th className="py-2 px-4 border-b">Cliente</th>
          <th className="py-2 px-4 border-b">Producto</th>
          <th className="py-2 px-4 border-b">Fecha Salida</th>
          <th className="py-2 px-4 border-b">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {alquileres.map((alq) => (
          <tr key={alq.id} className="hover:bg-gray-100">
            <td className="py-2 px-4 border-b">{alq.id}</td>
            <td className="py-2 px-4 border-b">{alq.cliente?.nombre || alq.id_cliente}</td>
            <td className="py-2 px-4 border-b">{alq.producto?.nombre || alq.id_producto}</td>
            <td className="py-2 px-4 border-b">{alq.fecha_salida}</td>
            <td className="py-2 px-4 border-b space-x-2">
              <button onClick={() => onEdit(alq)} className="bg-yellow-400 px-2 py-1 rounded">Editar</button>
              <button onClick={() => onDelete(alq.id)} className="bg-red-500 text-white px-2 py-1 rounded">Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AlquilerTable;
