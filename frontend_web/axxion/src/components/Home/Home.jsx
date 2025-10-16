import { Router } from "react-router-dom"
import { iconos } from "../../assets/iconos"
import Navigate from "../Navigate/Navigate"
import { NavLink } from "react-router-dom"


export default function Home(){
    return(
        <div className="max-h-dvh grid grid-cols-[192px_1fr]">
            <Navigate />
            <section className="min-w-full grid grid-cols-4 grid-rows-2 justify-center items-center px-24 py-40 gap-3">
                <NavLink 
                to={"/home"}
                className="flex flex-col items-center justify-center py-11 gap-2 bg-gray-200 rounded-lg hover:scale-105 transition-all duration-500">
                    <img src={iconos.home} alt="" />
                    <span>Inicio</span>
                </NavLink>
                <NavLink 
                to={"/products"}
                className="flex flex-col items-center justify-center py-11 gap-2 bg-gray-200 rounded-lg">
                    <img src={iconos.products} alt="" />
                    <span>Productos</span>
                </NavLink>
                <NavLink 
                to={"/Dashboard"}
                className="flex flex-col items-center justify-center py-11 gap-2 bg-gray-200 rounded-lg">
                    <img src={iconos.dashboard} alt="" />
                    <span>Dashboard</span>
                </NavLink>
                <NavLink 
                to={"/Categories"}
                className="flex flex-col items-center justify-center py-11 gap-2  bg-gray-200 rounded-lg">
                    <img src={iconos.category} alt="" />
                    <span>Categories</span>
                </NavLink>
                <NavLink
                to={"/Subcategories"}
                className="flex flex-col items-center justify-center py-11 gap-2  bg-gray-200 rounded-lg">
                    <img src={iconos.subcategoria} alt="" />
                    <span>Subcategories</span>
                </NavLink>
                <NavLink 
                to={"/Alquiler"}
                className="flex flex-col items-center justify-center py-11  gap-2 bg-gray-200 rounded-lg">
                    <img src={iconos.alquiler} alt="" />
                    <span>Alquiler</span>
                </NavLink>
                <NavLink 
                to={"/Proveedores"}
                className="flex flex-col items-center justify-center py-11 gap-2 bg-gray-200 rounded-lg">
                    <img src={iconos.proveedores} alt="" />
                    <span>Proveedores</span>
                </NavLink>
                <NavLink 
                to={"/Mantenimiento"}
                className="flex flex-col items-center justify-center py-11 gap-2  bg-gray-200 rounded-lg">
                    <img src={iconos.mantenimiento} alt="" />
                    <span>Mantenimiento</span>
                </NavLink>
                <NavLink 
                to={"/Clientes"}
                className="flex flex-col items-center justify-center py-11 gap-2 bg-gray-200 rounded-lg">
                    <img src={iconos.clientes} alt="" />
                    <span>Clientes</span>
                </NavLink>
            </section>
        </div>
    )
}

