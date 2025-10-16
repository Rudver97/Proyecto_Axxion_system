import { Router } from "react-router-dom"
import { iconos } from "../../assets/iconos"
import Navigate from "../Navigate/Navigate"
import {productsData } from "../../Data/products";
import SearchBar from "../Buscar/SearchBar"

const Productos = () => {
    return (
        <div className="w-screen max-h-screen h-screen grid grid-cols-[200px_1fr]">
            <Navigate />
            <section className="max-w-full h-full overflow-hidden">
                <section className="max-h-[10%] flex items-center p-3 justify-between">
                    <p className="font-semibold">Productos</p>
                    <SearchBar/>
                </section>
                <section className="w-full max-h-[90%] overflow-x-auto overflow-y-auto p-2">
                    <table className="w-full max-h-full text-sm text-left border text-gray-500 dark:text-gray-400 overflow-x-auto overflow-y-auto">
                        <thead>
                        <tr>
                            <th className="px-6 py-3 text-center">
                                ID
                            </th>
                            <th className="px-6 py-3 text-center">
                                nombre
                            </th>
                            <th className="px-6 py-3 text-center">
                                modelo
                            </th>
                            <th className="px-6 py-3 text-center">
                                serial
                            </th>
                            <th className="px-6 py-3 text-center">
                                marca
                            </th>
                            <th className="px-6 py-3 text-center">
                                tiempo
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                            {productsData.map((Productos) => (
                                <tr key={Productos.id}>
                                    <th className=" text-center">
                                        {Productos.id}
                                    </th>
                                    <th className=" text-center">
                                        {Productos.nombre}
                                    </th>
                                    <th className=" text-center">
                                        {Productos.modelo}
                                    </th>
                                    <th className="text-center">
                                        {Productos.serial}
                                    </th>
                                        <th className="text-center">
                                        {Productos.marca}
                                        </th>
                                        <th className="text-center">
                                        {Productos.tiempo}
                                        </th>
                                    <th className="w-full h-full flex items-center justify-center gap-5 px-6 py-4">
                                        <button>
                                            <img src={iconos.Eliminar} alt="eliminar" className="w-6 h-6"/>
                                        </button>
                                        <button>
                                            <img src={iconos.Actualizar} alt="actualizar" className="w-6 h-6"/>
                                        </button>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </section>
        </div>           
    );
}

export default Productos;