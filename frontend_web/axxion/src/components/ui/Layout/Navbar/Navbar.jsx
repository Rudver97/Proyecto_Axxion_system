import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const rol = localStorage.getItem("rol");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <aside className="w-[260px] min-w-[260px] bg-[#1a1f2e] text-white flex flex-col">
      <div className="p-5 pb-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#4f6ef7] rounded-xl flex items-center justify-center text-lg font-bold shadow-lg">
            S
          </div>
          <div>
            <div className="font-semibold text-sm">Sistema</div>
            <div className="text-[10px] text-white/40">Gestión Integral</div>
          </div>
        </div>
      </div>

      <nav className="flex-1 py-4">
        <div className="px-5 py-2 text-[10px] text-white/35 uppercase tracking-wider">
          Principal
        </div>
        <NavItem icon="◉" label="Dashboard" active />
        <div className="px-5 py-2 text-[10px] text-white/35 uppercase tracking-wider mt-2">
          Inventario
        </div>
        <NavItem icon="📦" label="Productos" />
        <NavItem icon="📂" label="Categorías" />
        <NavItem icon="📥" label="Entradas" />
        <div className="px-5 py-2 text-[10px] text-white/35 uppercase tracking-wider mt-2">
          Operaciones
        </div>
        <NavItem icon="🔧" label="Mantenimiento" />
        <NavItem icon="🏢" label="Proveedores" />
        <NavItem icon="👥" label="Clientes" />
        <div className="px-5 py-2 text-[10px] text-white/35 uppercase tracking-wider mt-2">
          Administración
        </div>
        <NavItem icon="👤" label="Usuarios" />
        <NavItem icon="⚙️" label="Roles" />
      </nav>

      {/* Sidebar Footer con Cerrar Sesión */}
      <div className="p-4 border-t border-white/10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-full bg-[#4f6ef7] flex items-center justify-center text-sm font-medium">
            AD
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium">Administrador</div>
            <div className="text-[10px] text-white/40">admin@sistema.com</div>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all text-white/80 hover:text-white text-sm"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          Cerrar Sesión
        </button>
      </div>
    </aside>
  );
}
