-- categorias , proveedores, roles, salida
INSERT INTO categorias (nombre, estado, descripcion) VALUES
('Electrónica', 1, 'Dispositivos electrónicos y gadgets');
('Muebles', 1, 'Muebles para el hogar y oficina');
('Ropa', 1, 'Prendas de vestir para todas las edades');
('Alimentos', 1, 'Productos alimenticios y bebidas');
('Herramientas', 1, 'Herramientas y equipos de construcción');

INSERT INTO proveedores (nombre, telefono, dirección, estado) VALUES
('Proveedor A', '123456789', 'Calle Falsa 123', 1);
('Proveedor B', '987654321', 'Avenida Siempre Viva 742', 1);
('Proveedor C', '555666777', 'Boulevard Central 456', 1);
('Proveedor D', '444555666', 'Calle Principal 789', 1);
('Proveedor E', '111222333', 'Avenida Secundaria 321', 1);

INSERT INTO ROLES (nombre) VALUES
('Administrador');
('Usuario');
('Invitado');