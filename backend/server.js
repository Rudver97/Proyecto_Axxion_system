const express = require('express');
const logger = require('morgan');
const cors = require('cors');

// Rutas
const usuariosRoutes = require('./routes/usuariosRoutes');
const productosRoutes = require('./routes/productosRoutes');
const mantenimientoRoutes = require('./routes/mantenimientoRoutes');
const proveedoresRoutes = require('./routes/proveedoresRoutes');
const categoriasRoutes = require('./routes/categoriasRoutes');
const subcategoriasRoutes = require('./routes/subcategoriasRoutes');
const alquilerRoutes = require('./routes/alquilerRoutes');
const entradaRoutes = require('./routes/entradaRoutes');
const salidaRoutes = require('./routes/salidaRoutes');
const rolesRoutes = require('./routes/rolesRoutes');
const clientesRoutes = require('./routes/clientesRoutes');
const authRoutes = require('./routes/authRoutes');
const app = express();

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// ENDPOINTS
app.get('/', (req, res) => res.send("API Inventario Axxion funcionando"));
console.log("API Inventario Axxion funcionando");

// REGISTRO DE RUTAS
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/productos', productosRoutes);
app.use('/api/mantenimiento', mantenimientoRoutes);
app.use('/api/proveedores', proveedoresRoutes);
app.use('/api/categorias', categoriasRoutes);
app.use('/api/subcategorias', subcategoriasRoutes);
app.use('/api/alquiler', alquilerRoutes);
app.use('/api/entradas', entradaRoutes);
app.use('/api/salida', salidaRoutes);
app.use('/api/roles', rolesRoutes);
app.use('/api/clientes', clientesRoutes);

// Errores
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ error: err.message });
});

module.exports = app;
