import React from "react";

const ProductosTable = ({ productos, onEdit, onDelete }) => {
  return (
    <table className="min-w-full bg-white border rounded shadow">
      <thead>
        <tr className="bg-gray-200 text-left">
          <th className="py-2 px-4 border-b">ID</th>
          <th className="py-2 px-4 border-b">Nombre</th>
          <th className="py-2 px-4 border-b">Modelo</th>
          <th className="py-2 px-4 border-b">Serial</th>
          <th className="py-2 px-4 border-b">Marca</th>
          <th className="py-2 px-4 border-b">Subcategoría</th>
          <th className="py-2 px-4 border-b">Entrada</th>
          <th className="py-2 px-4 border-b">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((prod) => (
          <tr key={prod.id} className="hover:bg-gray-100">
            <td className="py-2 px-4 border-b">{prod.id}</td>
            <td className="py-2 px-4 border-b">{prod.nombre}</td>
            <td className="py-2 px-4 border-b">{prod.modelo}</td>
            <td className="py-2 px-4 border-b">{prod.serial}</td>
            <td className="py-2 px-4 border-b">{prod.marca}</td>
            <td className="py-2 px-4 border-b">{prod.subcategoria?.nombre}</td>
            <td className="py-2 px-4 border-b">{prod.entrada?.id}</td>
            <td className="py-2 px-4 border-b space-x-2">
              <button onClick={() => onEdit(prod)} className="bg-yellow-400 px-2 py-1 rounded">Editar</button>
              <button onClick={() => onDelete(prod.id)} className="bg-red-500 text-white px-2 py-1 rounded">Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductosTable;
