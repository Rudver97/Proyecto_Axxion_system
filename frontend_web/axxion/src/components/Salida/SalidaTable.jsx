import React from "react";

const SalidaTable = ({ salidas, onEdit, onDelete }) => {
  return (
    <table className="min-w-full bg-white border rounded shadow">
      <thead>
        <tr className="bg-gray-200 text-left">
          <th className="py-2 px-4 border-b">ID</th>
          <th className="py-2 px-4 border-b">Serial Producto</th>
          <th className="py-2 px-4 border-b">Fecha Creación</th>
          <th className="py-2 px-4 border-b">Alquiler</th>
          <th className="py-2 px-4 border-b">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {salidas.map((sal) => (
          <tr key={sal.id} className="hover:bg-gray-100">
            <td className="py-2 px-4 border-b">{sal.id}</td>
            <td className="py-2 px-4 border-b">{sal.serial_producto}</td>
            <td className="py-2 px-4 border-b">{sal.fecha_creacion}</td>
            <td className="py-2 px-4 border-b">{sal.alquiler?.id}</td>
            <td className="py-2 px-4 border-b space-x-2">
              <button onClick={() => onEdit(sal)} className="bg-yellow-400 px-2 py-1 rounded">Editar</button>
              <button onClick={() => onDelete(sal.id)} className="bg-red-500 text-white px-2 py-1 rounded">Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SalidaTable;
