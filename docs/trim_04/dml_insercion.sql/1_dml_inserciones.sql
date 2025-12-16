
INSERT INTO categorias (nombre, estado, descripcion) VALUES
('Electrónica', 'Activo', 'Dispositivos electrónicos'),
('Muebles', 'Activo', 'Muebles de oficina y hogar');

INSERT INTO subcategorias (nombre, categorias_id) VALUES
('Computadoras', 1),
('Celulares', 1),
('Sillas', 2);

INSERT INTO proveedores (nombre, telefono, direccion, estado) VALUES
('Proveedor A', '123456789', 'Calle 123', 'Activo'),
('Proveedor B', '987654321', 'Avenida 456', 'Activo');

INSERT INTO entradas (id_proveedor, id_producto) VALUES
(1, 'PROD-001'),
(2, 'PROD-002');

INSERT INTO alquiler (id_cliente, fecha_salida, id_producto) VALUES
('CLI-001', '2025-12-11', 'PROD-001'),
('CLI-002', '2025-12-12', 'PROD-002');

INSERT INTO salida (serial_producto, fecha_creacion, alquiler_id) VALUES
('SER-001', '2025-12-11', 1),
('SER-002', '2025-12-12', 2);

INSERT INTO productos (nombre, modelo, serial, marca, subcategorias_id, entradas_id) VALUES
('Laptop HP', 'HP ProBook', 'SER-001', 1, 1, 1),
('Silla Ejecutiva', 'Silla Ergonomica', 'SER-002', 2, 3, 2);

INSERT INTO roles (nombre_rol, estado) VALUES
('Administrador', 'Activo'),
('Empleado', 'Activo');

INSERT INTO clientes (alquiler_id) VALUES
(1),
(2);

INSERT INTO mantenimiento (id, tipo_mantenimiento, descripcion, costo, estado, productos_id) VALUES
(1, 'Preventivo', 'Limpieza general', 50.0, 'Activo', 1),
(2, 'Correctivo', 'Cambio de piezas', 150.0, 'Activo', 2);

INSERT INTO usuarios (nombre, correo_electronico, contraseña, telefono, rol_id, direccion) VALUES
('saray guependo', 'saray@correo.com', '123456', '5551234', 1, 'Calle Falsa 123'),
('Maria Gomez', 'maria@correo.com', '654321', '5555678', 2, 'Avenida Siempre Viva 742');