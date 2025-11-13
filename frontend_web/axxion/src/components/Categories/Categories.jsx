import { Router } from "react-router-dom"
import { iconos } from "../../assets/iconos";
import SearchBar from "../Buscar/SearchBar";
import { categories } from "../../Data/categories";
import Navigate from "../Navigate/Navigate";

const Categories = () => {
    return (
        <div className="w-screen max-h-screen h-screen grid grid-cols-[200px_1fr]">
            <Navigate />
            <section className="max-w-full h-full overflow-hidden">
                <section className="max-h-[10%] flex items-center p-3 justify-between">
                    <p className="font-semibold">Categories</p>
                    <section className="flex items-center gap-3">
                        <button className="flex items-center bg-slate-100 px-4 py-3 rounded-lg gap-2">
                            <img src={iconos.category} alt="agregar" className="w-6 h-6"/>
                            <p>Agregar Categoria</p>
                        </button>
                        <SearchBar/>
                    </section>
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
                                Descripcion
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                            {categories.map((category) => (
                                <tr key={category.id}>
                                      <th className=" text-center">
                                        {category.id}
                                      </th>
                                      <th className=" text-center">
                                        {category.nombre}
                                      </th>
                                      <th className=" text-center">
                                        {category.Descripcion}
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

export default Categories;