import React from "react";

const ESTADO_STYLES = {
  Activo:     "bg-green-100 text-green-700",
  Inactivo:   "bg-gray-100  text-gray-600",
  Pendiente:  "bg-yellow-100 text-yellow-700",
  Completado: "bg-blue-100  text-blue-700",
};

const MantenimientoTable = ({ mantenimientos, onEdit, onDelete }) => {
  return (
    <table className="min-w-full bg-white border rounded shadow">
      <thead>
        <tr className="bg-gray-200 text-left">
          <th className="py-2 px-4 border-b">ID</th>
          <th className="py-2 px-4 border-b">Producto</th>
          <th className="py-2 px-4 border-b">Tipo</th>
          <th className="py-2 px-4 border-b">Descripción</th>
          <th className="py-2 px-4 border-b">Costo</th>
          <th className="py-2 px-4 border-b">Estado</th>
          <th className="py-2 px-4 border-b">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {mantenimientos.map((m) => (
          <tr key={`${m.id}-${m.productos_id}`} className="hover:bg-gray-100">
            <td className="py-2 px-4 border-b">{m.id}</td>
            <td className="py-2 px-4 border-b">{m.producto?.nombre}</td>
            <td className="py-2 px-4 border-b">{m.tipo_mantenimiento}</td>
            <td className="py-2 px-4 border-b">{m.descripcion}</td>
            <td className="py-2 px-4 border-b">{m.costo}</td>
            <td className="py-2 px-4 border-b">{m.estado}</td>
            <td className="py-2 px-4 border-b space-x-2">
              <button onClick={() => onEdit(m)} className="bg-yellow-400 px-2 py-1 rounded">Editar</button>
              <button onClick={() => onDelete(m.id, m.productos_id)} className="bg-red-500 text-white px-2 py-1 rounded">Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MantenimientoTable;
