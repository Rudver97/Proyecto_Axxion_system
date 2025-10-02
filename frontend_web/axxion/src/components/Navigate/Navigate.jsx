import React from 'react'
import Home from '../Home/Home'
import { iconos } from '../../assets/iconos'
import { NavLink, Outlet } from 'react-router-dom'

function Navigate() {
  return (
    <aside className='flex flex-col w-[200px] justify-between h-screen p-2 bg-slate-100 overflow-hidden'>
      <section>
      <section className='flex justify-between items-center'>
        <img src={iconos.avatar} alt="" className='w-10 h-10'/>
        <span className='text-wrap'>Rudver Guependo</span>
        </section>
        <nav className='flex flex-col pt-5'>
          <ul className='flex flex-col gap-2'>
            <li>
              <NavLink
              to={"/home"}
              className={`flex px-3 py-2 gap-5 rounded-md outline-none transition duration-300 hover:bg-slate-200`}>
                <img src={iconos.home} alt="" />
                <span>Inicio</span>
              </NavLink>
            </li>
            <li>
              <NavLink
              to={"/products"}
              className={`flex px-3 py-2 gap-5 rounded-md outline-none transition duration-300 hover:bg-slate-200`}>
                <img src={iconos.products} alt="" />
                <span>Productos</span>
              </NavLink>
            </li>
            <li>
              <NavLink
              to={"/dashboard"}
              className={`flex px-3 py-2 gap-5 rounded-md outline-none transition duration-300 hover:bg-slate-200`}>
                <img src={iconos.dashboard} alt="" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
              to={"/Categories"}
              className={`flex px-3 py-2 gap-5 rounded-md outline-none transition duration-300 hover:bg-slate-200`}>
                <img src={iconos.category} alt="" />
                <span>Categories</span>
              </NavLink>
            </li>
            <li>
              <NavLink
              to={"/Alquiler"}
              className={`flex px-3 py-2 gap-5 rounded-md outline-none transition duration-300 hover:bg-slate-200`}>
                <img src={iconos.Alquiler} alt=""/>
                <span>Alquiler</span>
              </NavLink>
            </li>
              <li>
                <NavLink
                  to={"/proveedores"}
                  className={`flex px-3 py-2 gap-5 rounded-md outline-none transition duration-300 hover:bg-slate-200`}>
                  <img src={iconos.proveedores} alt="Proveedores" />
                  <span>Proveedores</span>
                </NavLink>
              </li>
                <li>
                  <NavLink
                  to={"/Mantenimiento"}
                  className={`flex px-3 py-2 gap-5 rounded-md outline-none transition duration-300 hover:bg-slate-200`}>
                  <img src={iconos.Mantenimiento} alt="" />
                  <span>Mantenimiento</span>
                  </NavLink>
                </li>
                  <li>
                    <NavLink
                    to={"/Clientes"}
                    className={`flex px-3 py-2 gap-5 rounded-md outline-none transition duration-300 hover:bg-slate-200`}>
                    <img src={iconos.Clientes} alt="" />
                    <span>Clientes</span>
                    </NavLink>
                  </li>
            </ul>
          </nav>
          </section>
          <nav>
          <ul>
            
            <li>
              <NavLink
              className={`flex px-3 py-2 gap-5 rounded-md outline-none transition duration-300 hover:bg-slate-200`}
              to={"/login"}>
                <img src="" alt="" />
                <span>Cerrar Sesión</span>
              </NavLink>
            </li>
          </ul>
        </nav>
    </aside>
  )
}


export default Navigate
