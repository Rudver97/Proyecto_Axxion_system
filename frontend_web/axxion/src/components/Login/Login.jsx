import { iconos } from "../../assets/iconos";
import useAuth from "./hooks/auth";

export default function Login() {

    const { handleSubmit, email, setEmail, password, setPassword, error } = useAuth();

    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center bg-white px-10 py-20 rounded-3xl borde-2 border-2">
            <div className="flex flex-col items-center justify-center min-w-[500px] bg-black p-8 rounded-2xl">
                <img src={iconos.logo} alt="Logo" className="w-32 h-32" />
                <p className="font-medium text-lg text-white">Bienvenido</p>
                <form className="mt-8 w-full" onSubmit={handleSubmit}>
                    <div>
                        <label className="text-lg font-medium text-white">Email</label>
                        <input
                            type="email"
                            className="w-full borde-2 borde-gray-100 rounded-xl p-4 mt-1"
                            placeholder="Introduzca su correo"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label className="text-lg font-medium text-white">Password</label>
                        <input
                            type="password"
                            className="w-full borde-2 borde-gray-100 rounded-xl p-4 mt-1"
                            placeholder="Introduzca su contraseña"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mt-8 flex justify-between items-center">
                        <div className="flex gap-2">
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember" className="ml-2 font-medium text-base text-white">Recordar su contraseña</label>
                        </div>
                    </div>
                    {error && <div className="text-red-500 mt-4">{error}</div>}
                    <div className="mt-8 flex flex-col gap-y-4">
                        <button type="submit" className="py-4 px-3 rounded-xl bg-blue-500 text-white text-lg font-bold">Iniciar sesión</button>
                    </div>
                </form>
            </div>
        </div>
    );
}