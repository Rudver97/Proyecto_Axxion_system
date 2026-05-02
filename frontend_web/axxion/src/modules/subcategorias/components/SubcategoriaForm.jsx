import React from "react";

const ProductosTable = ({ data, onEdit, onDelete }) => (
  <table className="min-w-full bg-white border rounded shadow">
    <thead>
      <tr className="bg-gray-200 text-left">
        <th className="py-2 px-4 border-b">ID</th>
        <th className="py-2 px-4 border-b">Nombre</th>
        <th className="py-2 px-4 border-b">Modelo</th>
        <th className="py-2 px-4 border-b">Serial</th>
        <th className="py-2 px-4 border-b">Marca</th>
        <th className="py-2 px-4 border-b">Subcategoría</th>
        <th className="py-2 px-4 border-b">Acciones</th>
      </tr>
    </thead>
    <tbody>
      {data.map(p => (
        <tr key={p.id} className="hover:bg-gray-100">
          <td className="py-2 px-4 border-b">{p.id}</td>
          <td className="py-2 px-4 border-b">{p.nombre}</td>
          <td className="py-2 px-4 border-b">{p.modelo}</td>
          <td className="py-2 px-4 border-b">{p.serial}</td>
          <td className="py-2 px-4 border-b">{p.marca}</td>
          <td className="py-2 px-4 border-b">{p.subcategorias_id}</td>
          <td className="py-2 px-4 border-b space-x-2">
            <button onClick={() => onEdit(p)} className="bg-yellow-400 px-2 py-1 rounded">Editar</button>
            <button onClick={() => onDelete(p.id)} className="bg-red-500 text-white px-2 py-1 rounded">Eliminar</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ProductosTable;
