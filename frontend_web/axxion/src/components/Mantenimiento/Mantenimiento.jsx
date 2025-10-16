import { Router } from "react-router-dom"
import { iconos } from "../../assets/iconos"
import { mantenimientos } from "../../Data/mantenimiento"
import SearchBar from "../Buscar/SearchBar"
import Navigate from "../Navigate/Navigate"

const Mantenimiento = () => {
    return (
        <div className="w-screen max-h-screen h-screen grid grid-cols-[200px_1fr]">
            <Navigate />
            <section className="max-w-full h-full overflow-hidden">
                <section className="max-h-[10%] flex items-center p-3 justify-between">
                    <p className="font-semibold"> Mantenimiento</p>
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
                                Tipo de Mantenimiento
                            </th>
                            <th className="px-6 py-3 text-center">
                                Descripcion
                            </th>
                            <th className="px-6 py-3 text-center">
                                Estado
                            </th>
                            <th className="px-6 py-3 text-center">
                                Acciones
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                            {mantenimientos.map((mantenimiento) => (
                                <tr key={mantenimiento.id}>
                                    <th className=" text-center">
                                        {mantenimiento.id}
                                    </th>
                                    <th className=" text-center">
                                        {mantenimiento.tipo_mantenimiento}
                                    </th>
                                    <th className=" text-center">
                                        {mantenimiento.descripcion}
                                    </th>
                                    <th className="text-center">
                                        {mantenimiento.estado}
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

export default Mantenimiento;