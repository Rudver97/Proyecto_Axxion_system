import React from "react";

const ProductosForm = ({ fields, setFields, onCancel, onSave }) => (
  <div className="bg-white p-6 rounded shadow w-96 mb-6 space-y-2">
    <input type="text" placeholder="Nombre" value={fields.nombre} onChange={e=>setFields({...fields,nombre:e.target.value})} className="w-full p-2 border rounded"/>
    <input type="text" placeholder="Modelo" value={fields.modelo} onChange={e=>setFields({...fields,modelo:e.target.value})} className="w-full p-2 border rounded"/>
    <input type="text" placeholder="Serial" value={fields.serial} onChange={e=>setFields({...fields,serial:e.target.value})} className="w-full p-2 border rounded"/>
    <input type="number" placeholder="Marca" value={fields.marca} onChange={e=>setFields({...fields,marca:e.target.value})} className="w-full p-2 border rounded"/>
    <input type="number" placeholder="Subcategoría ID" value={fields.subcategorias_id} onChange={e=>setFields({...fields,subcategorias_id:e.target.value})} className="w-full p-2 border rounded"/>
    <div className="flex justify-end space-x-2">
      <button onClick={onCancel} className="px-4 py-2 border rounded">Cancelar</button>
      <button onClick={onSave} className="px-4 py-2 bg-blue-600 text-white rounded">Guardar</button>
    </div>
  </div>
);

export default ProductosForm;

