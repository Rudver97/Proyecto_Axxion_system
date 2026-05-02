// Dashboard.jsx
import React, { useEffect, useState } from "react";
import api from "../../api/api";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid,
  PieChart, Pie, Cell, Legend, ResponsiveContainer
} from "recharts";
import Layout from "../../components/ui/Layout/Layout";

const COLORS = ["#4f6ef7", "#22c55e", "#f59e0b", "#ef4444", "#8b5cf6", "#06b6d4"];

const Dashboard = () => {
  
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    productos: [],
    usuarios: [],
    roles: [],
    clientes: [],
    mantenimientos: [],
    categorias: [],
    subcategorias: [],
    entradas: [],
    proveedores: [],
  });

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [prodRes, usrRes, rolRes, cliRes, manRes, catRes, subRes, entRes, provRes] = await Promise.all([
          api.get("/productos"),
          api.get("/usuarios"),
          api.get("/roles"),
          api.get("/clientes"),
          api.get("/mantenimiento"),
          api.get("/categorias"),
          api.get("/subcategorias"),
          api.get("/entradas"),
          api.get("/proveedores"),
        ]);
        setStats({
          productos: prodRes.data,
          usuarios: usrRes.data,
          roles: rolRes.data,
          clientes: cliRes.data,
          mantenimientos: manRes.data,
          categorias: catRes.data,
          subcategorias: subRes.data,
          entradas: entRes.data,
          proveedores: provRes.data,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  // Datos para gráficos
  const productosPorCategoria = stats.categorias.map(cat => ({
    nombre: cat.nombre?.length > 10 ? cat.nombre.slice(0, 8) + "…" : cat.nombre,
    nombreCompleto: cat.nombre,
    cantidad: stats.productos.filter(p => p.subcategoria?.categorias_id === cat.id).length
  })).filter(c => c.cantidad > 0);

  const usuariosPorRol = stats.roles.map(r => ({
    nombre: r.nombre_rol,
    cantidad: stats.usuarios.filter(u => u.rol_id === r.id).length
  })).filter(r => r.cantidad > 0);

  // KPI Values
  const totalProductos = stats.productos.length;
  const totalClientes = stats.clientes.length;
  const totalUsuarios = stats.usuarios.length;
  const totalMantenimientos = stats.mantenimientos.length;
  const coberturaMant = totalProductos ? Math.round((totalMantenimientos / totalProductos) * 100) : 0;

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#f0f2f5]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#4f6ef7] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-500">Cargando dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg text-sm text-gray-400 border border-gray-100">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>Buscar...</span>
            </div>
            <span className="bg-[#4f6ef7] text-white text-xs px-3 py-1 rounded-full shadow-sm">Sistema activo</span>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* KPI Cards */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <KpiCard icon="📦" label="Productos" value={totalProductos} color="blue" trend="↑ Total en sistema" />
            <KpiCard icon="👥" label="Clientes" value={totalClientes} color="green" trend="↑ Registrados" />
            <KpiCard icon="👤" label="Usuarios" value={totalUsuarios} color="purple" trend="Con acceso al sistema" />
            <KpiCard icon="🔧" label="Mantenimientos" value={totalMantenimientos} color="orange" trend="Registros activos" />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Bar Chart */}
            <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-800 text-sm">Productos por categoría</h3>
              <p className="text-xs text-gray-400 mb-3">Distribución del inventario</p>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={productosPorCategoria}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="nombre" tick={{ fontSize: 11, fill: "#aaa" }} axisLine={{ stroke: "#e0e0e0" }} />
                    <YAxis tick={{ fontSize: 11, fill: "#aaa" }} axisLine={{ stroke: "#e0e0e0" }} />
                    <Tooltip
                      contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                      formatter={(value, name, props) => [value, props.payload.nombreCompleto]}
                    />
                    <Bar dataKey="cantidad" fill="#4f6ef7" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Pie Chart */}
            <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-800 text-sm">Usuarios por rol</h3>
              <p className="text-xs text-gray-400 mb-3">Distribución de roles</p>
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 h-56">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={usuariosPorRol}
                        dataKey="cantidad"
                        nameKey="nombre"
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={70}
                        paddingAngle={3}
                      >
                        {usuariosPorRol.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="#fff" strokeWidth={2} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                      />
                      <Legend
                        layout="vertical"
                        align="right"
                        verticalAlign="middle"
                        iconType="circle"
                        formatter={(value) => <span className="text-xs text-gray-600">{value}</span>}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Info Cards */}
          <div className="grid grid-cols-3 gap-4">
            <InfoCard title="Inventario" items={[
              { label: "Categorías", value: stats.categorias.length },
              { label: "Subcategorías", value: stats.subcategorias.length },
              { label: "Entradas", value: stats.entradas.length },
              { label: "Proveedores", value: stats.proveedores.length },
            ]} />
            <InfoCard title="Resumen general" items={[
              { label: "Productos totales", value: totalProductos, pill: "blue" },
              { label: "Usuarios totales", value: totalUsuarios, pill: "green" },
              { label: "Roles definidos", value: stats.roles.length, pill: "amber" },
              { label: "Clientes activos", value: totalClientes, pill: "blue" },
            ]} />
            <InfoCard title="Mantenimiento" items={[
              { label: "Total registros", value: totalMantenimientos },
              { label: "Productos", value: totalProductos },
              { label: "% cobertura", value: `${coberturaMant}%` },
              { label: "Estado", value: "Activo", pill: "green" },
            ]} />
          </div>
        </div>
      </main>
    </Layout>
  );
};


const KpiCard = ({ icon, label, value, color, trend }) => {
  const bgColor = {
    blue: "bg-blue-50",
    green: "bg-green-50",
    purple: "bg-purple-50",
    orange: "bg-orange-50",
  }[color];
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-400 uppercase tracking-wide">{label}</span>
        <div className={`w-8 h-8 rounded-lg ${bgColor} flex items-center justify-center text-base`}>{icon}</div>
      </div>
      <div className="text-2xl font-bold text-gray-800">{value}</div>
      <div className="text-xs text-gray-400 mt-1">{trend}</div>
    </div>
  );
};

const InfoCard = ({ title, items }) => (
  <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
    <h3 className="font-semibold text-gray-800 text-sm mb-3">{title}</h3>
    <div className="space-y-2">
      {items.map((item, idx) => (
        <div key={idx} className="flex justify-between items-center py-1.5 border-b border-gray-50 last:border-0">
          <span className="text-xs text-gray-500">{item.label}</span>
          {item.pill ? (
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
              item.pill === "blue" ? "bg-blue-50 text-blue-600" :
              item.pill === "green" ? "bg-green-50 text-green-600" :
              "bg-amber-50 text-amber-600"
            }`}>{item.value}</span>
          ) : (
            <span className="text-sm font-medium text-gray-700">{item.value}</span>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default Dashboard;
