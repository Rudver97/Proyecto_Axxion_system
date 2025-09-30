/* ************************************************************************************* */
/* ---------------------------------------- DML ---------------------------------------- */
/* ---------------------------- DATA MANIPULATION LANGUAGE ----------------------------- */
/* ------------------------- LENGUAJE DE MANIPULACIÓN DE DATOS ------------------------- */
/* -------------------------------- MULTITABLA / UNIÓN --------------------------------- */
/* ------------------------------------------------------------------------------------- */
/* ************************************************************************************* */
/* ------------------------------------------------------------------------------------- */
/* 1. CONSULTAS DE ACCIÓN [Inicio]                                                       */
/* 1.1. Crear una Tabla con Otra : ... CREATE TABLE _ SELECT _ FROM _ WHERE _ = _        */
/* 1.2. Insertar Datos Anexados : .... INSERT INTO _ SELECT _ FROM _                     */
/* 2. CONSULTAS DE SELECCIÓN                                                             */
/* 2.1. Unión Externa : .............. UNION, UNION ALL                                  */
/* 2.1.1. UNION : .................... SELECT _ FROM _ UNION SELECT _ FROM _             */
/* 2.1.2. UNION ALL : ................ SELECT _ FROM _ UNION ALL SELECT _ FROM _         */
/* 2.2. Unión Interna : .............. INNER JOIN, LEFT JOIN, RIGHT JOIN                 */
/* 2.2.1. INNER JOIN : ............... SELECT _ FROM _ INNER JOIN _ ON _._ = _._         */
/* 2.2.1.1. Con Repeticiones : ....... INNER JOIN                                        */
/* 2.2.1.2. Sin Repeticiones : ....... DISTINCT                                          */
/* 2.2.1.3. Condicionada : ........... WHERE, OPERADORES, ORDER BY                       */
/* 2.2.2. LEFT JOIN : ................ SELECT _ FROM _ LEFT JOIN _ ON _._ = _._          */
/* 2.2.2. RIGHT JOIN : ............... SELECT _ FROM _ RIGHT JOIN _ ON _._ = _._         */
/* 2.3. Subconsultas : ............... IN, NOT IN                                        */
/* 2.3.1. Escalonada : ............... SELECT _ FROM _ WHERE _ IN (SELECT _ FROM _ )     */
/* 2.3.2. Lista : .................... SELECT _ FROM _ WHERE _ IN (SELECT _ FROM _ )     */
/* 2.3.2. Correlacionada : ........... SELECT _ FROM _ WHERE _ IN (SELECT _ FROM _ )     */
/* 3. CONSULTAS DE ACCIÓN [Final]                                                        */
/* ------------------------------------------------------------------------------------- */
/* BIBLIOGRAFÍA                                                                          */
/* ------------------------------------------------------------------------------------- */
/* ************************************************************************************* */
/* EN CONSOLA: XAMPP / SHELL / cd mysql/bin / mysql -h localhost -u root -p / ENTER      */
/* ************************************************************************************* */


/* ************************************************************************************* */
/* ------------------------------ 1. CONSULTAS DE ACCIÓN ------------------------------- */
/* -------------------------------------- INICIO --------------------------------------- */
/* ************************************************************************************* */

-- ------------------------------------------------------------------------------------- --
-- 1.1. Crear una Tabla a partir de Otra. ---------------------------------------------- --
--      CREATE TABLE __ SELECT __ FROM __ WHERE __ = __ : ------------------------------ --
-- ------------------------------------------------------------------------------------- --
-- Queremos crear una tabla de "archivo" con todos los alquileres que ya fueron completados.
-- La nueva tabla 'alquileres_completados' se creará con la estructura y los datos del SELECT.
CREATE TABLE alquileres_completados 
AS
SELECT * 
FROM alquileres 
WHERE estado = 'completado';

-- ------------------------------------------------------------------------------------- --
-- 1.2. Datos Anexados. ---------------------------------------------------------------- --
--      INSERT INTO __ SELECT __ FROM __ : --------------------------------------------- --
-- ------------------------------------------------------------------------------------- --
-- Primero, creamos una tabla para un registro histórico de mantenimientos.
CREATE TABLE mantenimientos_historico LIKE mantenimientos; -- 'LIKE' copia la estructura, no los datos.

-- Ahora, insertamos en nuestra tabla histórica todos los mantenimientos realizados antes de 2023.
INSERT INTO mantenimientos_historico
SELECT * 
FROM mantenimientos 
WHERE YEAR(fecha_inicio) < 2023;


/* ************************************************************************************* */
/* ----------------------------- 2. CONSULTAS DE SELECCIÓN ----------------------------- */
/* -------------------------- EXTERNA, INTERNA Y SUBCONSULTAS -------------------------- */
/* ************************************************************************************* */

-- ------------------------------------------------------------------------------------- --
-- 2.1. Unión Externa. ----------------------------------------------------------------- --
--      UNION, UNION ALL : ------------------------------------------------------------- --
-- ------------------------------------------------------------------------------------- --
-- Obtener una lista única de todos los contactos de la empresa (clientes y proveedores).
-- Si un cliente también es proveedor con el mismo nombre y teléfono, solo aparecerá una vez.
SELECT nombre, telefono, 'Cliente' AS tipo_contacto FROM clientes
UNION
SELECT nombre, telefono, 'Proveedor' AS tipo_contacto FROM proveedores;

-- Misma consulta, pero si hay duplicados, los mostrará. Es más rápida porque no verifica duplicados.
SELECT nombre, telefono, 'Cliente' AS tipo_contacto FROM clientes
UNION ALL
SELECT nombre, telefono, 'Proveedor' AS tipo_contacto FROM proveedores;

-- ------------------------------------------------------------------------------------- --
-- 2.2. Unión Interna. ----------------------------------------------------------------- --
--      INNER JOIN, LEFT JOIN, RIGHT JOIN : -------------------------------------------- --
-- ------------------------------------------------------------------------------------- --

-- ------------------------------------------------------------------------------------- --
-- 2.2.1. INNER JOIN. ------------------------------------------------------------------ --
--        SELECT __ FROM __ INNER JOIN __ ON __.__ = __.__ : --------------------------- --
-- ------------------------------------------------------------------------------------- --
SELECT DISTINCT c.nombre, c.email
FROM clientes AS c
INNER JOIN alquileres AS a ON c.id = a.cliente_id
INNER JOIN alquiler_detalles AS ad ON a.id = ad.alquiler_id
INNER JOIN productos AS p ON ad.producto_id = p.id
INNER JOIN subcategorias AS sc ON p.subcategoria_id = sc.id
WHERE sc.nombre LIKE '%Micrófonos%';

-- ------------------------------------------------------------------------------------- --
-- 2.2.1.1. Con repeticiones. ---------------------------------------------------------- --
--          SELECT __ FROM __ INNER JOIN __ ON __.__ = __.__ : ------------------------- --
-- ------------------------------------------------------------------------------------- --
-- Mostrar el nombre del producto y el nombre del cliente que lo alquiló.
-- Un producto puede aparecer varias veces si ha sido alquilado por diferentes clientes.
SELECT p.nombre AS producto, c.nombre AS cliente
FROM alquiler_detalles AS ad
INNER JOIN productos AS p ON ad.producto_id = p.id
INNER JOIN alquileres AS a ON ad.alquiler_id = a.id
INNER JOIN clientes AS c ON a.cliente_id = c.id;
-- ------------------------------------------------------------------------------------- --
-- 2.2.1.2. Sin repeticiones. ---------------------------------------------------------- --
--          SELECT DISTINCT __ FROM __ INNER JOIN __ ON __.__ = __.__ : ---------------- --
-- ------------------------------------------------------------------------------------- --
-- Mostrar una lista de clientes que HAN alquilado algo (cada cliente aparece solo una vez).
SELECT DISTINCT c.nombre
FROM clientes AS c
INNER JOIN alquileres AS a ON c.id = a.cliente_id;
-- ------------------------------------------------------------------------------------- --
-- 2.2.1.2. Condicionada. -------------------------------------------------------------- --
--          WHERE, OPERADORES, ORDER BY : ---------------------------------------------- --
-- ------------------------------------------------------------------------------------- --
-- Mostrar los productos alquilados por 'Juan Pérez' (ID 1), ordenados por fecha de alquiler.
SELECT p.nombre, a.fecha_salida
FROM alquiler_detalles AS ad
INNER JOIN productos AS p ON ad.producto_id = p.id
INNER JOIN alquileres AS a ON ad.alquiler_id = a.id
WHERE a.cliente_id = 1
ORDER BY a.fecha_salida DESC;

-- ------------------------------------------------------------------------------------- --
-- 2.2.2. LEFT JOIN. ------------------------------------------------------------------- --
--        SELECT __ FROM __ LEFT JOIN __ ON __.__ = __.__ : ---------------------------- --
-- ------------------------------------------------------------------------------------- --

-- Mostrar TODOS los productos y, si han tenido mantenimiento, mostrar la fecha del mismo.
-- Los productos que nunca han tenido mantenimiento también aparecerán en la lista.
SELECT p.nombre, m.tipo_mantenimiento, m.fecha_inicio
FROM productos AS p
LEFT JOIN mantenimientos AS m ON p.id = m.producto_id;

-- TRUCO: Para encontrar productos que NUNCA han tenido mantenimiento.
SELECT p.nombre
FROM productos AS p
LEFT JOIN mantenimientos AS m ON p.id = m.producto_id
WHERE m.id IS NULL; -- Filtramos donde no hubo coincidencia.

-- ------------------------------------------------------------------------------------- --
-- 2.2.3. RIGHT JOIN. ------------------------------------------------------------------ --
--        SELECT __ FROM __ RIGHT JOIN __ ON __.__ = __.__ : --------------------------- --
-- ------------------------------------------------------------------------------------- --
-- Mostrar TODAS las subcategorías y los productos que pertenecen a ellas.
-- Si una subcategoría no tiene ningún producto, aún así aparecerá.
SELECT p.nombre, sc.nombre AS subcategoria
FROM productos AS p
RIGHT JOIN subcategorias AS sc ON p.subcategoria_id = sc.id;
-- ------------------------------------------------------------------------------------- --

-- ------------------------------------------------------------------------------------- --
-- 2.3. Subconsultas. ------------------------------------------------------------------ --
--      IN, NOT IN, ANY, ALL : --------------------------------------------------------- --
-- ------------------------------------------------------------------------------------- --
-- ------------------------------------------------------------------------------------- --
-- 2.3.1. Escalonada. ------------------------------------------------------------------ --
--        SELECT __ FROM __ WHERE __ IN (SELECT __ FROM __ WHERE __ ) : ---------------- --
-- ------------------------------------------------------------------------------------- --

-- Mostrar todos los productos que pertenecen a la categoría 'Equipo de Audio' (ID 2).
-- Paso 1: La subconsulta obtiene los IDs de las subcategorías de 'Equipo de Audio'.
-- Paso 2: La consulta principal busca productos cuyo subcategoria_id esté en esa lista.
SELECT nombre, estado
FROM productos
WHERE subcategoria_id IN (SELECT id FROM subcategorias WHERE categoria_id = 2);

-- Lo opuesto: Mostrar productos que NO son 'Equipo de Audio'.
SELECT nombre, estado
FROM productos
WHERE subcategoria_id NOT IN (SELECT id FROM subcategorias WHERE categoria_id = 2);
-- ------------------------------------------------------------------------------------- --
-- 2.3.3. Correlacionada. -------------------------------------------------------------- --
--        SELECT __ FROM __ WHERE __ IN (SELECT __ FROM __ WHERE __ ) : ---------------- --
-- ------------------------------------------------------------------------------------- --
-- Encontrar productos cuyo stock es mayor que el promedio de stock de su PROPIA subcategoría.
-- Para cada producto (p1), la subconsulta calcula el promedio de stock
-- SOLO para la subcategoría de ese producto en particular.
SELECT 
    p1.nombre, 
    p1.stock
FROM productos AS p1
WHERE p1.stock > (
    SELECT AVG(p2.stock) 
    FROM productos AS p2 
    WHERE p2.subcategoria_id = p1.subcategoria_id -- La correlación está aquí.
);

/* ************************************************************************************* */
/* ------------------------------ 3. CONSULTAS DE ACCIÓN ------------------------------- */
/* --------------------------------------- FINAL --------------------------------------- */
/* ************************************************************************************* */

-- ------------------------------------------------------------------------------------- --
-- 3.1. Eliminar Datos de una Tabla Relacionada. --------------------------------------- --
--       : ----------------------------------------------------------------------------- --
-- ------------------------------------------------------------------------------------- --
DELETE CLIENTES FROM CLIENTES LEFT JOIN PEDIDOS 
ON clientes.codigo_customer = pedidos.codigo_customer
WHERE pedidos.codigo_customer IS NULL;


/* ************************************************************************************* */
/* ------------------------------------------------------------------------------------- */
/* ----------------------------------- BIBLIOGRAFÍA ------------------------------------ */
/* ------------------------------------------------------------------------------------- */
/* ************************************************************************************* */

-- ------------------------------------------------------------------------------------- --
-- Tutoriales de Programación ya. (s.f.). MySQL ya. Recuperado el 15 de Mayo de 2022,    --
--      de https://www.tutorialesprogramacionya.com/mysqlya/                             --
-- ------------------------------------------------------------------------------------- --
-- Pildoras Informáticas. (16 de Julio de 2015). Curso SQL.                              --
--      Recuperado el 16 de Abril de 2022, de [Archivo de Vídeo]                         --
--      https://www.youtube.com/playlist?list=PLU8oAlHdN5Bmx-LChV4K3MbHrpZKefNwn         --
--      página web                                                                       --
-- ------------------------------------------------------------------------------------- --