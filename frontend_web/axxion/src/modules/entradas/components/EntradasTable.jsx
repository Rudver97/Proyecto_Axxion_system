import React from "react";

const EntradaTable = ({ entradas, onEdit, onDelete }) => {
  return (
    <table className="min-w-full bg-white border rounded shadow">
      <thead>
        <tr className="bg-gray-200 text-left">
          <th className="py-2 px-4 border-b">ID</th>
          <th className="py-2 px-4 border-b">Proveedor ID</th>
          <th className="py-2 px-4 border-b">Producto ID</th>
          <th className="py-2 px-4 border-b">Cantidad</th>
          <th className="py-2 px-4 border-b">Fecha Entrada</th>
          <th className="py-2 px-4 border-b">Creado</th>
          <th className="py-2 px-4 border-b">Actualizado</th>
          <th className="py-2 px-4 border-b">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {entradas.map((ent) => (
          <tr key={ent.id} className="hover:bg-gray-100">
            <td className="py-2 px-4 border-b">{ent.id}</td>
            <td className="py-2 px-4 border-b">{ent.id_proveedor}</td>
            <td className="py-2 px-4 border-b">{ent.id_producto}</td>
            <td className="py-2 px-4 border-b">{ent.cantidad}</td>
            <td className="py-2 px-4 border-b">{ent.fecha_entrada}</td>
            <td className="py-2 px-4 border-b">{new Date(ent.created_at).toLocaleDateString()}</td>
            <td className="py-2 px-4 border-b">{new Date(ent.updated_at).toLocaleDateString()}</td>
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

export default EntradaTable;