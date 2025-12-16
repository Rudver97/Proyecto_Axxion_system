 
-- =====================================================
SET FOREIGN_KEY_CHECKS = 0;
DROP SCHEMA IF EXISTS Inventario_axxion;
CREATE SCHEMA Inventario_axxion DEFAULT CHARACTER SET utf8mb4;
USE Inventario_axxion;

-- =====================================================
--  TABLA: categorias
-- =====================================================
CREATE TABLE categorias (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(200) NOT NULL,
  estado VARCHAR(200) NOT NULL,
  descripcion VARCHAR (200) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB;

-- =====================================================
--  TABLA: subcategorias
-- =====================================================
CREATE TABLE subcategorias (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  categorias_id INT NOT NULL,
  PRIMARY KEY (id),
  INDEX idx_subcat_categoria (categorias_id),
  CONSTRAINT fk_subcat_categorias
    FOREIGN KEY (categorias_id)
    REFERENCES categorias(id)
    ON UPDATE CASCADE ON DELETE RESTRICT
) ENGINE=InnoDB;

-- =====================================================
--  TABLA: proveedores
-- =====================================================
CREATE TABLE proveedores (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(200) NOT NULL,
  telefono VARCHAR(200) NOT NULL,
  direccion TEXT NOT NULL,
  estado VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB;

-- =====================================================
--  TABLA: entradas
--  (CORREGIDO: proveedores_id cambia a id_proveedor INT)
-- =====================================================
CREATE TABLE entradas (
  id INT NOT NULL AUTO_INCREMENT,
  id_proveedor INT NOT NULL,
  id_producto VARCHAR(45) NOT NULL,
  PRIMARY KEY (id),
  INDEX idx_entradas_prov (id_proveedor),
  CONSTRAINT fk_entradas_proveedores
      FOREIGN KEY (id_proveedor)
      REFERENCES proveedores(id)
      ON UPDATE CASCADE ON DELETE RESTRICT
) ENGINE=InnoDB;

-- =====================================================
--  TABLA: alquiler
-- =====================================================
CREATE TABLE alquiler (
  id INT NOT NULL AUTO_INCREMENT,
  id_cliente VARCHAR(45) NOT NULL,
  fecha_salida VARCHAR(45) NOT NULL,
  id_producto VARCHAR(45) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB;

-- =====================================================
--  TABLA: salida
-- =====================================================
CREATE TABLE salida (
  id INT NOT NULL AUTO_INCREMENT,
  serial_producto VARCHAR(45) NOT NULL,
  fecha_creacion VARCHAR(45) NOT NULL,
  alquiler_id INT NOT NULL,
  PRIMARY KEY (id),
  INDEX idx_salida_alquiler (alquiler_id),
  CONSTRAINT fk_salida_alquiler
      FOREIGN KEY (alquiler_id)
      REFERENCES alquiler(id)
      ON UPDATE CASCADE ON DELETE RESTRICT
) ENGINE=InnoDB;
-- =====================================================
--  TABLA: productos
-- =====================================================
CREATE TABLE productos (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  modelo TEXT NOT NULL,
  serial VARCHAR(50) NOT NULL,
  marca INT NOT NULL,
  subcategorias_id INT NOT NULL,
  entradas_id INT NOT NULL,
  PRIMARY KEY (id),
  INDEX idx_prod_subcat (subcategorias_id),
  INDEX idx_prod_entradas (entradas_id),
  CONSTRAINT fk_prod_subcat FOREIGN KEY (subcategorias_id)
      REFERENCES subcategorias(id)
      ON UPDATE CASCADE ON DELETE RESTRICT,
  CONSTRAINT fk_prod_entradas FOREIGN KEY (entradas_id)
      REFERENCES entradas(id)
      ON UPDATE CASCADE ON DELETE RESTRICT
) ENGINE=InnoDB;

-- =====================================================
--  TABLA: roles
-- =====================================================
CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT,
  nombre_rol VARCHAR(200) NOT NULL,
  estado VARCHAR(200) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB;

-- =====================================================
--  TABLA: clientes
--  (CORREGIDO: elimina stock)
-- =====================================================
CREATE TABLE clientes (
  id INT NOT NULL AUTO_INCREMENT,
  alquiler_id INT NOT NULL,
  PRIMARY KEY (id),
  INDEX idx_cliente_alquiler (alquiler_id),
  CONSTRAINT fk_clientes_alquiler
      FOREIGN KEY (alquiler_id)
      REFERENCES alquiler(id)
      ON UPDATE CASCADE ON DELETE RESTRICT
) ENGINE=InnoDB;

-- =====================================================
--  TABLA: mantenimiento
-- =====================================================
CREATE TABLE mantenimiento (
  id INT NOT NULL,
  tipo_mantenimiento VARCHAR(45) NOT NULL,
  descripcion TEXT NOT NULL,
  costo FLOAT NOT NULL,
  estado VARCHAR(255) NOT NULL,
  productos_id INT NOT NULL,
  PRIMARY KEY (id, productos_id),
  INDEX idx_mantenimiento_producto (productos_id),
  CONSTRAINT fk_mantenimiento_producto
      FOREIGN KEY (productos_id)
      REFERENCES productos(id)
      ON UPDATE CASCADE ON DELETE RESTRICT
) ENGINE=InnoDB;

-- =====================================================
--  TABLA: usuarios
--  (CORREGIDO: se eliminan columnas inexistentes)
-- =====================================================
CREATE TABLE usuarios (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(200) NOT NULL,
  correo_electronico VARCHAR(200) NOT NULL,
  contraseña VARCHAR(200) NOT NULL,
  telefono VARCHAR(50) NOT NULL,
  rol_id INT NOT NULL,
  direccion VARCHAR(100),
  PRIMARY KEY (id),
  INDEX idx_usr_rol (rol_id),
  CONSTRAINT fk_usr_roles FOREIGN KEY (rol_id)
      REFERENCES roles(id)
      ON UPDATE CASCADE ON DELETE RESTRICT
) ENGINE=InnoDB;
