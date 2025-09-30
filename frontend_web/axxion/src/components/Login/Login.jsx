import { iconos } from "../../assets/iconos"

export default function Login(){
    return(
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-white px-10 py-20 rounded-3xl borde-2 border-2">
        <div className="flex flex-col items-center justify-center min-w-[500px] bg-black p-8 rounded-2xl">
            <img src={iconos.logo} alt="" className="w-32 h-32" />
            <p className="font-medium text-lg text-gray-500 text-white">Bienvenido</p>
            <div className="mt-8">
                <div>
                    <labe className="text-lg font-medium text-white">Email</labe>
                    <input className="w-full borde-2 borde-gray-100 rounded-xl p-4 mt-1 bg-transparen"
                    placeholder="Introduzca su correo"/>
                </div>
                <labe className="text-lg font-medium text-white">Password</labe>
                    <input className="w-full borde-2 borde-gray-100 rounded-xl p-4 mt-1 bg-transparen"
                    placeholder="Introduzca su contraseña"
                    />
                    
            </div>
            <div className="mt-8 flex justify-between items-center">
                <div className="flex gap-2">
                    <input type="checkbox" name="" id="" />
                    <label className="ml-2 font-medium text-base text-white">Recordar su contraseña</label>
                </div>
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
                <a href="/home" className="py-4 px-3 rounded-xl bg-blue-500 text-white text-lg font-bold">Iniciar sesion</a>
            </div>
        </div>
    </div>
    )
}