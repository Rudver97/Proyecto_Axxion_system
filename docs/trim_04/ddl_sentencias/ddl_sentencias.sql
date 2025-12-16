-- Categorias
INSERT INTO categorias (nombre, estado, descripcion) VALUES
('Electrónica', 'Activo', 'Productos electrónicos'),
('Muebles', 'Activo', 'Todo tipo de muebles');

-- Subcategorias
INSERT INTO subcategorias (nombre, categorias_id) VALUES
('Laptops', 1),
('Sillas', 2);

-- Proveedores
INSERT INTO proveedores (nombre, telefono, direccion, estado) VALUES
('Proveedor A', '3001112233', 'Calle 123', 'Activo'),
('Proveedor B', '3004445566', 'Calle 456', 'Activo');

-- Roles
INSERT INTO roles (nombre_rol, estado) VALUES
('Administrador', 'Activo'),
('Empleado', 'Activo');

-- Usuarios
INSERT INTO usuarios (nombre, correo_electronico, contraseña, telefono, rol_id, direccion) VALUES
('Juan Perez', 'juan@mail.com', '12345', '3005551234', 1, 'Calle 1'),
('Maria Lopez', 'maria@mail.com', '54321', '3005555678', 2, 'Calle 2');

-- Productos
INSERT INTO entradas (id_proveedor, id_producto) VALUES
(1, 'PROD001'),
(2, 'PROD002');

INSERT INTO productos (nombre, modelo, serial, marca, subcategorias_id, entradas_id) VALUES
('Laptop HP', 'HP ProBook', 'SN12345', 1, 1, 1),
('Silla Oficina', 'Comfort Chair', 'SN54321', 2, 2, 2);
