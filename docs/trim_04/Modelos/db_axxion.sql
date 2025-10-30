DROP DATABASE inventario_axxion;
-- -----------------------------------------------------
-- Schema Inventario_axxion
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Inventario_axxion` DEFAULT CHARACTER SET utf8 ;
USE `Inventario_axxion` ;


CREATE TABLE categorias (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(200) NOT NULL,
  `estado` TINYINT(10) NOT NULL,
  `descripción` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`)
  )
ENGINE = InnoDB;


CREATE TABLE Subcategorias (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `categorias_id` INT(10) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Subcategorias_categorias_idx` (`categorias_id` ASC),
  CONSTRAINT `fk_Subcategorias_categorias`
    FOREIGN KEY (`categorias_id`)
    REFERENCES `categorias` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE salida (
  `id` INT NOT NULL,
  `serial_producto` VARCHAR(45) NOT NULL,
  `fecha_de_creacion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


CREATE TABLE proveedores (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(200) NOT NULL,
  `telefono` VARCHAR(200) NOT NULL,
  `dirección` TEXT NOT NULL,
  `estado` DATE NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


CREATE TABLE entradas (
  `id` INT NOT NULL,
  `id_provedor` VARCHAR(45) NOT NULL,
  `id_prodcuto` VARCHAR(45) NOT NULL,
  `proveedores_id` INT(10) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_entradas_proveedores1_idx` (`proveedores_id` ASC),
  CONSTRAINT `fk_entradas_proveedores1`
    FOREIGN KEY (`proveedores_id`)
    REFERENCES `Inventario_axxion`.`proveedores` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE detalles_entradas (
  `id` INT NOT NULL,
  `entrada_id` INT NOT NULL,
  `serial_producto` VARCHAR(255) NULL,
  `nombre_producto` TEXT NULL,
  INDEX `fk_detalles_entradas_entrada_idx` (`entrada_id` ASC),
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_detalles_entradas_entrada`
    FOREIGN KEY (`entrada_id`)
    REFERENCES `Inventario_axxion`.`entradas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE Productos (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `nombre_producto` VARCHAR(255) NOT NULL,
  `detalle` TEXT NOT NULL,
  `estado` TINYINT NOT NULL,
  `stock_id` INT NOT NULL,
  `Subcategorias_id` INT NOT NULL,
  `salida_id` INT NOT NULL,
  `detalles_entrada_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Productos_Subcategorias1_idx` (`Subcategorias_id` ASC) ,
  INDEX `fk_Productos_salida1_idx` (`salida_id` ASC) ,
  INDEX `fk_productos_detalles_entrada_idx` (`detalles_entrada_id` ASC),
  CONSTRAINT `fk_Productos_Subcategorias1`
    FOREIGN KEY (`Subcategorias_id`)
    REFERENCES `Inventario_axxion`.`Subcategorias` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Productos_salida1`
    FOREIGN KEY (`salida_id`)
    REFERENCES `Inventario_axxion`.`salida` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_productos_detalles_entrada`
    FOREIGN KEY (`detalles_entrada_id`)
    REFERENCES `Inventario_axxion`.`detalles_entradas` (`entrada_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



CREATE TABLE roles (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `nombre de rol` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


CREATE TABLE usuarios (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(200) NOT NULL,
  `correo electrónico` VARCHAR(200) NOT NULL,
  `contraseña` VARCHAR(200) NOT NULL,
  `rol_id` INT(10) NOT NULL,
  `dirección` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_usuarios_roles1_idx` (`rol_id` ASC),
  CONSTRAINT `fk_usuarios_roles1`
    FOREIGN KEY (`rol_id`)
    REFERENCES `Inventario_axxion`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE clientes (
  `id` INT(10) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_clientes_usuarios`
    FOREIGN KEY (`id`)
    REFERENCES `Inventario_axxion`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE Mantenimiento (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tipo_mantenimiento` VARCHAR(45) NOT NULL,
  `descripción` TEXT NOT NULL,
  `costo` FLOAT NOT NULL,
  `estado` INT NOT NULL DEFAULT 0,
  `Productos_id` INT NOT NULL,
  `cliente_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Mantenimiento_Productos1_idx` (`Productos_id` ASC) ,
  INDEX `fk_Mantenimiento_clientes_idx` (`cliente_id` ASC) ,
  CONSTRAINT `fk_Mantenimiento_Productos1`
    FOREIGN KEY (`Productos_id`)
    REFERENCES `Inventario_axxion`.`Productos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Mantenimiento_clientes`
    FOREIGN KEY (`cliente_id`)
    REFERENCES `Inventario_axxion`.`clientes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE alquiler (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_cliente` VARCHAR(45) NOT NULL,
  `fecha_salida` VARCHAR(45) NOT NULL,
  `id_producto` VARCHAR(45) NOT NULL,
  `costo` FLOAT NOT NULL,
  `cliente_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_alquiler_clientes_idx` (`cliente_id` ASC) ,
  CONSTRAINT `fk_alquiler_clientes`
    FOREIGN KEY (`cliente_id`)
    REFERENCES `Inventario_axxion`.`clientes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;