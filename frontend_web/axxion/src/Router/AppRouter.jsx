import {Navigate, Routes, Route } from "react-router-dom";
import Login from "../components/Login/Login"
import Home from "../components/Home/Home";
import Dashboard from "../components/Dashboard/Dashboard";
import Categories from "../components/Categories/Categories";
import Alquiler from "../components/Alquiler/Alquiler";
import Proveedores from "../components/Proveedores/Proveedores";
import Mantenimiento from "../components/Mantenimiento/Mantenimiento";
import Productos from "../components/Productos/Productos";
import Clientes from "../components/Clientes/Clientes";
import Subcategories from "../components/Subcategories/Subcategories";

export default function AppRouter() {
    return(
        <Routes>
            <Route path="*" element={<Navigate to={"/login"} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Dashboard" element={<Dashboard />}/>
            <Route path="/home" element={<Home />} />
            <Route path="/Products" element={<Productos />} />
            <Route path="/Categories" element={<Categories />} />
            <Route path="/Alquiler" element={<Alquiler />} />
            <Route path="/Proveedores" element={<Proveedores />} />
            <Route path="/Mantenimiento" element={<Mantenimiento />} />
            <Route path="/Clientes" element={<Clientes />} />
            <Route path="/Subcategories" element={<Subcategories />} />
        </Routes>
    )
}