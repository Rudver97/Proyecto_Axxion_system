/* ************************************************************************************* */
/* ---------------------------------------- DDL ---------------------------------------- */
/* ----------------------------- DATA DEFINITION LANGUAGE ------------------------------ */
/* -------------------------- LENGUAJE DE DEFINICIÓN DE DATOS -------------------------- */
/* ------------------------------------------------------------------------------------- */
/* ************************************************************************************* */
/* ------------------------------------------------------------------------------------- */
/* 01. Mostrar BBDDs : .................... SHOW DATABASES                               */
/* 02. Usar BBDD : ........................ USE __                                       */
/* 03. Eliminar BBDD : .................... DROP DATABASE __                             */
/* 04. Mostrar Tablas : ................... SHOW TABLES __.                              */
/* 05. Mostar Columnas : .................. SHOW COLUMNS FROM __ . DESCRIBE __           */
/* 06. Agregar Columna : .................. ALTER TABLE __ ADD __ __                     */
/* 07. Renombrar Columna : ................ ALTER TABLE __ CHANGE __ __                  */
/* 08. Eliminar Columna : ................. ALTER TABLE __ DROP __                       */
/* 09. Agregar Valor x Defecto Columna : .. ALTER TABLE __ ALTER __ SET DEFAULT __       */
/* 10. Eliminar Valor x Defecto Columna : . ALTER TABLE __ ALTER __ DROP DEFAULT         */
/* 11. Mostrar Creación Tabla : ........... SHOW CREATE TABLE __                         */
/* 12. Eliminar Restricción : ............. ALTER TABLE __ DROP CONSTRAINT __            */
/* 13. Eliminar Índice : .................. ALTER TABLE __ DROP INDEX __                 */
/* 14. Eliminar Llave Primaria : .......... ALTER TABLE __ DROP PRIMARY KEY              */
/* 15. Limpiar Registros : ................ TRUNCATE __                                  */
/* 16. Eliminar Tabla : ................... DROP TABLE __                                */
/* 17. Crear Tabla : ...................... CREATE TABLE __ ( __ , __ )                  */
/* 18. Renombrar Tabla : .................. RENAME TABLE __ TO __                        */
/* 19. Crear Llave Primaria : ............. ALTER TABLE __ ADD PRIMARY KEY ( __ )        */
/* 20. Crear Índice Campo : ............... CREATE INDEX __ ON __ ( __ )                 */
/* 21. Crear Índice Multicampo : .......... CREATE INDEX _ ON _ ( __ , __ )              */
/* 22. Crear Índice Único : ............... CREATE UNIQUE INDEX __ ON __ ( __ )          */
/* 23. Crear Restricción : ................ ALTER TABLE __ ADD CONSTRAINT __             */
/*     FOREIGN KEY ( __ ) REFERENCES __ ( __ ) ON DELETE CASCADE ON UPDATE CASCADE       */
/* ------------------------------------------------------------------------------------- */
/* BIBLIOGRAFÍA                                                                          */
/* ------------------------------------------------------------------------------------- */
/* ************************************************************************************* */
/* EN CONSOLA: XAMPP / SHELL / cd mysql/bin / mysql -h localhost -u root -p / ENTER      */
/* ************************************************************************************* */

/* 01. Mostrar BBDDs : Muestra todas las bases de datos en el servidor. */
SHOW DATABASES;

/* 02. Usar BBDD : Selecciona una base de datos para trabajar en ella. */
USE Inventario_axxion;

/* 03. Eliminar BBDD : Borra permanentemente una base de datos. ¡CON CUIDADO! */
-- Usamos 'IF EXISTS' para evitar un error si la BBDD no existe.
DROP DATABASE IF EXISTS Inventario_axxion;

/* 04. Mostrar Tablas : Lista todas las tablas de la base de datos en uso. */
SHOW TABLES;

/* 05. Mostar Columnas : Describe la estructura de una tabla específica. */
-- Ambas sentencias hacen lo mismo.
DESCRIBE productos;
SHOW COLUMNS FROM productos;

/* 06. Agregar Columna : Añade una nueva columna a una tabla existente. */
-- Agregamos un código de barras a la tabla de productos, después de la columna 'nombre'.
ALTER TABLE productos ADD COLUMN codigo_barras VARCHAR(100) NULL UNIQUE AFTER nombre;

/* 07. Renombrar Columna : Cambia el nombre y/o tipo de una columna. */
-- Cambiamos el nombre de la columna 'detalle' en 'productos' a 'descripcion_completa' y mantenemos su tipo.
ALTER TABLE productos CHANGE COLUMN detalle descripcion_completa TEXT NULL;

/* 08. Eliminar Columna : Borra una columna de una tabla. */
-- Eliminamos la columna 'codigo_barras' que acabamos de agregar.
ALTER TABLE productos DROP COLUMN codigo_barras;

/* 09. Agregar Valor x Defecto Columna : Asigna un valor por defecto a una columna. */
-- Si no se especifica un estado al crear un producto, por defecto será 'disponible'.
ALTER TABLE productos ALTER COLUMN estado SET DEFAULT 'disponible';

/* 10. Eliminar Valor x Defecto Columna : Quita el valor por defecto de una columna. */
ALTER TABLE productos ALTER COLUMN estado DROP DEFAULT;

/* 11. Mostrar Creación Tabla : Muestra la sentencia SQL exacta que se usó para crear la tabla. */
-- Muy útil para replicar o documentar la estructura de una tabla.
SHOW CREATE TABLE alquileres;

/* 12. Eliminar Restricción : Borra una restricción de clave foránea (FOREIGN KEY). */
-- Primero necesitas saber el nombre de la restricción (lo puedes ver con SHOW CREATE TABLE).
-- Aquí eliminamos la relación entre 'productos' y 'subcategorias'.
ALTER TABLE productos DROP CONSTRAINT fk_producto_subcategoria;

/* 13. Eliminar Índice : Borra un índice de una tabla. */
-- A menudo, al borrar una restricción, el índice asociado permanece.
-- Aquí eliminamos el índice que se creó para la clave foránea anterior.
ALTER TABLE productos DROP INDEX fk_producto_subcategoria;

/* 14. Eliminar Llave Primaria : Quita la clave primaria de una tabla. */
-- ¡Operación muy delicada! Solo se puede tener una PK por tabla.
ALTER TABLE roles DROP PRIMARY KEY;

/* 15. Limpiar Registros : Vacía todos los registros de una tabla, reseteando el AUTO_INCREMENT. */
-- Es mucho más rápido que un DELETE FROM para borrar todo.
TRUNCATE TABLE mantenimientos;

/* 16. Eliminar Tabla : Borra permanentemente una tabla y todos sus datos. */
-- Creamos una tabla temporal para el ejemplo y luego la borramos.
CREATE TABLE tabla_para_borrar (id INT);
DROP TABLE IF EXISTS tabla_para_borrar;

/* 17. Crear Tabla : Define y crea una nueva tabla. */
-- Creemos una tabla para registrar los pagos de los alquileres.
CREATE TABLE pagos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    alquiler_id INT NOT NULL,
    monto DECIMAL(10, 2) NOT NULL,
    fecha_pago DATETIME DEFAULT CURRENT_TIMESTAMP,
    metodo_pago VARCHAR(50)
);

/* 18. Renombrar Tabla : Cambia el nombre de una tabla. */
RENAME TABLE pagos TO registro_pagos;

/* 19. Crear Llave Primaria : Añade una clave primaria a una tabla que no la tiene. */
-- Volvemos a añadir la PK que borramos en el paso 14 a la tabla 'roles'.
ALTER TABLE roles ADD PRIMARY KEY (id);

/* 20. Crear Índice Campo : Crea un índice en una sola columna para acelerar búsquedas. */
-- Para buscar clientes por su email de forma más rápida.
CREATE INDEX idx_clientes_email ON clientes (email);

/* 21. Crear Índice Multicampo : Crea un índice compuesto por varias columnas. */
-- Para optimizar búsquedas que filtran por alquiler y producto al mismo tiempo.
CREATE INDEX idx_alquiler_producto ON alquiler_detalles (alquiler_id, producto_id);

/* 22. Crear Índice Único : Crea un índice que no permite valores duplicados. */
-- Asegura que no haya dos roles con el mismo nombre.
CREATE UNIQUE INDEX uq_roles_nombre_rol ON roles (nombre_rol);

/* 23. Crear Restricción : Añade una clave foránea para relacionar dos tablas. */
-- Volvemos a crear la restricción que borramos en el paso 12.
-- ON DELETE RESTRICT: Impide borrar una subcategoría si tiene productos asociados.
-- ON UPDATE CASCADE: Si el 'id' de una subcategoría cambia, se actualiza automáticamente en 'productos'.
ALTER TABLE productos 
ADD CONSTRAINT fk_producto_subcategoria 
FOREIGN KEY (subcategoria_id) REFERENCES subcategorias(id) 
ON DELETE RESTRICT ON UPDATE CASCADE;