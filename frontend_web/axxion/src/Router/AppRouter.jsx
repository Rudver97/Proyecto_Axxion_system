import React from "react";
import { Routes, Route } from "react-router-dom";

// Importar páginas
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Usuarios from "../pages/Usuarios";
import Productos from "../pages/Productos";
import Roles from "../pages/Roles";
import Clientes from "../pages/Clientes";
import Mantenimiento from "../pages/Mantenimiento";
import Categorias from "../pages/Categorias";
import Subcategorias from "../pages/Subcategorias";
import Entradas from "../pages/Entradas";
import Proveedores from "../pages/Proveedores";

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



