import React from "react";
import { Routes, Route } from "react-router-dom";

// Importar páginas
import Login from "../modules/login/Login";
import Dashboard from "../modules/dashboard/Dashboard";
import Usuarios from "../modules/usuarios/Usuarios";
import Productos from "../modules/productos/Productos";
import Roles from "../modules/roles/Roles";
import Clientes from "../modules/clientes/Clientes";
import Mantenimiento from "../modules/mantenimiento/Mantenimiento";
import Categorias from "../modules/categorias/Categorias";
import Subcategorias from "../modules/subcategorias/Subcategorias";
import Entradas from "../modules/entradas/Entradas";
import Proveedores from "../modules/proveedores/Proveedores";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/usuarios" element={<Usuarios />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/roles" element={<Roles />} />
      <Route path="/clientes" element={<Clientes />} />
      <Route path="/mantenimiento" element={<Mantenimiento />} />
      <Route path="/categorias" element={<Categorias />} />
      <Route path="/subcategorias" element={<Subcategorias />} />
      <Route path="/entradas" element={<Entradas />} />
      <Route path="/proveedores" element={<Proveedores />} />
    </Routes>
  );
}

export default AppRouter;
