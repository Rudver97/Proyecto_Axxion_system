-- CONSULTAS MULTIPLES / RELACIONADAS
-- =====================================================
-- Productos con subcategoría y categoría
SELECT p.nombre AS producto, s.nombre AS subcategoria, c.nombre AS categoria
FROM productos p
JOIN subcategorias s ON p.subcategorias_id = s.id
JOIN categorias c ON s.categorias_id = c.id;

-- Entradas con proveedor y producto
SELECT e.id AS entrada, pr.nombre AS producto, p.nombre AS proveedor
FROM entradas e
JOIN productos pr ON e.id = pr.entradas_id
JOIN proveedores p ON e.id_proveedor = p.id;

-- Mantenimientos por producto
SELECT m.tipo_mantenimiento, m.descripcion, pr.nombre AS producto
FROM mantenimiento m
JOIN productos pr ON m.productos_id = pr.id;

-- Usuarios con rol
SELECT u.nombre, u.correo_electronico, r.nombre_rol
FROM usuarios u
JOIN roles r ON u.rol_id = r.id;

-- Salidas con cliente y producto
SELECT s.serial_producto, a.id_cliente, p.nombre AS producto
FROM salida s
JOIN alquiler a ON s.alquiler_id = a.id
JOIN productos p ON a.id_producto = p.serial;