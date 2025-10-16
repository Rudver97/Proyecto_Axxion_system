import { Router } from "react-router-dom"
import { iconos } from "../../assets/iconos"
import Navigate from "../Navigate/Navigate"
import { proveedores } from "../../Data/proveedores";
import SearchBar from "../Buscar/SearchBar"

const Proveedores = () => {
    return (
        <div className="w-screen max-h-screen h-screen grid grid-cols-[200px_1fr]">
            <Navigate />
            <section className="max-w-full h-full overflow-hidden">
                <section className="max-h-[10%] flex items-center p-3 justify-between">
                    <p className="font-semibold">Proveedores</p>
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
                                telefono
                            </th>
                            <th className="px-6 py-3 text-center">
                                Direccion
                            </th>
                            <th className="px-6 py-3 text-center">
                                cantidad
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                            {proveedores.map((Proveedores) => (
                                <tr key={Proveedores.id}>
                                    <th className=" text-center">
                                        {Proveedores.id}
                                    </th>
                                    <th className=" text-center">
                                        {Proveedores.nombre}
                                    </th>
                                    <th className=" text-center">
                                        {Proveedores.telefono}
                                    </th>
                                    <th className="text-center">
                                        {Proveedores.direccion}
                                    </th>
                                        <th className="text-center">
                                        {Proveedores.cantidad}
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

export default Proveedores;