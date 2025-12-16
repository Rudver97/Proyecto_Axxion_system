import React, { useEffect, useState } from "react";
import api from "../api/api";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, PieChart, Pie, Cell, Legend } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Dashboard = () => {
  const [productos, setProductos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [roles, setRoles] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [mantenimientos, setMantenimientos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [subcategorias, setSubcategorias] = useState([]);
  const [entradas, setEntradas] = useState([]);
  const [proveedores, setProveedores] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      const [prodRes, usrRes, rolRes, cliRes, manRes, catRes, subRes, entRes, provRes] = await Promise.all([
        api.get("/productos"),
        api.get("/usuarios"),
        api.get("/roles"),
        api.get("/clientes"),
        api.get("/mantenimiento"),
        api.get("/categorias"),
        api.get("/subcategorias"),
        api.get("/entradas"),
        api.get("/proveedores"),
      ]);
      setProductos(prodRes.data);
      setUsuarios(usrRes.data);
      setRoles(rolRes.data);
      setClientes(cliRes.data);
      setMantenimientos(manRes.data);
      setCategorias(catRes.data);
      setSubcategorias(subRes.data);
      setEntradas(entRes.data);
      setProveedores(provRes.data);
    };
    fetchAll();
  }, []);

  // Datos de para gráficos
  const productosPorCategoria = categorias.map(cat => ({
    nombre: cat.nombre,
    cantidad: productos.filter(p => p.subcategoria?.categorias_id === cat.id).length
  }));

  const usuariosPorRol = roles.map(r => ({
    nombre: r.nombre_rol,
    cantidad: usuarios.filter(u => u.rol_id === r.id).length
  }));

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Productos */}
        <div className="bg-white rounded shadow p-4">
          <h2 className="text-xl font-bold mb-2">Productos por Categoría</h2>
          <BarChart width={300} height={200} data={productosPorCategoria}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="nombre" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="cantidad" fill="#0088FE" />
          </BarChart>
        </div>

        {/* Usuarios */}
        <div className="bg-white rounded shadow p-4">
          <h2 className="text-xl font-bold mb-2">Usuarios por Rol</h2>
          <PieChart width={300} height={200}>
            <Pie
              data={usuariosPorRol}
              dataKey="cantidad"
              nameKey="nombre"
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#00C49F"
              label
            >
              {usuariosPorRol.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </div>

        {/* Mantenimientos */}
        <div className="bg-white rounded shadow p-4">
          <h2 className="text-xl font-bold mb-2">Mantenimientos</h2>
          <p>Total mantenimientos: {mantenimientos.length}</p>
          <p>Total productos: {productos.length}</p>
        </div>

        {/* Clientes */}
        <div className="bg-white rounded shadow p-4">
          <h2 className="text-xl font-bold mb-2">Clientes</h2>
          <p>Total clientes: {clientes.length}</p>
          <p>Total alquileres: {clientes.reduce((acc, c) => acc + 1, 0)}</p>
        </div>

        {/* Entradas */}
        <div className="bg-white rounded shadow p-4">
          <h2 className="text-xl font-bold mb-2">Entradas</h2>
          <p>Total entradas: {entradas.length}</p>
          <p>Total proveedores: {proveedores.length}</p>
        </div>

        {/* Subcategorías */}
        <div className="bg-white rounded shadow p-4">
          <h2 className="text-xl font-bold mb-2">Subcategorías</h2>
          <p>Total subcategorías: {subcategorias.length}</p>
          <p>Total categorías: {categorias.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


